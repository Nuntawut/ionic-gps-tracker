import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse  } from '@ionic-native/background-geolocation';
//import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public lat: number = 0;
  public lng: number = 0;
  
  constructor(private backgroundGeolocation: BackgroundGeolocation, public navCtrl: NavController) {

  }

  startTracking(){

    let config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };

    this.backgroundGeolocation.configure(config).subscribe((location: BackgroundGeolocationResponse) => {
 
      console.log('BackgroundGeolocation:  ',location);
   
      this.lat = location.latitude;
      this.lng = location.longitude;
   
    }, (err) => {
   
      console.log(err);
   
    });

    this.backgroundGeolocation.start();
  }

  stopTracking() {
 
    console.log('stopTracking');
   
    this.backgroundGeolocation.stop();
   
  }

}
