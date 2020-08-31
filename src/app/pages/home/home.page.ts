import { Component, OnInit } from '@angular/core';
import { PService } from './p.service';
import { Storage} from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Product } from './p.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  products: any = [];
  datastorage: any;
  name: string;
  cart = [];
  cartItemCount: BehaviorSubject<number>;

constructor(
  public pservice: PService,
  private storage: Storage,
  private modalCtrl: ModalController ) { }

ionViewDidEnter(){
  this.storage.get('storage_xxx').then((res) => {
    console.log(res);
    this.datastorage = res;
    this.name = this.datastorage.nombre;
  });
   this.pservice.getProducto('http://localhost:8000/apiproducto').subscribe((rest: any) => {  
       console.log(this.rest);
     
    });


}
ngOnInit(){
     this.products = this.pservice.getProducto();
   // this.cart = this.pservice.getCart();
  //this.cartItemCount = this.pservice.getCartItemCount();
}




addToCart(product){
}
openCart(){
}

}
