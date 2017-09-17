import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInput.nativeElement.value;
    const ingAmout = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient (ingName, ingAmout);
    this.ingredientAdded.emit(newIngredient);
  }
}
