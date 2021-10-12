import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
  }

  /* Bar chart */
  multi: any[] = [];

  view: [number, number] = [1000, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '2022';
  showYAxisLabel = true;
  yAxisLabel = 'No. de citas';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  single = [
    {
      "name": "Ene",
      "value": 45
    },
    {
      "name": "Feb",
      "value": 40
    },
    {
      "name": "Mar",
      "value": 45
    },
    {
      "name": "Abr",
      "value": 37
    }
    ,
    {
      "name": "May",
      "value": 47
    },
    {
      "name": "Jun",
      "value": 43
    },
    {
      "name": "Jul",
      "value": 50
    },
    {
      "name": "Agt",
      "value": 51
    },
    {
      "name": "Sept",
      "value": 54
    },
    {
      "name": "Oct",
      "value": 22
    },
    {
      "name": "Nov",
      "value": 0
    },
    {
      "name": "Dic",
      "value": 0
    }
  ];
  
  constructor() {
    //Object.assign(this, { single })
  }

  onSelect(event: any) {
    console.log(event);
  }
  /* Bar chart end */

}
