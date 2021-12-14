import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './Shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private logger: NGXLogger, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        this.logger.log(ingredients)
      }
    )
  }



}
