import { MeasuringUnit } from "./MeasuringUnit";

export class Ingredient {

    name?: string;
    quantity?: number;
    measuringUnit?: MeasuringUnit;

    constructor(name?: string,
        quantity?: number,
        measuringUnit?: MeasuringUnit){}  
}