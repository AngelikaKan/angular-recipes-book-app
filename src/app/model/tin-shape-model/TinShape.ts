import { TinShapeDimensionMeasuringUnit } from "./TinShapeDimensionMeasuringUnit";
import { TinType } from "./TinType";

export interface TinShape {
    type: TinType;
    dimensions?: Record<string, number>;
    measuringUnit?: TinShapeDimensionMeasuringUnit;
}