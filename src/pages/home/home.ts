import { Component, ViewChild, ElementRef, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalaryPage } from '../salary/salary';
//import Chart from 'chart.js';
import ECharts from 'echarts';
import { HttpService } from '../../providers/HttpService';
//import { ViewChild } from '@angular/core/src/metadata/di';
//import { ElementRef } from '@angular/core/src/linker/element_ref';
//import { MultiPickerModule } from 'ion-multi-picker';
import { NativeService } from "../../providers/NativeService";
import { init } from 'echarts/lib/echarts';
import { APP_SERVE_URL } from '../../providers/Constants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage {
  simpleColumns: any;
  dependentColumns: any;
  priceDownHouse: any;
  priceUpHouse: any;
  priceHorizonHouse: any;
  currentDate: any;
  recommendHouses: any;
  noRecommendHouse: boolean = false;
  //reportDate: String = "";
  // avgPrice: String = "";
  //districtAvgPrice: String = "";
  default = '杨浦 五角场';
  @ViewChild('chart') chart: ElementRef;
  constructor(public navCtrl: NavController, private httpService: HttpService, private nativeService: NativeService) {
    this.currentDate = new Date();
    this.dependentColumns = [
      {
        options: [
          { text: '浦东', value: '浦东' },
          { text: '杨浦', value: '杨浦' },
          { text: '宝山', value: '宝山' }
        ]
      }, {
        options: [
          { text: '川沙', value: '川沙', parentVal: '浦东' },
          { text: '周浦', value: '周浦', parentVal: '浦东' },
          { text: '御桥', value: '御桥', parentVal: '浦东' },
          { text: '花木', value: '花木', parentVal: '浦东' },
          { text: '三林', value: '三林', parentVal: '浦东' },
          { text: '北蔡', value: '北蔡', parentVal: '浦东' },
          { text: '航头', value: '航头', parentVal: '浦东' },
          { text: '新场', value: '新场', parentVal: '浦东' },
          { text: '惠南', value: '惠南', parentVal: '浦东' },
          { text: '张江', value: '张江', parentVal: '浦东' },
          { text: '金杨', value: '金杨', parentVal: '浦东' },
          { text: '金桥', value: '金桥', parentVal: '浦东' },
          { text: '碧云', value: '碧云', parentVal: '浦东' },
          { text: '潍坊', value: '潍坊', parentVal: '浦东' },
          { text: '源深', value: '源深', parentVal: '浦东' },
          { text: '康桥', value: '康桥', parentVal: '浦东' },
          { text: '高东', value: '高东', parentVal: '浦东' },
          { text: '曹路', value: '曹路', parentVal: '浦东' },
          { text: '南码头', value: '南码头', parentVal: '浦东' },
          { text: '世博', value: '世博', parentVal: '浦东' },
          { text: '唐镇', value: '唐镇', parentVal: '浦东' },
          { text: '洋泾', value: '洋泾', parentVal: '浦东' },
          { text: '高行', value: '高行', parentVal: '浦东' },
          { text: '陆家嘴', value: '陆家嘴', parentVal: '浦东' },
          { text: '塘桥', value: '塘桥', parentVal: '浦东' },
          { text: '书院镇', value: '书院镇', parentVal: '浦东' },
          { text: '宣桥', value: '宣桥', parentVal: '浦东' },
          { text: '外高桥', value: '外高桥', parentVal: '浦东' },
          { text: '合庆', value: '合庆', parentVal: '浦东' },
          { text: '临港新城', value: '临港新城', parentVal: '浦东' },
          { text: '泥城镇', value: '泥城镇', parentVal: '浦东' },
          { text: '祝桥', value: '祝桥', parentVal: '浦东' },
          { text: '万祥镇', value: '万祥镇', parentVal: '浦东' },
          { text: '大团镇', value: '大团镇', parentVal: '浦东' },
          { text: '大华', value: '大华', parentVal: '宝山' },
          { text: '顾村', value: '顾村', parentVal: '宝山' },
          { text: '杨行', value: '杨行', parentVal: '宝山' },
          { text: '淞南', value: '淞南', parentVal: '宝山' },
          { text: '罗店', value: '罗店', parentVal: '宝山' },
          { text: '大场镇', value: '大场镇', parentVal: '宝山' },
          { text: '通河', value: '通河', parentVal: '宝山' },
          { text: '高境', value: '高境', parentVal: '宝山' },
          { text: '淞宝', value: '淞宝', parentVal: '宝山' },
          { text: '共富', value: '共富', parentVal: '宝山' },
          { text: '张庙', value: '张庙', parentVal: '宝山' },
          { text: '共康', value: '共康', parentVal: '宝山' },
          { text: '罗泾', value: '罗泾', parentVal: '宝山' },
          { text: '月浦', value: '月浦', parentVal: '宝山' },
          { text: '上大', value: '上大', parentVal: '宝山' },
          { text: '五角场', value: '五角场', parentVal: '杨浦' },
          { text: '中原', value: '中原', parentVal: '杨浦' },
          { text: '黄兴公园', value: '黄兴公园', parentVal: '杨浦' },
          { text: '周家嘴路', value: '周家嘴路', parentVal: '杨浦' },
          { text: '控江路', value: '控江路', parentVal: '杨浦' },
          { text: '东外滩', value: '东外滩', parentVal: '杨浦' },
          { text: '鞍山', value: '鞍山', parentVal: '杨浦' }
        ]
      }];

  }
  goToSalary(house_id: string) {
    this.navCtrl.push(SalaryPage, { 'house_id': house_id });

    //this.tab.select(1);
  }
  ionViewDidEnter() {
    this.initPriceStats();
    this.initChart();
    this.initRecommendHouse();
  }

  /**
   * 房价趋势图
   */
  initChart() {
    let arr = this.default.split(" ");
    this.httpService.get(APP_SERVE_URL + "/app/priceTrendMonth", { region: arr[1] }).map(res => {
      return res.json();
    }).subscribe((json: any) => {
      //console.log(json['reportDate'])
      var reportDate: any[] = [];
      //reportDate.push["2018-03-27"];
      var avgPrice: any[] = [];
      var districtAvgPrice: any[] = [];
      for (let i = 0; i < json.length; i++) {
        reportDate.push(json[i]['reportDate']);
        // console.log(json[i]['reportDate']);
        avgPrice.push(json[i]['avgPrice']);
        districtAvgPrice.push(json[i]['districtAvgPrice']);
        //this.avgPrice += json[i]['avgPrice'] + ",";
        //this.districtAvgPrice += json[i]['districtAvgPrice'] + ",";
      }
      //console.log(avgPrice);
      let element = this.chart.nativeElement;
      let myChart = ECharts.init(element);
      myChart.setOption({
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['板块价格', '本区价格']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: reportDate
        },
        yAxis: {
          min: function (value) {
            return value.min - 20;
          },

          type: 'value'
        },

        series: [
          {
            name: '板块价格',
            type: 'line',
            data: avgPrice,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '本区价格',
            type: 'line',
            data: districtAvgPrice,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          }
        ]
      });
    });
  }
  /**
   * 房子涨跌套数统计
   */
  initPriceStats() {
    let arr = this.default.split(" ");
    this.httpService.get(APP_SERVE_URL + "/app/latestMonthDownHouses", { region: arr[1] }).map(res => {
      return res.json();
    }).subscribe((json: any) => {
      //console.log(json);
      this.priceDownHouse = json['houseDown'];
      this.priceUpHouse = json['houseUp'];
      this.priceHorizonHouse = json['houseHorizon'];
    });
    this.initChart();
    this.initRecommendHouse();
  }

  /**
   * 推荐房源信息
   */
  initRecommendHouse() {
    let arr = this.default.split(" ");
    this.httpService.get(APP_SERVE_URL + "/app/recommendHouses", { region: arr[1] }).map(res => {
      return res.json();
    }).subscribe((json: any) => {
      console.log(json);
      this.recommendHouses = json;
      this.noRecommendHouse = false;
      if (json.length < 1) {
        this.noRecommendHouse = true;
      }
    });
  }


}
