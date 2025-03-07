'use client'

import { useState, useEffect } from 'react';
import { Reactive, Hydra } from 'reactive-frames';

export default function Client() {
  const [mousePos, setMousePos] = useState({ x: 0.4, y: 0.4 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePos({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <Reactive className="fixed top-0 left-0 h-screen w-screen -z-10 opacity-30">
      <Hydra
        name="h"
        className="fixed top-0 left-0 h-screen w-screen -z-10"
        draw={(self) => {
          self.src(self.o0)
            .modulate(self.noise(3), 0.2)
            .blend(
              self
                .shape(3, 0.1, 0.1)
                .rotate(-1.75)
                .scroll(
                  () => 0.4 - mousePos.x, 
                  () => 0.4 - mousePos.y
                ),
              0.4
            )
            .out(self.o0);
        }}
      />
    </Reactive>
  );
}
