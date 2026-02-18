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
      textPositions: { x: number; y: number; width: number; height: number; word: string }[]
    }
  >

  return (
    <Reactive className="fixed top-0 left-0 h-screen w-screen -z-10">
      <Processing
        name="p"
        type="p2d"
        className="h-full w-full absolute top-0 left-0"
        setup={async (p, { props }) => {
          props.mouseX = 0
          props.mouseY = 0
          props.textPositions = []

          p.mouseMoved = (ev) => {
            invariant(ev)
            props.mouseX = ev.clientX
            props.mouseY = ev.clientY
          }

          await new Promise((resolve) => {
            let img1: Image, img2: Image

            const checkCompletion = () => {
              if (img1 && img2) {
                props.img1 = img1
                props.img2 = img2
                resolve(true)
              }
            }

            p.loadImage('/img/futurist.png', (image) => {
              img1 = image
              checkCompletion()
            })
            p.loadImage('/img/manifesto.png', (image) => {
              img2 = image
              checkCompletion()
            })

            props.textStrings = [
              'Composer',
              'Performer',
              'Teacher',
              'Musician',
              'Improviser',
              'Programmer',
              'Media Artist',
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
          props.textPositions = []

          for (let string of props.textStrings) {
            i++
            const textSize =
              10 + (p.sin(i * 2.5249 + time) * 0.5 + 0.5) * 48
            p.textSize(textSize)

            const xPos = (i * t) % (p.width / 2)
            const yPos = (i * t + 0.5 * 100) % (p.height / 2)

            // Track word bounding box (x, y, width, height)
            const wordWidth = p.textWidth(string)
            const wordHeight = textSize

            props.textPositions.push({
              x: xPos,
              y: yPos - wordHeight / 2, // Adjust so text isn't shifted
              width: wordWidth,
              height: wordHeight,
              word: string,
            })

            p.text(string, xPos, yPos)
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

          // Hover detection for playing sound
          const hoverThreshold = 10 // Range for detecting hover near the text
          for (let { x, y, width, height, word } of props.textPositions) {
            if (
              props.mouseX >= x &&
              props.mouseX <= x + width &&
              props.mouseY >= y - height / 2 &&
              props.mouseY <= y + height / 2
            ) {
              playSound(word)
            }
          }
        }}
      />
    </Reactive>
  )
}

const wordAudioMap = {
  Composer: '/sounds/composer.mp3',
  Performer: '/sounds/performer.mp3',
  Teacher: '/sounds/teacher.mp3',
  'Music man': '/sounds/musician.mp3',
  Improviser: '/sounds/improviser.mp3',
  Programmer: '/sounds/programmer.mp3',
  'Media Artist': '/sounds/mediaartist.mp3',
}

const audioCache = {}

function playSound(word) {
 // const minTime = 20.0;//20 ms
  if (!wordAudioMap[word]) return

  if (!audioCache[word]) {
    audioCache[word] = new Audio(wordAudioMap[word])
  }
  audioCache[word].currentTime = 0
  audioCache[word].play()
}
