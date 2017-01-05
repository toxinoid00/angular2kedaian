import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, NgIf} from "angular2/common";

import {CatalogService} from './Services/shopping.service';
import {Item} from "./Models/Item.model";
import {ItemPreview} from "./item-preview.component";
import {FilterCatalogItems} from './Utils/Filter.pipe';

@Component({
    selector:'home',
    directives:[FORM_DIRECTIVES],
    templateUrl: "../app/views/home.html",
})

export class Home {

}