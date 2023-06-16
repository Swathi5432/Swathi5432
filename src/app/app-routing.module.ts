
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CalculatorComponent } from './calculator/calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { AnnualReportListComponent } from './annual-report-list/annual-report-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { MainComponent } from './main/main.component';
import { CalculatorComponent } from './calculator/calculator.component';




  const routes: Routes = [
    
    { path:'', component:MainComponent},
    // {path:'/main', component:MainComponent},
    { path: 'calculator', component:CalculatorComponent},
    { path:'reports', component:AnnualReportListComponent},
    {path:'add-product', component:AddProductComponent},
    {path:'update-product/:id', component:UpdateProductComponent},
    { path:'',redirectTo:'reports', pathMatch:'full'}
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
