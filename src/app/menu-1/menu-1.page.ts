import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-1',
  templateUrl: './menu-1.page.html',
  styleUrls: ['./menu-1.page.scss'],
})
export class Menu1Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToContact(){
    this.navCtrl.navigateForward('/')
  }

  items=[
    {
      id : 1,
      name:'กะเพราหมูสับ',
      price: 35,
      detail:'this is a product A',
    },
    {
      id : 2,
      name:'Product A',
      price: 200,
      detail:'this is a product A',
    },{
      id : 3,
      name:'Product A',
      price: 200,
      detail:'this is a product A',
    },{
      id : 4,
      name:'ข้าวเปล่า',
      price: 10,
      detail:'this is a product A',
    },{
      id : 5,
      name:'ไข่ดาว',
      price: 7,
      detail:'this is a product A',
    },
  ]

}
