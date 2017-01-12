import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {CartService} from "./Services/cart.service";
import {CatalogService} from "./Services/shopping.service";
import {HTTPTestService} from '../app/http/http.service';
import {HTTP_PROVIDERS}     from 'angular2/http';

bootstrap(AppComponent, [ROUTER_PROVIDERS, CartService, CatalogService, HTTPTestService, HTTP_PROVIDERS]).catch(err => console.error(err));