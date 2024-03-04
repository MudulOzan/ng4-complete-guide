import { Component } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  Ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
}
