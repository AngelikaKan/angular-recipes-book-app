import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeDataService } from 'src/app/services/recipe-data-service/recipe-data.service';
import { catchError, of, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DefaultRecipe } from 'src/app/model/recipe-model/DefaultRecipe';
import { Mode } from 'src/app/model/mode-model/Mode';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe = new DefaultRecipe();
  recipeSubscription!: Subscription;
  mode = Mode.View;
  methodTabSelected = false;
  autoEditMode = false;

  constructor(
    private recipeDataService: RecipeDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeSubscription = this.recipeDataService
      .getRecipe(this.route.snapshot.params['id'])
      .pipe(catchError(() => of(new DefaultRecipe())))
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
  }

  ngOnDestroy(): void {
    this.recipeSubscription.unsubscribe();
  }

  toggleViewAndEditMode() {
    this.mode = this.mode === Mode.Edit ? Mode.View : Mode.Edit;
  }

  toggleisMethodTabSelection() {
    this.methodTabSelected = this.methodTabSelected ? false : true;
  }
}
