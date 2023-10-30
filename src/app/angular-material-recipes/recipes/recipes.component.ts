import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, Subscription } from 'rxjs';
import { DefaultRecipe } from 'src/app/model/recipe-model/DefaultRecipe';
import { Recipe } from 'src/app/model/recipe-model/Recipe';
import { RecipeDataService } from 'src/app/services/recipe-data-service/recipe-data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [new DefaultRecipe()];
  recipesSubscription!: Subscription;

  constructor(
    private recipeDataService: RecipeDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipesSubscription = this.recipeDataService
      .getRecipes()
      .pipe(catchError(() => of([new DefaultRecipe()])))
      .subscribe((recipes) => {
        this.recipes.length > 0 && (this.recipes = recipes);
      });
  }

  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }
}
