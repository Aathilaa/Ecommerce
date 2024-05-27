import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  private sellerLoggedIn = new BehaviorSubject<boolean>(false);

  setSellerLoggedIn(value: boolean) {
    this.sellerLoggedIn.next(value);
  }

  get isSellerLoggedIn(): Observable<boolean> {
    return this.sellerLoggedIn.asObservable();
  }
}
