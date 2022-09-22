import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://www.simplyrecipes.com/thmb/6hB2QGMlAJgHfRMCK_TRH1XHJ2c=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chicken-Schnitzel-LEAD-01-9125a34ec9f8412da916efb13533954c.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://i0.wp.com/www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg?resize=760%2C984&ssl=1',
      ingredients: ['Meat Balls', 'Pasta', 'Leaves'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe: Recipe) => recipe.id === recipeId),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(
      (recipe: Recipe) => recipe.id !== recipeId
    );
  }
}
