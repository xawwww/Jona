import { Component, OnInit } from '@angular/core';
//import{ CartService} from '../../services/cart.service';
//import{Product}   from '../../services/cart.service';
import{productos}   from '../home/producto.service';
import { ModalController } from '@ionic/angular';
import { ProductoService } from '../home/producto.service';

@Component({
  selector: 'app-car-modal',
  templateUrl: './car-modal.page.html',
  styleUrls: ['./car-modal.page.scss'],
})

export class CarModalPage implements OnInit {

  cart: productos[] = [];

  constructor(private productoService: ProductoService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cart = this.productoService.getCart();
  }
     decreaseCartItem(product){
    this.productoService.decreaseProduct(product);
  }
  increaseCartItem(product){
    this.productoService.addProduct(product);
  }
  removeCartItem(product){
    this.productoService.removeProduct(product);
  }
  getTotal(){
    return this.cart.reduce((i,j)=>i + j.price * j.amount,0);

  }
 close()  {
   this.modalCtrl.dismiss();
 }

}
