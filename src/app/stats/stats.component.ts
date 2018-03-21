import { Component, OnInit } from '@angular/core';
import { WebDataService } from '../web-data.service';
import { IOsdataService } from '../i-osdata.service';
import { AndDataService } from '../and-data.service';
import { HybdataService } from '../hybdata.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  //id = 'chart1';
  type = 'pie2d';
  dataFormat = 'json';
  dataSource: any;
  width: number = 400;
  height: number = 400;
  webData: number = 0;
  iosData: number = 0;
  hybData: number = 0;
  andData: number = 0;
  title = 'EAFO - Stats';

  constructor(private webS: WebDataService, private iosS: IOsdataService, private andS: AndDataService, private hybS: HybdataService) {

  }
  ngOnInit() {
    this.getData();
    setTimeout(()=>{
      this.drawGraph();
    },500);
  }
  getData() {
    this.webS.getList_web().subscribe(res1 => {
      this.webData = res1.length;
    });
    this.iosS.getList_iOS().subscribe(res2 => {
      this.iosData = res2.length;
    });
    this.hybS.getList_hyb().subscribe(res3 => {
      this.hybData = res3.length;
    });
    this.andS.getList_and().subscribe(res4 => {
      this.andData = res4.length;
    });
  }
  drawGraph() {
    console.log("1111",this.iosData,this.andData,this.webData,this.hybData);
    this.dataSource = {
      "chart": {
        "yAxisName": "Year",
        "yAxisMaxValue": "100",
        "numberPrefix": "",
        "paletteColors": "#0075c2",
        "bgColor": "#ffffff",
        "showBorder": "0",
        "showCanvasBorder": "0",
        "plotBorderAlpha": "10",
        "usePlotGradientColor": "0",
        "plotFillAlpha": "50",
        "showXAxisLine": "1",
        "axisLineAlpha": "25",
        "divLineAlpha": "10",
        "showValues": "1",
        "showAlternateHGridColor": "0",
        "plotSpacePercent": "10",
        "chartBottomMargin": "50",
        "baseFont": "Source Sans Pro",
        "baseFontSize": "16",
        "toolTipColor": "#ffffff",
        "toolTipBorderThickness": "0",
        "toolTipBgColor": "#000000",
        "toolTipBgAlpha": "80",
        "toolTipBorderRadius": "2",
        "toolTipPadding": "10"
      },
      "data": [
        {
          "label": "iOS",
          "value": this.iosData
        }, {
          "label": "Android",
          "value": this.andData
        }, {
          "label": "Hydrib",
          "value": this.hybData
        }, {
          "label": "Web App/ Desktop",
          "value": this.webData
        }
      ]

      // "chart": {
      //     "caption": "EAFO - Apps Stats",
      //     "subCaption": "Apps so far [ Year ].",
      //     "startingangle": "120",
      //     "showlabels": "0",
      //     "showlegend": "1",
      //     "enablemultislicing": "0",
      //     "slicingdistance": "15",
      //     "showpercentvalues": "1",
      //     "showpercentintooltip": "0",
      //     "plottooltext": "Platform : $label",
      //     "theme": "ocean"
      // },
      // "data": [
      //         {
      //           "label": "iOS",
      //           "value": this.iosData
      //         },
      //         {
      //           "label": "Android",
      //           "value": this.andData
      //         },
      //         {
      //           "label": "Hybrid",
      //           "value": this.hybData
      //         },
      //         {
      //           "label": "Web App/ Desktop",
      //           "value": this.webData
      //         },
      // ]
    };
  }
}
    // this.dataSource = {
    //   "chart": {
    //     "caption": "EAFO - Apps Stats",
    //     "subCaption": "Apps so far [ Year ].",
    //     "numberprefix": "",
    //     "theme": "fint"
    //   },
    //   "data": [
    //     {
    //       "label": "iOS",
    //       "value": this.iosData
    //     },
    //     {
    //       "label": "Android",
    //       "value": this.andData
    //     },
    //     {
    //       "label": "Hybrid",
    //       "value": this.hybData
    //     },
    //     {
    //       "label": "Web App/ Desktop",
    //       "value": this.webData
    //     },
    //   ]
    // }

