import {Pipe} from 'angular2/core';
import {Item} from "../Models/menu.model";

@Pipe({name: 'filterItems'})
export class FilterCatalogItems {
    transform(values:Item[], [filterBy]) : any {
        return values.filter((item:Item)=>{
            return filterBy ? item.detail_menu.nama_menu.toLowerCase().includes(filterBy.toLowerCase()) : true;
        });
    }
}