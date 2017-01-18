import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, NgIf} from "angular2/common";
import {FilterCatalogItems} from './Utils/Filter.pipe';
import {SuplierService} from './Services/suplier.service';

@Component({
    selector:'tambahmenu',
    pipes:[FilterCatalogItems],
    directives:[FORM_DIRECTIVES, NgIf],
    templateUrl: "../app/views/tambah-menu.html",
    providers:[SuplierService]
})

export class TambahMenu {
    getSuplier;
    postMyMenu;
 
    nama_menu;
    harga_menu;
    deskripsi_menu;
    foto_menu;
    id_suplier;
    constructor(private suplierService:SuplierService){
        
    }

    onGet(){     
        console.log('Getting user based on promise now.');
        this.suplierService.getSuplier()
        .then(
        res=>this.getSuplier = JSON.parse(JSON.stringify(res)),
        err=>alert(err)
    );
    }
    ngOnInit() {
        this.onGet();
    }


    tambahMenuToServer(){
        this.suplierService.postMenu(this.nama_menu,this.harga_menu, this.deskripsi_menu, this.foto_menu, this.id_suplier).subscribe(//call the post
                data => this.postMyMenu = JSON.stringify(data), // put the data returned from the server in our variable
                error => alert("Error"), // in case of failure show this message
                () => alert("Berhasil")//run this code in all cases
            );
    }
    // readUrl(event) {
    //       if (event.target.files && event.target.files[0]) {
    //         var reader = new FileReader();

    //         reader.onload = (e) => {
    //           this.url = e.target.result;
    //         }

    //         reader.readAsDataURL(event.target.files[0]);
    //       }
    //     }
}