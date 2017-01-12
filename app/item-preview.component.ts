import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';

import {CatalogService} from './Services/shopping.service';
import {Item} from "./Models/Menu.model";
import {CartService} from "./Services/cart.service";

@Component({
    selector: 'item-preview',
    templateUrl: "../app/views/item-preview.html",
})

export class ItemPreview {
    @Input() item:Item;
    constructor(private router: Router, private cartService:CartService){

    }
    ViewDetails(){
        this.router.navigate( ['Details', { id_menu: this.item.id_menu }] )
    }
    addToCart(){
        this.cartService.addItem(this.item);
        alert(this.item.nama_menu.toString()+" Telah Masuk Keranjang");
    }
}