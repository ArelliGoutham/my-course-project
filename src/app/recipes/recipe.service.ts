import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/Shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('A Burger', 'This is a Big Fat Burger', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXFSUWO76Wy5nIzVHd7GgksUGk9bvqW391g&usqp=CAU', [new Ingredient('Meat',1),new Ingredient('Bread',1)]),
        new Recipe('A Pizza', 'This is a Large Pizza', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXFSUWO76Wy5nIzVHd7GgksUGk9bvqW391g&usqp=CAU',[new Ingredient('Meat',1),new Ingredient('Flat Bread',1), new Ingredient('Olives',10),new Ingredient('Cheese',2)])    
      ];
      constructor(private slService: ShoppingListService){
      }

      getRecipes() {
          return this.recipes.slice();
      }
      AddIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}