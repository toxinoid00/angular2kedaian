import {Injectable} from 'angular2/core';
import {Item} from '../Models/menu.model';
// import {DefaultCheckout, IDiscount} from "./checkout.service";
// import {discounts} from "../Mock/discounts.mock.json";

@Injectable()
export class CartService {
    private cart:Item[]=[];
    // private discount:IDiscount;
    addItem(item:Item){
        this.cart.push(item);
        localStorage.setItem('item',JSON.stringify(this.cart));
    }
    deleteItem(item:Item){
        var index;
        for (var i = 0; i < item.length; i++) {
          if(item[i].item.id_menu === item.id_menu)
          {
            index = i;
          }
        }
        // this.cart = this.cart.filter(cartItem=>cartItem.id_menu!==item.id_menu);
        this.cart.splice(index,1);
        localStorage.setItem('item',JSON.stringify(this.cart));
    }
    clearCart(){
        this.cart = [];
    }
    // applyDiscount(code:string){
    //     this.discount = discounts.filter(discount=>discount.code==code)[0];
    // }
    getCart():Item[]{
        this.cart = JSON.parse(localStorage.getItem('item'));
        return this.cart;
    }
    getTotalPrice(){
        let totalPrice = this.cart.reduce((sum, cartItem)=>{
            return sum+=cartItem.harga_menu, sum;
        },0);
        // if(this.discount){
        // totalPrice -= totalPrice=this.discount.amount;
        // }
        return totalPrice;
    }
}