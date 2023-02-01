import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin-service.js.service';
import { __values } from 'tslib';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'btc-chart',
  templateUrl: './btc-chart.component.html',
  styleUrls: ['./btc-chart.component.scss']
})
export class BTCChartComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  bitcoinRateUrl = 'https://blockchain.info/tobtc?currency=USD&value=1';
  bitcoinAvgUrl = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true'
  bitcoinBlockUrl = 'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true'
  bitcoinMarketprice = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'

  private async dynamicChart(Url: string, chartName: string) {
    let values: Array<Object> = [];
    let yAxis: Array<Object> = [];
    let label:string
    (await this.bitcoinService.getChartData(Url)).subscribe(data => {
      label = data.name
      data.values.forEach((l: any) => {
        values.push({ x: l.x, y: l.y })
        yAxis.push('')
      })
      new Chart(chartName, {
        type: 'line',
        data: {
          labels: yAxis,
          datasets: [{
            label,
            data: values
          },
          ]
        },
        options: {}
      });
    }
    )
  }

  async ngOnInit(): Promise<any> {
    this.dynamicChart(this.bitcoinAvgUrl, "usdChart")
    this.dynamicChart(this.bitcoinBlockUrl, "blockChart")
    this.dynamicChart(this.bitcoinMarketprice, "marketChart")
  }
}
