import { TinShape } from "./TinShape";

export interface SurfaceBasedTinShape extends TinShape {
    calculateSurface(): number;
}