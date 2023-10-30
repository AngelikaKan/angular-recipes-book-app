import { TinShapeDimensionMeasuringUnit } from "./TinShapeDimensionMeasuringUnit";
import { TinType } from "./TinType";
import { VolumeBasedTinShape } from "./VolumeBasedTinShape";

export class LoafTinShapeImpl implements VolumeBasedTinShape {
    type: TinType;
    volume: number;
    measuringUnit: TinShapeDimensionMeasuringUnit;

    constructor(type: TinType, volume: number, 
        measuringUnit: TinShapeDimensionMeasuringUnit) {
            this.type = TinType.LOAF,
            this.volume = volume,
            this.measuringUnit = measuringUnit
    }
    
}