import { SelectionChange } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { Validators, FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mode } from 'src/app/model/mode-model/Mode';
import { ParamItem } from 'src/app/model/param-item-model/ParamItem';
import { DefaultRecipe } from 'src/app/model/recipe-model/DefaultRecipe';
import { EnumProcessingService } from 'src/app/services/enum-processing/enum-processing.service';
import { ParamProcessingService } from 'src/app/services/param-processing/param-processing.service';
import { RecipeDataService } from 'src/app/services/recipe-data-service/recipe-data.service';

@Component({
  selector: 'app-edit-recipe-form',
  templateUrl: './edit-recipe-form.component.html',
  styleUrls: ['./edit-recipe-form.component.css']
})
export class EditRecipeFormComponent {
   params = {
    id: 0,
    mode: Mode.View,
    item: ParamItem.Null,
    itemIndex: -1
  };

  selectedMeasUnit = '';
  selectedFile?: File;

  editRecipeForm = this.fb.group({
    title: [''],
    methodStep: [''],
    cookingTimeInMinutes: ['', Validators.pattern("^[0-9]*$")],
    image:[''],
    ingredient: this.fb.group({
      qty: ['', Validators.pattern("^[0-9]*$")],
      measuringUnit: [''],
      ingredientName: ['']
    }),
    
  });
  
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, 
    public router: Router, private paramProcessing: ParamProcessingService,
    private enumProcessing: EnumProcessingService) {}

  ngOnInit(): void {
    let extractedMode = this.activatedRoute.snapshot.paramMap.get('mode');
    let extractedId = this.activatedRoute.snapshot.paramMap.get('id');
    let extractedItem = this.activatedRoute.snapshot.paramMap.get('item');
    let extractedItemIndex = this.activatedRoute.snapshot.paramMap.get('i');
   
    this.paramProcessing.isValidMode(extractedMode) && (this.params.mode = extractedMode as Mode);
    this.paramProcessing.isParamANumber(extractedId) && (this.params.id = Number(extractedId));
    this.paramProcessing.isValidParamItem(extractedItem) && (this.params.item = extractedItem as ParamItem);
    this.paramProcessing.isParamANumber(extractedItemIndex) && (this.params.itemIndex = Number(extractedItemIndex));
  }

  //TODO: add code to check the mime type of the upload - could this be part of a service?

  get qty() {
    return this.editRecipeForm.controls['ingredient'].controls['qty'];
  }

  get image() {
    return this.editRecipeForm.controls['image'];
  }

  onMeasUnitSelection() {
    this.editRecipeForm.controls['ingredient'].controls['measuringUnit'].setValue(this.selectedMeasUnit);
  }

  onFileSelection(event: Event) {
    //TODO: is this required if we submit data directly to backend using FormData?

    // no specific event type for uploading a file - type implicitly set to any - need to typecast as
    // files property only exists on HTMLInputElements with type file
    const uploadEventTarget = event.target as HTMLInputElement;
    const selectedFiles = uploadEventTarget.files;
    const selectedFilesExist = (selectedFiles != null) && (selectedFiles.length > 0);

    if (selectedFilesExist) {
      this.selectedFile = selectedFiles[0];
      this.image.patchValue(this.selectedFile.name);
    }
  }

  onSubmit() {
    //TODO: code to update specific value in the db
    console.log('submitted!!');
    this.editRecipeForm.reset();
    // navigating using routerLink from template activates before form is submitted
    // according to message in dev tool
    this.router.navigate(['/recipe-detail', this.params.id]);
  }

   onCancel(){
    this.editRecipeForm.reset();
    this.router.navigate(['/recipe-detail', this.params.id]);
  }

   clearControlValue() {
    //TODO: can this work with just a form reset if we dont bring up the values for the recipe?
    this.selectedMeasUnit.length > 0 && (this.selectedMeasUnit = '');
    this.editRecipeForm.reset();
    
    /* let activeControls = this.determineActiveEditControls();

    let activeControlsExist = (activeControls.length > 0) && (activeControls[0] != null);

    if (activeControlsExist) {
      activeControls.forEach(control => {
        control?.patchValue('');
      });
    } */
  } 

  isControlEmpty(){
    let activeControls = this.determineActiveEditControls();
    let activeControlsExist = activeControls.length > 0;

    //the code checking for empty values does not work for hidden image input
    if (activeControlsExist && (this.params.item === ParamItem.Image)){
      return this.editRecipeForm.pristine;
    }

    if (activeControlsExist && (activeControls.length === 0)) {
      let activeControl = activeControls[0]
      return (activeControl === null) || (activeControl.value === null) || (activeControl.value === '');
    }

    if (activeControlsExist && (activeControls.length > 0)) {
      return activeControls.some(control => (control === null) || (control.value === null) || (control.value === ''))
    };
    return false;
  }

  determineActiveEditControls () {
    let activeItem = this.params.item;

    switch(activeItem) {
      case ParamItem.Title:
        return [this.editRecipeForm.controls['title'] ];
      case ParamItem.Ingredient:
        return [
                this.editRecipeForm.controls['ingredient'].controls['qty'],
                 this.editRecipeForm.controls['ingredient'].controls['measuringUnit'],
                this.editRecipeForm.controls['ingredient'].controls['ingredientName']
              ];
      case ParamItem.MethodStep:
        return [this.editRecipeForm.controls['methodStep']];
      case ParamItem.CookingTimeInMinutes:
        return [this.editRecipeForm.controls['cookingTimeInMinutes']];
      case ParamItem.Image:
        return [this.editRecipeForm.controls['cookingTimeInMinutes']];
      default:
        return [null];
    } 
  }

  getMeasuringUnitMembersList() {
    return this.enumProcessing.getMeasuringUnitMembers();
  }
}
