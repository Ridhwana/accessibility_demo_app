import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface ResourceItem {
  title: string,
  url: string,
  icon: string
}

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html',
})

export class ResourcesPage {
  resourceItems: Array<ResourceItem>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    
    this.resourceItems = [];
    this.http.get<ResourceItem[]>("/assets/data/resources.json").subscribe(data => {
       this.resourceItems = data; 
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResourcesPage');
  }

}
