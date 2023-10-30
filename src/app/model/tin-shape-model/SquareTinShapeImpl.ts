import { SurfaceBasedTinShape } from "./SurfaceBasedTinShape";
import { TinShapeDimensionMeasuringUnit } from "./TinShapeDimensionMeasuringUnit";
import { TinType } from "./TinType";

export class SquareTinShapeImpl implements SurfaceBasedTinShape {
    type: TinType;
    dimensions: Record<string, number>;
    measuringUnit: TinShapeDimensionMeasuringUnit;

    constructor(type: TinType, dimensions: Record<string, number>, 
        lengthIn: number, measuringUnit: TinShapeDimensionMeasuringUnit) {
            this.type = TinType.SQUARE;
            this.dimensions = {
                length: lengthIn
            },
            this.measuringUnit = measuringUnit
    }

    calculateSurface(): number {
        return this.dimensions["length"] * this.dimensions["length"];
    }
    
}