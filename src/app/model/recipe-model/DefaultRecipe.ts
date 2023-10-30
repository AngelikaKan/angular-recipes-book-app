import { Ingredient } from "./Ingredient";
import { MethodStep } from "./MethodStep";
import { Recipe } from "./Recipe";

export class DefaultRecipe extends Recipe {

    constructor() {
            super();
            this.id=-1, 
            this.title='', 
            this.ingredients=[], 
            this.methodSteps=[],
            this.cookingTimeInMinutes=0,
            this.imageUrl='no image'
    };

}