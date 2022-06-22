import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasummary',
  templateUrl: './datasummary.component.html',
  styleUrls: ['./datasummary.component.css']
})
export class DatasummaryComponent implements OnInit {

  constructor() { }
  page = 4;
  ngOnInit(): void {
  }

}
