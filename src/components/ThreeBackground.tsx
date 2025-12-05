import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // === Scene Setup ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // === STAR FIELD ===
    const starCount = 1500;
    const positions = new Float32Array(starCount * 3);
    const velocities = new Float32Array(starCount); // for z-axis speed

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = -Math.random() * 5; // z
      velocities[i] = 0.002 + Math.random() * 0.003; // speed along z
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const starMaterial = new THREE.PointsMaterial({
      color: "rgba(0, 98, 66, 1)",
      size: 0.02,
      opacity: 0.6,
      transparent: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // === Animation ===
    const animate = () => {
      const positionsArray = starGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < starCount; i++) {
        positionsArray[i * 3 + 2] += velocities[i]; // move along z

        if (positionsArray[i * 3 + 2] > 1) {
          positionsArray[i * 3 + 2] = -5; // reset star back
          positionsArray[i * 3] = (Math.random() - 0.5) * 10;
          positionsArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
        }
      }

      starGeometry.attributes.position.needsUpdate = true;

      stars.rotation.x += 0.0008;
      stars.rotation.y += 0.001;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // === Cleanup ===
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 opacity-60 pointer-events-none"
    />
  );
}
