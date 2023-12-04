import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacao2',
  templateUrl: './navegacao2.page.html',
  styleUrls: ['./navegacao2.page.scss'],
})
export class Navegacao2Page implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  showPageNavegacao(){
    this.navCtrl.navigateForward("navegacao");
  }

}
