import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

import { ToolbarHeaderComponent } from './toolbar-header/toolbar-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { EditRecipeFormComponent } from './edit-recipe-form/edit-recipe-form.component';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CreateRecipeFormComponent } from './create-recipe-form/create-recipe-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    RecipesComponent,
    ToolbarHeaderComponent,
    RecipeDetailComponent,
    EditRecipeFormComponent,
    CreateRecipeFormComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    HomeComponent,
    RecipesComponent,
    ToolbarHeaderComponent,
    RecipeDetailComponent,
    EditRecipeFormComponent
  ],
  providers: [
   
  ]
})
export class AngularMaterialRecipesModule { }
