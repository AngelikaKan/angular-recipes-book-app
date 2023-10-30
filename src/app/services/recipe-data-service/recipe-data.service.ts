import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../../model/recipe-model/Recipe';
import { ParamProcessingService } from '../param-processing/param-processing.service';
import { DefaultRecipe } from 'src/app/model/recipe-model/DefaultRecipe';

const BASE_URL = 'http://localhost:3000/recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeDataService {
  constructor(
    private http: HttpClient,
    private paramProcessing: ParamProcessingService
  ) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(BASE_URL);
  }

  getRecipe(id: string | null): Observable<Recipe> {
    if (this.paramProcessing.isParamANumber(id)) {
      return this.http.get<Recipe>(`${BASE_URL}/${id}`);
    }
    return of(new DefaultRecipe());
  }
}
