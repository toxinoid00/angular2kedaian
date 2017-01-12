import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterLink, RouterOutlet} from 'angular2/router';
import {Catalog} from "./catalog.component";
import {Cart} from "./cart.component";
import {Home} from "./home";
import {Contact} from "./contact.component";
import {About} from "./About";
import {Checkout} from "./checkout.component";
import {Http, HTTP_PROVIDERS} from 'angular2/http';
// import {FilterCatalogItems} from './Utils/Filter.pipe';

@Component({
    selector: 'my-app',
    // pipes:[FilterCatalogItems],
    directives: [RouterLink, RouterOutlet, Catalog],
    templateUrl: "../app/views/app.component.html",
})

@RouteConfig([
  { path:'/Home', name:'Home', component: Home, useAsDefault:true},
  { path:'/Home/Home', name:'Home', component: Home},
  { path:'/Catalog', name: 'Catalog', component: Catalog },
  { path:'/Contact', name: 'Contact', component: Contact },
  { path:'/About', name: 'About', component: About },
  { path:'/Cart/Checkout', name: 'Checkout', component: Checkout },
  // { path:'/Item/:id', name: 'Details', component: Details },
  { path:'/Cart', name: 'Cart', component: Cart }
])

export class AppComponent {
    // public search:string = "";
}
