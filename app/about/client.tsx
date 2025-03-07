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
self.osc(5).modulate(self.src(s0),1)
  .modulatePixelate(
  self.noise(2,0.5).modulatePixelate(self.noise(40, 0.2))
  ,30
)
.brightness(-0.9)
.contrast( 0.5).out(self.o0)
self.render(self.o0)
          /*
          self.osc().modulateRotate(self.o0, 0.3).out()
          //          self.osc().modulateRotate(self.o0, 0.3).out()

          self.osc(33, 0.3, 0.3).diff(self.o3, 3).out(self.o1)
          self
          //  .osc(3, 0.3, 33)
          .osc(3, 0.3, 33)

            .modulateKaleid(self.o3, 3)
            .diff(self.o0)
            .out(self.o2)
          self.src(self.o0, 30).mult(self.o1, 3).kaleid(3).out(self.o3)
          //          self.src(self.o0, 3).mult(self.o1, 3).kaleid(3).out(self.o3)

          self.render(self.o2)
*/
          
        }}
      />
    </Reactive>
  )
}
