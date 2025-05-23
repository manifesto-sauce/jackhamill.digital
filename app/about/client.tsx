'use client'

import { Hydra, Reactive } from 'reactive-frames'

export default function Client() {
  return (
    <Reactive className='h-screen w-screen fixed top-0 left-0 -z-10'>
      <Hydra
        name='hydra'
        className='h-screen w-screen fixed top-0 left-0 -z-10'
        draw={self => {
self.s0.initCam();

self.osc(5)
  .modulate(self.src(self.s0), 1)
  .modulatePixelate(
    self.noise(2, 0.5)
      .modulatePixelate(self.noise(40, 0.2)),
    30
  )
  .brightness(-0.9)
  .contrast(0.5)
  .out(self.o0);

self.render(self.o0);

        }}
        
      />
    </Reactive>
  );
  
}
