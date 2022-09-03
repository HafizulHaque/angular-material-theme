import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isSideNavOppened: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  sidebarToggler(){
    this.isSideNavOppened = !this.isSideNavOppened;
  }
}
