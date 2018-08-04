import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SnippetPage } from '../snippet/snippet';

export interface SnippetItem {
  title: string,
  information: string,
  snippetFile: string
}

@Component({
  selector: 'page-code',
  templateUrl: 'code.html'
})
export class CodePage {
  snippetItems: Array<SnippetItem>

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.snippetItems = [];
    this.http.get<SnippetItem[]>("/assets/data/snippets.json").subscribe(data => {
       this.snippetItems = data; 
    });
  }

  openSnippet(item: SnippetItem) {
    this.navCtrl.push(SnippetPage, {
      item: item
    });
  }

}
