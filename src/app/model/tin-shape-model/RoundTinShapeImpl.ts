import { SurfaceBasedTinShape } from "./SurfaceBasedTinShape";
import { TinShapeDimensionMeasuringUnit } from "./TinShapeDimensionMeasuringUnit";
import { TinType } from "./TinType";

export class RoundTinShapeImpl implements SurfaceBasedTinShape {
    type: TinType;
    dimensions: Record<string, number>;
    measuringUnit: TinShapeDimensionMeasuringUnit;

    constructor(type:TinType, diameterIn: number, measuringUnit: TinShapeDimensionMeasuringUnit) {
        this.type = TinType.ROUND,
        this.dimensions = {
            diameter: diameterIn
        },
        this.measuringUnit = measuringUnit
    }

    calculateSurface(): number {
        const radius = this.dimensions["diameter"] / 2;
        return 2 * Math.PI * radius;
    }
    
}