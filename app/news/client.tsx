'use client';
import { Hydra, Reactive } from 'reactive-frames';

export default function Client() {
  return (
    <Reactive className="fixed top-0 left-0 h-screen w-screen -z-10">
      <Hydra
        name="h"
        className="fixed top-0 left-0 h-screen w-screen -z-10"
        draw={(h) => {
          self.osc(2, 0.1)
            .modulate(self.noise(3), 0.4)
            .diff(self.o0)
            .modulateScrollX(self.osc(0.2).modulate(self.osc().rotate(), 0.2))
            .scale(0.5)
            .color(0.3, 0.014, 1)
            .out();
        }}
      />
    </Reactive>
  );
}
