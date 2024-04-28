import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

import { WishItem } from './../../src/app/shared/models/wishItem';

@Injectable({
  providedIn: 'root',
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or network: ', error)
    } else {
      console.error('Server side error: ', error)
    }

    return throwError(() => new Error('Cannot fetch wishes from the server'))
  }

  getWishes() {
    let options = this.getStandardOptions();
    return this.http.get('assets/wishes.json', options)
      .pipe(catchError(this.handleError))
  }

  // addWish(wish: WishItem) {
  //   let options = this.getStandardOptions();

  //   options.headers = options.headers.set('Authorization', 'value-for-auth');
  //   this.http.post('assets/wishes.json', wish, options);
  // }
}
