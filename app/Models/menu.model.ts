export interface Item{
	id_menu_harian: string;
	tanggal : string;
	id_menu : string;
	detail_menu : DetailMenu[];
}
export interface DetailMenu {
	nama_menu: string;
	harga_menu: number;
    deskripsi_menu: string;
    foto_menu:string;
}