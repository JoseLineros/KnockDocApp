import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent implements OnInit {

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
      "value": 2
    },
    {
      "name": "Feb",
      "value": 1
    },
    {
      "name": "Mar",
      "value": 0
    },
    {
      "name": "Abr",
      "value": 3
    }
    ,
    {
      "name": "May",
      "value": 1
    },
    {
      "name": "Jun",
      "value": 2
    },
    {
      "name": "Jul",
      "value": 0
    },
    {
      "name": "Agt",
      "value": 0
    },
    {
      "name": "Sept",
      "value": 3
    },
    {
      "name": "Oct",
      "value": 1
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
