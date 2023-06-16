import { Component } from '@angular/core';

import { AnnualReport } from '../annual-report'
import { AnnualReportService } from '../annual-report.service';
import { Chart, registerables} from "chart.js";

import { Router } from '@angular/router';

@Component({
  selector: 'app-annual-report-list',
  templateUrl: './annual-report-list.component.html',
  styleUrls: ['./annual-report-list.component.css']
})
export class AnnualReportListComponent {
  
  reports: AnnualReport[] = [];
  year:any[]=[];
  balance:any[]=[];
  income:any[]=[];
  sales:any[]=[];
  chart:any=[];
  annualReport:any;


  
  constructor(private annualReportService:AnnualReportService, private router:Router){
  Chart.register(...registerables)
  }
 
  ngOnInit():void{


    
    this.annualReportService.getAnnualReportsList().subscribe(data =>{
        this. reports =data;
    // console.log(this.annualReport);
    if(this.reports!=null){

      for(let i=0;i<this.reports.length;i++)
      {
   

    this.year.push(this.reports[i].year)
    this.balance.push(this.reports[i].balance)
    this.income.push(this.reports[i].income)
    this.sales.push(this.reports[i].sales)
      

      }
      console.log(this.year,this.balance,this.income,this.sales);
    }

   
    //graph
    this.chart =new Chart('canvas',{
      type:'bar',
      data:{
        labels:this.year,
        datasets:[
          {
          label:'Balance',
          data:this.balance,
          backgroundColor:"#7B68EE",
        
          },
          {
          label:'Income',
          data:this.income,
          backgroundColor:"tomato"
          },
          {
            label:'Sales',
            data:this.sales,
            backgroundColor: "#20B2AA",
          }

        ]

      }
    })
    });

  this.getAnnualReport();

    
  }
  RenderChart(year: any[], balance: any[], income: any[], sales: any[]) {
    throw new Error('Method not implemented.');
  }
  private getAnnualReport(){
    this.annualReportService.getAnnualReportsList().subscribe(data =>{
      this.reports = data;
     
    });
  }
  updateProduct(id:number){
    this.router.navigate(['update-product',id]);

  }
  deleteProduct(id: number){
    this.annualReportService.deletrProduct(id).subscribe( data => {
      console.log(data);
      this.getAnnualReport();
      alert('Do You want delete');
      this.router.navigate(['reports'])
      
    });
  }
  total_balance :any;
  getTotalBalance(year:string){
    this.annualReportService.getTotalBalanceReports(year).subscribe(data=>{
      this.total_balance=data;
      console.log(data);
    })
  }
}

  



