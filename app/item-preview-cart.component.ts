import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';

import {CatalogService} from './Services/shopping.service';
import {Item} from "./Models/Item.model";
import {CartService} from "./Services/cart.service";

@Component({
    selector: 'item-preview-cart',
    templateUrl: "../app/views/item-preview-cart.html",
})

export class ItemPreviewCart {
    @Input() item:Item;
    constructor(private router: Router, private cartService:CartService){

    }
    ViewDetails(){
        this.router.navigate( ['Details', { id: this.item.id }] )
    }
    addToCart(){
        this.cartService.addItem(this.item);
        console.log(this.cartService.getTotalPrice())
    }
}