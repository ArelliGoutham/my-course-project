import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/Shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private slService: ShoppingListService) { //can use recipeservice and make it injectable and then send it to shopping list else diectly as we did here
  }

  ngOnInit(): void {
  }
  onAddToShoppingList(){
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
