import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ShopService } from '../../app/services/shop.service'
import { ShopInfoPage } from '../shopinfo/shopinfo'
import { UserService } from '../../app/services/users.service';
import { MapPage } from '../map/map';
import { EmployeePage } from '../employee/employee';
@Component({
  selector: 'shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  shopInfo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private userService:UserService) {
  }

  ngOnInit(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    this.getShops();
  }

  getShops(){
    this.userService.getUsersByRole('Shop').subscribe(response=> {
      this.shopInfo=response;
      console.log(this.shopInfo);
     })
  }

  toShopInfoPage(id)
  {
    this.navCtrl.push(EmployeePage,{
      userID : id,
      isShop:true
    });
  }


  toMapPage(){
    this.navCtrl.push(MapPage,{
      userInfo : this.shopInfo
    });
    
  }

}
