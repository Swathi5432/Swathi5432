import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnualReport } from './annual-report';
import { ValidAnnualReport } from './valid-annual-report';

@Injectable({
  providedIn: 'root'
})
export class AnnualReportService {

  private baseURL="http://localhost:8080/api/v1/reports";

  constructor(private httpClient:HttpClient) { }

  getAnnualReportsList():Observable<AnnualReport[]>{
    return this.httpClient.get<AnnualReport[]>(`${this.baseURL}`);
  }

  addProduct(report:AnnualReport):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,report);
  }

  getProductById(id:number):Observable<AnnualReport>{
    return this.httpClient.get<AnnualReport>(`${this.baseURL}/${id}`);
  }
  updateProduct(id: number, annualReport: AnnualReport): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, annualReport);

  }
  deletrProduct(id: number ): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}` );
  }
  getTotalBalanceReports(year: string ): Observable<AnnualReport>{
    return this.httpClient.get<AnnualReport>(`${this.baseURL}/getTotalBalance/${year}` );
  }

  getTotalIncomeReports(year: string ): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/getTotalIncome/${year}` );
  }

  getTotalSalesReports(year: string ): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/getTotalSales/${year}` );
  }


}
