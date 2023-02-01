import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin-service.js.service';
@Component({
  selector: 'bitcoin-chart',
  templateUrl: './bitcoin-chart.component.html',
  styleUrls: ['./bitcoin-chart.component.scss']
})
export class BitcoinChartComponent implements OnInit{

  constructor (private bitcoinService : BitcoinService) {}
  bitcoinRate:Object = 0
  async ngOnInit(): Promise<any> {
   (await this.bitcoinService.getRate()).subscribe(data =>{
    this.bitcoinRate = data
   })
  }
}
