import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { WishItem } from '../../shared/models/wishItem';

import { EventService } from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish! : WishItem; // ! means non-null value

  constructor(private events: EventService) {

  }

  get cssClasses() {
    // Can set classes on ngClass by returning a string for the class
    // an array of classes or an object where the property names are the
    // classes and the value is linked to an expression that determines
    // if those class names should be applied
    //return this.fullfilled ? ['strikeout'] : [];
    return {
      'strikeout': this.wish.isComplete,
    }
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  public toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
