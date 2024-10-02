import { atom } from "jotai";
import { project } from "../../public/project/dataProject";

export const currentProjectAtom = atom(Math.floor(project.length / 2));
