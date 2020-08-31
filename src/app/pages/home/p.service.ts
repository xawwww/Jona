import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
//import { productos } from './p.service';

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
  
  conversion:any;

  produ: [];
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
path: string= 'http://localhost:8000/apiproducto';

  constructor( private http: HttpClient ) { }

  getProducto(){
   this.http.get(this.path).subscribe(data => {  
     this.conversion = data;
     this.produ = this.conversion;
     console.log(this.produ);
    
   }); 
   return this.produ;
   //console.log(this.produ);
   
    }
}

