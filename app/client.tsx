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
      {
        // The Processing environment, powered by p5.js (https://p5js.org). Use this component to create the main background image of the homepage.
      }
      <Processing
        name='p'
        type='p2d'
        className='h-full w-full absolute top-0 left-0'
        /**
         * @props p: the p5 instance, and {props}, the context object consisting of {time, props, elements}. See Reactive section of README.md for more.
         */
        setup={async (p, { props }) => {
          /**
           * A callback called whenever the mouse is moved.
           */
          p.mouseMoved = ev => {
            invariant(ev)
            // Edit the global props object in the context.
            props.mouseX = ev['clientX']
            props.mouseY = ev['clientY']
          }
          // This is an asynchronous function because we have to load these images, so we wait for load before calling "res" to finish the function.
          await new Promise((resolve, reject) => {
            let img1: Image, img2: Image
            // If both images are loaded in, resolve.
            const checkCompletion = () => {
              if (img1 && img2) {
                props.img1 = img1
                props.img2 = img2
                resolve(true)
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
              'teacher',
              'improviser',
              'programmer',
              'video artist',
              'some guy',
              'media artist'
            ]

            p.textFont('Andale Mono')
          })
        }}
        draw={(p, { props, time }: Context) => {
          // Don't draw until setup is completed
          if (!props.img1 || !props.img2 || !props.textStrings) return
          p.clear()
          p.fill('lightgreen')
          p.noStroke()

          let i = 0
          const t = time * 100
          // Draw each of the textStrings in the setup function
          for (let string of props.textStrings) {
            i++
            p.textSize(10 + (p.sin(i * 2.5249 + time) * 0.5 + 0.5) * 48)
            p.text(
              string,
              (i * t) % (p.width / 2),
              (i * t + 0.5 * 100) % (p.height / 2)
            )
          }

          // Draw the two album covers, moving around in response to mouse movement.
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
      {
        // A top layer of the background, that just has a little shader to draw horizontal lines. More about GLSL fragment shaders: https://webgl2fundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html
        // The filter shader is passed a vertex shader with that creates the vTexCoord parameter.
      }
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
          p.filter(shader)
        }}
      />
    </Reactive>
  )
}
