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
    public getData:Item[] = [];
    public catalog:Item[] = [];
    public postData:string;
    public search:string = "";
    constructor(private catalogService:CatalogService, private _httpService:HTTPTestService){
        console.log('Getting user now.');
        this._httpService.getMenu().subscribe(
          data =>this.getData = JSON.stringify(data),
          error=>alert(error),
          ()=>console.log('Finished Get')
        );
    }
    ngOnInit() {
        this.catalogService.getCatalog().then((catalog)=>{
            this.catalog = catalog;
        });
    }
    onPost(){
      this._httpService.postJson().subscribe(
      data =>this.postData = JSON.stringify(data),
      error=>alert(error),
      ()=>console.log('Finished Post')
    );
  }
}