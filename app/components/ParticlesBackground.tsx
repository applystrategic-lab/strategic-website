"use client";

import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: false,

        background: {
          color: "transparent",
        },

        fpsLimit: 120,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },

            resize: true,
          },

          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
          },
        },

        particles: {
          number: {
            value: 55,
            density: {
              enable: true,
              area: 900,
            },
          },

          color: {
            value: [
              "#D4A017",
              "#ffffff",
              "#1E4E8C",
            ],
          },

          opacity: {
            value: 0.25,
            random: true,
          },

          size: {
            value: {
              min: 1,
              max: 5,
            },
            random: true,
          },

          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },

          links: {
            enable: true,
            distance: 140,
            color: "#D4A017",
            opacity: 0.08,
            width: 1,
          },

          shape: {
            type: "circle",
          },
        },

        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}