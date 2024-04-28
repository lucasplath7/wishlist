import { Component, OnInit } from '@angular/core';
import { ContactModule } from './contact/contact.module';
import { WishModule } from './wish/wish.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishModule, ContactModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  } 
}
