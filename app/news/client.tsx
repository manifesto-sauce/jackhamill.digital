'use client'
import { Hydra, Reactive } from 'reactive-frames'

export default function Client() {
  return (
    <Reactive className='fixed top-0 left-0 h-screen w-screen -z-10'>
      <Hydra
        name='h'
        className='h-full w-full'
        draw={h => {
          const { o0, o1, o2, o3 } = h
          h.noise(3, 0.3, 3).thresh(0.3, 0.03).diff(o3, 0.3).out(o1)
          h.gradient([0.3, 0.3, 3]).diff(o0).blend(o1).out(o3)
          h.voronoi(33, 3, 30)
            .rotate(3, 0.3, 0)
            .modulateScale(o2, 0.3)
            .color(-3, 3, 0)
            .brightness(3)
            .out(o0)
          h.shape(30, 0.3, 1)
            .invert(({ time }) => Math.sin(time) * 3)
            .out(o2)

          h.render(o3)
        }}
      />
    </Reactive>
  )
}
