// src/components/ParticlesBackground.jsx

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine); // you can debug here
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true, // makes it fullscreen
          zIndex: -1,   // stays behind everything
        },
        background: {
          color: "#1b252c",
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#EA414A", "#ffffff", "#87909b"],
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.5,
            random: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
