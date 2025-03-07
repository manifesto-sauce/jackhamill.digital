'use client'

import { Reactive, Hydra } from 'reactive-frames'

export default function Client() {
  return (
    <Reactive className='fixed top-0 left-0 h-screen w-screen -z-10 opacity-30'>
      <Hydra
        name='h'
        className='fixed top-0 left-0 h-screen w-screen -z-10'
        draw={self => {
  self.src(self.o0).modulate(
  
  self.noise(3)
  ,  0.2)
  .blend(
  
self.shape(3, 0.1, 0.1).rotate(-1.75).scroll(
  ()=>0.4-mouse.x/window.innerWidth,
  ()=>0.4-mouse.y/window.innerHeight)
  
  , 0.4).out(self.o0)


          
        }}
      />
    </Reactive>
  )
}
