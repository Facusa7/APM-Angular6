import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/** 
  The canActivate method has two parameters, 
  the ActivatedRouteSnapshot to provide current route information, 
  and the RouterStateSnapshot to provide router state information. 
  The method can return an Observable, a promise or a simple Boolean value. 
  All that's left is to write the logic for the guard. 
  What do we want this method to do? We need to check the route URL and ensure that the ID passed in is valid. 
  If it is not valid, we want to navigate back to the Product List page.
 */
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot, //The ActivatedRouteSnapshot contains the information about a route at any particular moment in time. 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let id = +next.url[1].path; //Url is an array of two elements: the url and the id, so we want the second one
    if (isNaN(id) || id < 1){
      alert("Invalid product Id");
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
