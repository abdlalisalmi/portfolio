import { useMediaQuery } from "@mantine/hooks";
import styles from "../../styles/FirstHero.module.scss";
import ShapeHero from "../icons/ShapeHero";
import LineHero from "../icons/LineHero";
import { HiGlobeEuropeAfrica } from "react-icons/hi2";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function FirstHero() {
  const matches = useMediaQuery("(min-width: 992px)");
  const globeSize = 950;

  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      //   opacity: 0.1,
      devicePixelRatio: 2,
      width: globeSize * 2,
      height: globeSize * 2,
      phi: 0,
      theta: 0.45,
      dark: 2,
      diffuse: 1.2,
      mapSamples: 33000,
      mapBrightness: 2,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      scale: 1,
      markers: [
        // longitude latitude
        { location: [32.2200118, -7.9419781], size: 0.03 },
        // { location: [37.7595, -122.4367], size: 0.03 },
        // { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.003;
      },
    });
    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <section className={styles.section}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: globeSize,
          maxWidth: "100%",
          aspectRatio: 1,
          position: "absolute",
          zIndex: -1,
          top: matches ? "-40%" : "-40%",
          left: matches ? "-37%" : "0%",
        }}
      />
      <div className={styles.leftSide}>
        {matches ? <ShapeHero /> : <ShapeHero />}
        <span>
          <HiGlobeEuropeAfrica size={28} />
        </span>
        {matches ? <LineHero /> : <LineHero />}
      </div>
      <div className={styles.content}>
        <div className={styles.code}>
          <p>
            Abdlalisalmi
            <code>/README.md</code>
          </p>
        </div>
        <div>
          <h1>
            <span>Hello, I'm </span>
            Abdelaali ES SALMI
          </h1>
          <p>
            I'm a full-stack web developer, I love to build web applications and
            I'm always looking for new challenges.
          </p>
        </div>
        <div>hello</div>
      </div>
    </section>
  );
}
