import { Component } from '@angular/core';

import { ResourcesPage } from '../resources/resources';
import { AboutPage } from '../about/about';
import { CodePage } from '../code/code';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = CodePage;
  tab4Root = ResourcesPage;

  constructor() {

  }
}
