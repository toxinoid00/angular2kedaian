import {Component} from 'angular2/core';
import {NgIf, FORM_DIRECTIVES} from "angular2/common";
import {Item} from "./Models/Item.model";
import {CartService} from "./Services/cart.service";
import {ItemPreviewCart} from "./item-preview-cart.component";
import {DefaultCheckout} from "./Services/checkout.service";
import {paymentMethods} from "./Mock/payment-methods.mock.json";
import {ICheckoutType} from "./Services/checkout.service";
import {Catalog} from "./catalog.component";

@Component({
    selector:'cart',
    directives:[NgIf, ItemPreviewCart, FORM_DIRECTIVES],
    providers:[DefaultCheckout],
    templateUrl:"../app/views/cart.html",
})

export class Cart {
    private cartItems: Item[] = [];
    private paymentOutput: string = "";
    constructor(private cartService:CartService, private defaultCheckout:DefaultCheckout){
        this.cartItems = cartService.getCart();
    }
    setPaymentType(type:string){
        this.defaultCheckout.checkOutType = paymentMethods.filter(paymentMethod=>paymentMethod.name.toLowerCase()===type.toLowerCase())[0];
    }
    setDiscount(name:string){
        this.cartService.applyDiscount(name);
    }
    pay(){
        this.paymentOutput = this.defaultCheckout.checkOut(this.cartService.getTotalPrice());
    }
}