import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterLink, RouterOutlet} from 'angular2/router';
import {Catalog} from "./catalog.component";
import {Details} from "./details.component";
import {Cart} from "./cart.component";
import {Home} from "./home";
import {Contact} from "./Contact";
import {About} from "./About";

@Component({
    selector: 'my-app',
    directives: [RouterLink, RouterOutlet],
    templateUrl: "../app/views/app.component.html",
})

@RouteConfig([
  { path:'/Home', name:'Home', component: Home, useAsDefault:true},
  { path:'/Catalog', name: 'Catalog', component: Catalog },
  { path:'/Contact', name: 'Contact', component: Contact },
  { path:'/About', name: 'About', component: About },
  { path:'/Item/:id', name: 'Details', component: Details },
  { path:'/Cart', name: 'Cart', component: Cart }
])

export class AppComponent {
    
}
