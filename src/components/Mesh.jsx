import { Environment, useScroll } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import Studio from "../features/Studio";
import Avatar from "../features/Avatar";
import { useFrame, useThree } from "@react-three/fiber";
import useMenuOpen from "../hooks/useMenuOpen";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { framerMotion } from "../helper/framerMotion";
import ProjectSection from "../features/ProjectSection";

export default function Mesh({ section }) {
  const { viewport } = useThree();
  const { menuOpen } = useMenuOpen();
  const data = useScroll();
  const [sectionsPage, setSectionsPage] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 38;
  const officeRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const refCharacterContainer = useRef();

  useEffect(() => {
    setCharacterAnimation("Falling");

    setTimeout(() => {
      if (sectionsPage === 0) {
        setCharacterAnimation("Typing");
      }
      if (sectionsPage === 1 || sectionsPage === 3) {
        setCharacterAnimation("Pointing");
      }
      if (sectionsPage === 2) {
        setCharacterAnimation("Kneeling");
      }
    }, 600);
  }, [sectionsPage]);

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

  const characterGroup = useRef();

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

    if (section === 0) {
      refCharacterContainer.current.getWorldPosition(
        characterGroup.current.position
      );
    }
  });

  return (
    <>
      <motion.group
        ref={characterGroup}
        rotation={[1.9005769074585792, 0.2808855196597682, -2.408466454987372]}
        animate={"" + sectionsPage}
        transition={{ duration: 0.3 }}
        variants={{
          0: {
            scaleX: officeRatio * 5,
            scaleY: officeRatio * 5,
            scaleZ: officeRatio * 5,
          },
          1: {
            y: -viewport.height + -1,
            x: 0,
            z: 3,
            rotateX: 1,
            rotateY: 0,
            rotateZ: 0,
            scaleX: 4,
            scaleY: 4,
            scaleZ: 4,
          },
          2: {
            x: -5,
            y: -viewport.height * 2 + 1,
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
            x: 1,
            z: 15,
            rotateX: 1.23,
            rotateY: -0.244,
            rotateZ: 0.44,
            scaleX: officeRatio * 4.8,
            scaleY: officeRatio * 4.8,
            scaleZ: officeRatio * 4.8,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <ambientLight intensity={1} />
      <Environment preset="city" />
      <motion.group
        position={[
          isMobile ? 0 : 5 * responsiveRatio,
          isMobile ? -viewport.height / 6 : -4,
          1,
        ]}
        scale={[officeRatio, officeRatio, officeRatio]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? -4 : -5,
        }}
      >
        <Studio section={section} />
        <group
          ref={refCharacterContainer}
          name="character"
          position={[1.063, 0.945, -2.625]}
          rotation={[2, -0.024, Math.PI]}
          scale={4.935}
        ></group>
      </motion.group>
      <ProjectSection />
    </>
  );
}
