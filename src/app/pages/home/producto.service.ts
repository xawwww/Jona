import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
//export interface productos

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos = [];
  constructor(private http: HttpClient) { }

  getProduct(){
   return  this.http.get<any>('http://localhost:8000/apiproducto').subscribe(data => {
     console.log(data)
     this.productos = data;
   })
  }

  private cart =[];
  private cartItemCount = new BehaviorSubject(0)

  getProducts(){
    return this.productos;
  
    }
    getCart(){
      return this.cart;
    }
    getCartItemCount(){
      return this.cartItemCount;
  
    }
    addProduct(productos){
   let added = false;
   for (let p of this.cart){
     if(p.id === productos.id){
       p.stock += 1 ;
       added= true;
       break;
     }
   }
    
   if(!added){
     this.cart.push(productos);
   }
   this.cartItemCount.next(this.cartItemCount.value +1);
  
    }
    decreaseProduct(productos){
      for(let[index, p]of this.cart.entries()){
        if(p.id===productos.id){
          p.stock-=1;
          if(p.stock==0){
            this.cart.splice(index,1);
          }
        }
      }
      this.cartItemCount.next(this.cartItemCount.value - 1 );
    }
    removeProduct(productos){
      for(let[index, p]of this.cart.entries()){
        if(p.id===productos.id){
          this.cartItemCount.next(this.cartItemCount.value -p.stock);
            this.cart.splice(index,1);
          
        }
      }
    }
}
