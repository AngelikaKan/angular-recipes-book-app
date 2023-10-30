
import { Ingredient } from "./Ingredient";
import { MethodStep } from "./MethodStep";

export class Recipe {

    id?: number;
    title?: string;
    ingredients?: Ingredient[];
    methodSteps?: MethodStep[];
    cookingTimeInMinutes?: number;
    imageUrl?: string;

    constructor(id?: number, 
        title?: string, 
        ingredients?: Ingredient[],
        methodSteps?: MethodStep[],
        cookingTimeInMinutes?: number){
    };

}
