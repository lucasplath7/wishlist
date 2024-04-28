import { Component, OnInit } from '@angular/core';

import { EventService } from '../shared/services/EventService';
import { WishService } from '../wish.service';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-wish',
  // standalone: true,
  // imports: [],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      console.log('wish: ', wish)
      const index = this.items.indexOf(wish)
      this.items.splice(index, 1);
    })
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.wishService.getWishes().subscribe((data: any) => {
    //     this.items = data;
    //   })
    // }, 3000)
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error) => {
        console.log('error: ', error);
        alert(error.message);
      }
    )
  }
  items : WishItem[] = [];
  filter: any;  
}
