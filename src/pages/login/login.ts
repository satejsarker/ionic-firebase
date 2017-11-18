import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { RegisterPage} from '../register/register'; 

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public emailFild:any;
  public passwordFild:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private modelctrl:ModalController
  ) {
    this.emailFild;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
    onSubmit(){
      alert('welcome');
    }

    onRegister(){
      let registerModel=this.modelctrl.create(RegisterPage);
      registerModel.present();
    }
    
    }
