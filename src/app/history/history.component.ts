import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  transactionData:any;
  constructor(private ds: DataService)
  {
    this.transactionData=this.ds.getTransaction(this.ds.currentAccNo);
    console.log(this.transactionData);
  }
}
