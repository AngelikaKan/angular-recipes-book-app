import { SurfaceBasedTinShape } from "./SurfaceBasedTinShape";
import { TinShapeDimensionMeasuringUnit } from "./TinShapeDimensionMeasuringUnit";
import { TinType } from "./TinType";

export class RectangularTinShapeImpl implements SurfaceBasedTinShape {
    type: TinType;
    dimensions: Record<string, number>;
    measuringUnit: TinShapeDimensionMeasuringUnit;

    constructor(type: TinType, dimensions: Record<string, number>, 
        lengthIn: number, widthIn: number, measuringUnit: TinShapeDimensionMeasuringUnit) {
            this.type = TinType.RECTANGLE;
            this.dimensions = {
                length: lengthIn,
                width: widthIn
            };
            this.measuringUnit = measuringUnit;
    }

    calculateSurface(): number {
        return this.dimensions["length"] * this.dimensions["width"];
    }
    
}