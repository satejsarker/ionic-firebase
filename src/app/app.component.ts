import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    var config = {
      apiKey: "AIzaSyDEThAjTiqZqzl1siJKQ3YCjeQvrm-v_9E",
      authDomain: "firebasproject-satej.firebaseapp.com",
      databaseURL: "https://firebasproject-satej.firebaseio.com",
      projectId: "firebasproject-satej",
      storageBucket: "firebasproject-satej.appspot.com",
      messagingSenderId: "381581410793"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.rootPage=TabsPage;

      }
      else{
        this.rootPage=LoginPage;
      }
    });



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
