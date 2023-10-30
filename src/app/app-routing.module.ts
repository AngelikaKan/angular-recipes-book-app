import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './angular-material-recipes/home/home.component';
import { RecipeDetailComponent } from './angular-material-recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './angular-material-recipes/recipes/recipes.component';
import { EditRecipeFormComponent } from './angular-material-recipes/edit-recipe-form/edit-recipe-form.component';
import { CreateRecipeFormComponent } from './angular-material-recipes/create-recipe-form/create-recipe-form.component';

const routes: Routes = [
  { path: "recipes",component: RecipesComponent},
  { path: "create-recipe-form", component: CreateRecipeFormComponent},
  { path: "edit-recipe-form/:id/:mode/:item", component: EditRecipeFormComponent},
  { path: "edit-recipe-form/:id/:mode", component: EditRecipeFormComponent},
  { path: "recipe-detail/:id", component: RecipeDetailComponent },
  { path:"home", component: HomeComponent},
  { path: "", redirectTo: "home", pathMatch: 'full'},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
