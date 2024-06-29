'use client'

import type { Image } from 'p5'
import { Processing, Reactive } from 'reactive-frames'
import { ReactiveContext } from 'reactive-frames/dist/types'
import invariant from 'tiny-invariant'

export default function Client() {
  type Context = ReactiveContext<
    {},
    {
      img1: Image
      img2: Image
      mouseX: number
      mouseY: number
      textStrings: string[]
    }
  >
  return (
    <Reactive className='fixed top-0 left-0 h-screen w-screen -z-10'>
      <Processing
        name='p'
        type='p2d'
        className='h-full w-full absolute top-0 left-0'
        setup={async (p, { props }) => {
          const pieces = ['futurist', 'manifesto']
          p.mouseMoved = ev => {
            invariant(ev)
            props.mouseX = ev['clientX']
            props.mouseY = ev['clientY']
          }
          await new Promise((res, rej) => {
            let img1: Image, img2: Image
            const checkCompletion = () => {
              if (img1 && img2) {
                props.img1 = img1
                props.img2 = img2
                res(true)
              }
            }
            p.loadImage('/img/futurist.png', image => {
              img1 = image
              checkCompletion()
            })
            p.loadImage('/img/manifesto.png', image => {
              img2 = image
              checkCompletion()
            })

            props.textStrings = [
              'composer',
              'performer',
              'media artist',
              '3 hands',
              '4 legs',
              'Extraordinary!',
              'Magnificent!'
            ]

            p.textFont('Andale Mono')
          })
        }}
        draw={(p, { props, time }: Context) => {
          if (!props.img1 || !props.img2 || !props.textStrings) return
          p.clear()
          p.fill('lightgreen')
          p.noStroke()

          let i = 0
          const t = time * 100
          for (let string of props.textStrings) {
            i++
            p.textSize(10 + (p.sin(i * 2.5249 + time) * 0.5 + 0.5) * 48)
            p.text(
              string,
              (i * t) % (p.width / 2),
              (i * t + 0.5 * 100) % (p.height / 2)
            )
          }

          p.image(
            props.img1,
            (props.mouseX + (((time / 3) * p.width) % (p.width / 2))) %
              (p.width / 2),
            (props.mouseY * 2) % (p.height / 2),
            100,
            100
          )
          p.image(
            props.img2,
            props.mouseY + (((time / 3) * p.width) % (p.width / 2)) * -1,
            props.mouseX,
            100,
            100
          )
        }}
      />
      <Processing
        type='webgl'
        name='overlay'
        className='absolute top-0 left-0 h-full w-full'
        draw={(p, { time }) => {
          // @ts-ignore
          const shader = p.createFilterShader(/*glsl*/ `
            precision highp float;
            varying vec2 vTexCoord;
            uniform float time;
            uniform float height;
            void main() {
              if (mod(vTexCoord.y * height, 5.) < 2.) {
                gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
              } else {
                gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
              }
            }`)

          shader.setUniform('time', time)
          shader.setUniform('height', p.height)
          console.log(shader)

          p.filter(shader)
        }}
      />
    </Reactive>
  )
}
