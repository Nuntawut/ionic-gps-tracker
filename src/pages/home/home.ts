import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public fire_lat: number = 0;
  public fire_lng: number = 0;

  item: Observable<any>;
  
  constructor(public navCtrl: NavController,public locationTracker: LocationTrackerProvider,public db: AngularFireDatabase) {
    this.db.object('Bus_1').valueChanges().subscribe(data=>{
      this.fire_lat = data['lat'];
      this.fire_lng = data['lng'];
    });
  }

  start(){
    this.locationTracker.startTracking();
  }
 
  stop(){
    this.locationTracker.stopTracking();
  }

}
