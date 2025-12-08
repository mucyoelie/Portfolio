import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Stars
    const starCount = 1500;
    const positions = new Float32Array(starCount * 3);
    const velocities = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = -Math.random() * 5;
      velocities[i] = 0.002 + Math.random() * 0.003;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const starMaterial = new THREE.PointsMaterial({
      color: "#ea580c",
      size: 0.02,
      opacity: 0.6,
      transparent: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const animate = () => {
      const pos = starGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < starCount; i++) {
        pos[i * 3 + 2] += velocities[i];

        if (pos[i * 3 + 2] > 1) {
          pos[i * 3 + 2] = -5;
          pos[i * 3] = (Math.random() - 0.5) * 10;
          pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
        }
      }

      starGeometry.attributes.position.needsUpdate = true;

      stars.rotation.x += 0.0008;
      stars.rotation.y += 0.001;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
     ref={mountRef}
  className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-x-hidden"
    />
  );
}

