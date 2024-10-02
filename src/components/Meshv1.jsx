import { Environment, useScroll } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import Studio from "../features/Studio";
import Avatar from "../features/Avatar";
import { useFrame, useThree } from "@react-three/fiber";
import useMenuOpen from "../hooks/useMenuOpen";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { framerMotion } from "../helper/framerMotion";

export default function Mesh({ section }) {
  const { viewport } = useThree();
  const { menuOpen } = useMenuOpen();
  const data = useScroll();
  const [sectionsPage, setSectionsPage] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Pointing");
    }, 600);
  }, [section]);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpen ? -10 : 0, {
      ...framerMotion,
    });

    animate(cameraLookAtX, menuOpen ? 2 : 0, {
      ...framerMotion,
    });
  }, [menuOpen]);

  // const refCharacterContainer = useRef();

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }
    if (curSection !== sectionsPage) {
      setSectionsPage(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    /**Postion and Rotatiion */
    // const position = new THREE.Vector3();
    // refCharacterContainer.current.getWorldPosition(position);

    // const quaterion = new THREE.Quaternion();
    // refCharacterContainer.current.getWorldQuaternion(quaterion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaterion, "XYZ");
  });

  return (
    <>
      <motion.group
        position={[7.3470288281143885, -3.1495, 0.00594928700795172]}
        rotation={[1.9005769074585792, 0.2808855196597682, -2.408466454987372]}
        animate={"" + sectionsPage}
        transition={{ duration: 0.3 }}
        variants={{
          0: { scaleX: 4.2, scaleY: 4.2, scaleZ: 4.2 },
          1: {
            y: -viewport.height + 0.5,
            x: 0,
            z: 7,
            rotateX: 1,
            rotateY: 0,
            rotateZ: 0,
            scaleX: 4,
            scaleY: 4,
            scaleZ: 4,
          },
          2: {
            x: -5,
            y: -viewport.height * 2 + 0.5,
            z: 0,
            rotateX: 1.77,
            rotateY: 0.477,
            rotateZ: -2,
            scaleX: 4,
            scaleY: 4,
            scaleZ: 4,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 3,
            z: 15,
            rotateX: 1.23,
            rotateY: -0.244,
            rotateZ: 0.44,
            scaleX: 4,
            scaleY: 4,
            scaleZ: 4,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <ambientLight intensity={1} />
      <Environment preset="city" />
      <motion.group
        position={[5, -4, 1]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? -4 : -5,
        }}
      >
        <Studio section={section} />
        {/* <group
          ref={refCharacterContainer}
          name="character"
          position={[1.063, 0.945, -2.625]}
          rotation={[2, -0.024, Math.PI]}
          scale={4.935}
        ></group> */}
      </motion.group>
    </>
  );
}
