import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ResetPasswordPage} from '../reset-password/reset-password';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

data:any=[{
name:'satej',
id:'1234',
last:'sarker'

},
  {
    name: 'samir',
    id: 'assq114',
    last: 'sarker'

  }
  ,
  {
    name: 'avijit',
    id: 'awe121s11',
    last: 'mondal'

  }

]
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  onDismiss() {
    this.viewCtrl.dismiss();
  }
  redirectTorest()
{
    this.navCtrl.push(ResetPasswordPage,this.data);
}


}
