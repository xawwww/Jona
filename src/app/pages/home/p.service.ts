import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface Product{

  id: number;
  idcategoria: number;
  codigo: number;
  nombre: string;
concentracion: string;
condicion: number;
fechaelaboracion: string;
fechaexpiracion: string;
laboratorio: string;
lote: string;
medida: string;
precio_venta: number;
presentation: string;
stock: number;
stockfraccion: string;



}
@Injectable({
  providedIn: 'root'
})
export class PService {
  
  Product: any [];
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 


path: string= 'http://localhost:8000/apiproducto';

  constructor( private http: HttpClient ) { }
  getProducto(){
    return this.http
    .get(this.path);
    
 }
conveProducto(){
  this.getProducto()
  .subscribe(data  => {
    //console.log("Mis productos");
    console.log(data);
    //this.Product.push(...data);

  })
 }


 getPro(){
  this.conveProducto();
   return this.Product;

 }
 getCart(){
   return this.cart;
 }
 getCartItemCount(){
   return this.cartItemCount;
 }

addProducto(producto){

}
decreaseProducto(producto){

}

removeProducto(producto){

}








}