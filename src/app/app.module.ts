import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialRecipesModule } from './angular-material-recipes/angular-material-recipes.module';
import { RecipeDataService } from './services/recipe-data-service/recipe-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ParamProcessingService } from './services/param-processing/param-processing.service';
import { EnumProcessingService } from './services/enum-processing/enum-processing.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialRecipesModule,
    HttpClientModule,
  ],
  providers: [RecipeDataService, ParamProcessingService, EnumProcessingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
