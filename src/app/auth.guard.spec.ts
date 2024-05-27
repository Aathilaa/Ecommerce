import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { SellerService } from './services/seller.service';

describe('authGuard', () => {
  let sellerService: jasmine.SpyObj<SellerService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const sellerServiceSpy = jasmine.createSpyObj('SellerService', ['isSellerLoggedIn']);
    const routerSpy = jasmine.createSpyObj('Router', ['createUrlTree']);

    TestBed.configureTestingModule({
      providers: [
        { provide: SellerService, useValue: sellerServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    sellerService = TestBed.inject(SellerService) as jasmine.SpyObj<SellerService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  // Example test case (detailed tests can be added as needed)
  it('should create authGuard', () => {
    expect(AuthGuard).toBeTruthy();
  });
});
