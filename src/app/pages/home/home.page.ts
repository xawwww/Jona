import { Component, OnInit } from '@angular/core';
import { PService } from './p.service';
import { Storage} from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  products = [];
  datastorage: any;
  name: string;
  cart = [];
  cartItemCount: BehaviorSubject<number>;

constructor(
  private pservice: PService,
  private storage: Storage,
  private modalCtrl: ModalController ) { }
 


ionViewDidEnter(){

  this.storage.get('storage_xxx').then((res) => {
    console.log(res);
    this.datastorage = res;
    this.name = this.datastorage.nombre;
  }); }

ngOnInit(){
    this.products = this.pservice.getPro();
    this.cart = this.pservice.getCart();
  this.cartItemCount = this.pservice.getCartItemCount();
}

addToCart(product){

}
openCart(){

}

}
