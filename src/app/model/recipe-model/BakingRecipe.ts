import { TinShape } from "../tin-shape-model/TinShape";
import { Ingredient } from "./Ingredient";
import { MethodStep } from "./MethodStep";
import { Recipe } from "./Recipe";

export class BakingRecipe extends Recipe {
    tinShape?: TinShape;

    constructor(tinShape: TinShape, id: number, 
        title?: string, 
        ingredients?: Ingredient[],
        methodSteps?: MethodStep[],
        cookingTimeInMinutes?: number) {
            super(id, title, ingredients, methodSteps, cookingTimeInMinutes);
            this.tinShape = tinShape;
    }
}