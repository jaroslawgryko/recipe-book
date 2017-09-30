import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {    

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe 1',
            'This is simply 1',
            'https://get.pxhere.com/photo/dish-meal-food-salad-green-red-produce-vegetable-plate-recipe-eat-lunch-cuisine-cheese-cook-nutrition-tomatoes-olives-frisch-kohlrabi-hunger-au-gratin-gratin-1323649.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'A Test Recipe 2',
            'This is simply 2',
            'https://get.pxhere.com/photo/dish-meal-food-salad-green-red-produce-vegetable-plate-recipe-eat-lunch-cuisine-cheese-cook-nutrition-tomatoes-olives-frisch-kohlrabi-hunger-au-gratin-gratin-1323649.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}