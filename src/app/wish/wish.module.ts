import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { WishComponent } from './wish.component';
import { WishService } from '../wish.service';



@NgModule({
  declarations: [
    WishFilterComponent,
    WishListComponent,
    AddWishFormComponent,
    WishListItemComponent,
    WishComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    WishComponent,
  ],
  providers: [
    WishService
  ]
})
export class WishModule { }
