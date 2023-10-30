import { Component } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/model/recipe-model/Ingredient';
import { MeasuringUnit } from 'src/app/model/recipe-model/MeasuringUnit';
import { MethodStep } from 'src/app/model/recipe-model/MethodStep';
import { Recipe } from 'src/app/model/recipe-model/Recipe';
import { EnumProcessingService } from 'src/app/services/enum-processing/enum-processing.service';
import { ParamProcessingService } from 'src/app/services/param-processing/param-processing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe-form',
  templateUrl: './create-recipe-form.component.html',
  styleUrls: ['./create-recipe-form.component.css'],
})
export class CreateRecipeFormComponent {
  recipe: Recipe = new Recipe();

  selectedMeasUnit = '';
  selectedFile?: File;

  createRecipeForm = this.fb.group({
    title: [''],
    //TODO: add FormGroup array for method steps
    methodStep: [''],
    cookingTimeInMinutes: ['', Validators.pattern('^[0-9]*$')],
    image: [''],
    //TODO: add FormGroup array for ingredient list
    ingredient: this.fb.group({
      qty: ['', Validators.pattern('^[0-9]*$')],
      measuringUnit: [''],
      ingredientName: [''],
    }),
  });

  constructor(
    private fb: FormBuilder,
    private enumProcessing: EnumProcessingService,
    private paramProcessing: ParamProcessingService,
    public router: Router
  ) {}

  get image() {
    return this.createRecipeForm.controls['image'];
  }

  onMeasUnitSelection() {
    this.createRecipeForm.controls['ingredient'].controls[
      'measuringUnit'
    ].setValue(this.selectedMeasUnit);
  }

  getMeasuringUnitMembersList() {
    return this.enumProcessing.getMeasuringUnitMembers();
  }

  onFileSelection(event: Event) {
    // no specific event type for uploading a file
    // files property only exists on HTMLInputElements with type file
    const uploadEventTarget = event.target as HTMLInputElement;
    const selectedFiles = uploadEventTarget.files;
    const selectedFilesExist =
      selectedFiles != null && selectedFiles.length > 0;

    if (selectedFilesExist) {
      this.selectedFile = selectedFiles[0];
      this.image.patchValue(this.selectedFile.name);
    }
  }

  onAddIngredient() {
    const newIngredient = this.createIngredient();
    newIngredient != null && this.recipe.ingredients?.push(newIngredient);
  }

  onAddMethodStep() {
    const newMethodStep = this.createMethodStep();
    newMethodStep != null && this.recipe.methodSteps?.push(newMethodStep);
  }

  onClear() {
    this.createRecipeForm.reset();
  }

  onCancel() {
    this.router.navigate(['home']);
  }

  onSubmit() {
    console.log('Submitted!');
  }

  createIngredient() {
    const ingredient = new Ingredient();

    const qtyFormValue =
      this.createRecipeForm.controls.ingredient.controls.qty.value;
    const measUnitValue =
      this.createRecipeForm.controls.ingredient.controls.measuringUnit.value;
    const ingredientNameValue =
      this.createRecipeForm.controls.ingredient.controls.ingredientName.value;

    let qty = -1;
    let measUnit = 'defaultValue';
    let ingredientName = 'defaultValue';

    if (
      qtyFormValue != null &&
      this.paramProcessing.isParamANumber(qtyFormValue)
    ) {
      qty = Number(qtyFormValue);
    }
    if (measUnitValue != null) {
      //TODO: add check for valid measuring unit?
      measUnit = measUnitValue as MeasuringUnit;
    }
    if (ingredientNameValue != null) {
      ingredientName = ingredientNameValue;
    }

    if (
      qty > 0 &&
      measUnit != 'defaultValue' &&
      ingredientName != 'defaultValue'
    ) {
      ingredient.quantity = qty;
      ingredient.measuringUnit = measUnit as MeasuringUnit;
      ingredient.name = ingredientName;

      return ingredient;
    }
    return null;
  }

  createMethodStep() {
    const methodStep = new MethodStep();
    const methodStepValue = this.createRecipeForm.controls.methodStep.value;

    if (methodStepValue != null && this.recipe.methodSteps != undefined) {
      methodStep.stepNumber = this.recipe.methodSteps.length + 1;
      methodStep.description = methodStepValue;

      return methodStep;
    }
    return null;
  }
}
