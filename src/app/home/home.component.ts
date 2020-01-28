import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  team8 : String[] = ["Magnegeeks","Mort","Pascack Pioneers","ROBBE","asd","asdf","qwert","foo"];
  constructor() { }

  ngOnInit() {
  }

}
