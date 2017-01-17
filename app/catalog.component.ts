import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, NgIf} from "angular2/common";

import {CatalogService} from './Services/shopping.service';
import {Item} from "./Models/Menu.model";
import {ItemPreview} from "./item-preview.component";
import {FilterCatalogItems} from './Utils/Filter.pipe';
import {HTTPTestService} from '../app/http/http.service';


@Component({
    selector:'catalog',
    pipes:[FilterCatalogItems],
    directives:[ItemPreview, FORM_DIRECTIVES, NgIf],
    templateUrl:"../app/views/catalog.html",
    providers:[HTTPTestService]
})

export class Catalog {
    getData
    public catalog:Item[] = [];
    public postData:string;
    public search:string = "";
// 
    constructor(private catalogService:CatalogService,private _httpService:HTTPTestService){
        
    }

    onGet(){
        console.log('Getting user based on promise now.');
        this._httpService.getUsersByPromise()
        .then(
        res=>this.getData = JSON.parse(JSON.stringify(res)),
        err=>alert(err)
    );
    }
    ngOnInit() {
        this.onGet();
        this.catalogService.getCatalog().then((catalog)=>{
            this.catalog = catalog;
        });
    }
}