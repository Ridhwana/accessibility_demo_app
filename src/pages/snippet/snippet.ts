import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import Prism from 'prismjs';
import 'rxjs/add/operator/map';
import '../../assets/data/snippets/complex.js'

/**
 * Generated class for the SnippetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-snippet', 
  templateUrl: 'snippet.html',
})
export class SnippetPage {
  item: any;
  file: string;
  @ViewChild('codeContainer') container: ElementRef;
  @ViewChild('sample') example: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.item = navParams.get('item');
    console.log(this.item);

    var codeFile = "/assets/data/snippets/" + this.item.snippetFile; 

    this.http.get(codeFile, {responseType: 'text'}).subscribe(data => {
      this.file = data.toString();       
      var cleanText = this.file.replace(/<br>/g, '');
      this.example.nativeElement.innerHTML = this.file;

      var html = Prism.highlight(cleanText, Prism.languages.markup, 'markup');
      this.container.nativeElement.innerHTML = html;
    }); 
  }

}
