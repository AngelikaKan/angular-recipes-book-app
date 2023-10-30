import { TinShape } from "./TinShape";
import { TinShapeDimensionMeasuringUnit } from "./TinShapeDimensionMeasuringUnit";
import { TinType } from "./TinType";

export class OtherTinShapeImple implements TinShape {
    type: TinType;
    volume: number;
    measuringUnit: TinShapeDimensionMeasuringUnit;

    constructor(type: TinType, volume: number, 
        measuringUnit: TinShapeDimensionMeasuringUnit) {
            this.type = TinType.OTHER,
            this.volume = volume,
            this.measuringUnit = measuringUnit
    }
    
}