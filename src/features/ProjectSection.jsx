import { useThree, useFrame } from "@react-three/fiber";
import { project } from "../../public/project/dataProject";
import { motion } from "framer-motion-3d";
import { Image, Text } from "@react-three/drei";
import { useAtom } from "jotai";
import { currentProjectAtom } from "../hooks/currtentAtom";
import { useEffect, useRef } from "react";
import { animate, useMotionValue } from "framer-motion";

export default function ProjectSection() {
  const { viewport } = useThree();
  const [atomProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {project.map((data, i) => (
        <motion.group
          key={i}
          position={[i * 8, 0, -3]}
          animate={{
            x: 0 + (i - atomProject) * 8,
            y: atomProject === i ? 1 : -0.1,
            z: atomProject === i ? -2 : -3,
            rotateX: atomProject === i ? 0 : -Math.PI / 3,
            rotateZ: atomProject === i ? 0 : -0.1 * Math.PI,
          }}
        >
          <Projects data={data} highlighted={i === atomProject} />
        </motion.group>
      ))}
    </group>
  );
}

function Projects(props) {
  const { data, highlighted } = props;
  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 1 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.1}
        onClick={() => window.open(data.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[7, 6]} />
        <meshBasicMaterial color={"#1f2937"} opacity={0.4} />
      </mesh>
      <Image
        scale={[6.2, 2.8, 2.8]}
        url={data.image}
        toneMapped={false}
        position-y={1.4}
      />
      <Text
        anchorY={"top"}
        fontSize={0.47}
        fontWeight={700}
        position={[0, -0.001, 0]}
        color={"#a16207"}
      >
        {data.name.toUpperCase()}
      </Text>
      <Text
        maxWidth={5}
        fontSize={0.4}
        position={[0, -0.899, 0]}
        fontWeight={400}
        color={"#a16207"}
      >
        Framework: {data.framework}
      </Text>
      <Text
        anchorY={"top"}
        maxWidth={6}
        fontSize={0.4}
        position={[0, -1.3, 0]}
        fontWeight={400}
        color={"#a16207"}
      >
        Details: {data.caption}
      </Text>
    </group>
  );
}
