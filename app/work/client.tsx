'use client'

import { Reactive, Hydra } from 'reactive-frames'

export default function Client() {
  return (
    <Reactive className='fixed top-0 left-0 h-screen w-screen -z-10 opacity-30'>
      <Hydra
        name='h'
        className='h-full w-full'
        draw={self => {
          self.osc(10, 0.4).out()
        }}
      />
    </Reactive>
  )
}
