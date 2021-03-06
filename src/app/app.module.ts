import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule } from '@angular/forms';
import { UploadRecipeComponent } from './upload-recipe/upload-recipe.component'
import { HttpClientModule } from '@angular/common/http';
import { FullRecipeComponent } from './full-recipe/full-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    UploadRecipeComponent,
    FullRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
