import { Component, OnInit } from '@angular/core';
import { PService } from './p.service';
import { Storage} from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Product } from './p.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage   {

 
  dataproducto: any;
  datastorage : any;
  name: string ;
  

constructor(
  public pservice: PService,
  private storage: Storage,
  private modalCtrl: ModalController,
  private http: HttpClient,
  public api: ApiService ) {

    
   }


ionViewDidEnter(){
  this.storage.get('storage_xxx').then((res) => {
    console.log(res);
    this.datastorage = res;
    this.name = this.datastorage.nombre;
  });
  


}


ngOnInit(){
  this.getDataProducto();   
 
}
async getDataProducto(){
  await this.api.getDataProducto()
  .subscribe(res => {
    console.log(res);
    this.dataproducto = res;
    console.log(this.dataproducto);
  }, err => {
    console.log(err);
  });
}
  







}
