import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Mesh from "../components/Mesh";
import { Scroll, ScrollControls } from "@react-three/drei";
import Interface from "../features/Interface";
import { useState } from "react";
import ScrollManager from "../hooks/ScrollManager";
import Menu from "./Menu";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { framerMotion } from "../helper/framerMotion";

const StyledContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
`;

export default function AppLayout() {
  const [section, setSection] = useState(0);

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotion,
        }}
      >
        <StyledContainer>
          <Canvas shadows camera={{ position: [0, 10, 22], fov: 42 }}>
            <ScrollControls pages={4} dumping={0.1}>
              <ScrollManager section={section} setSection={setSection} />
              <Scroll>
                <Mesh section={section} />
              </Scroll>
              <Scroll html>
                <Interface setSection={setSection} />
              </Scroll>
            </ScrollControls>
          </Canvas>
        </StyledContainer>
        <Menu setSection={setSection} section={section} />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}
