import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
// import { GraphComponent } from './graph/graph.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SlideDirective } from './slide.directive';
// import { CalculatorComponent } from './calculator/calculator.component';
import { MyServices } from './my.service';
import { AnnualReportListComponent } from './annual-report-list/annual-report-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { MainComponent } from './main/main.component';
// import { CalcComponent } from './calc/calc.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CalculatorComponent } from './calculator/calculator.component';
export function HttpLoderFactory(http:HttpClient){

  return new TranslateHttpLoader(http, './assets/i18n/','.json');

}


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    NavbarComponent,
    SlideDirective,
    
    AnnualReportListComponent,
    AddProductComponent,
    UpdateProductComponent,
    MainComponent,
    CalculatorComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    TranslateModule.forRoot({



      defaultLanguage:'en-UK',



      loader: {



        provide: TranslateLoader,



        useFactory: HttpLoderFactory,



        deps: [HttpClient]



      }



    })
  ],
  providers: [MyServices ],
  bootstrap: [AppComponent]
})
export class AppModule { }
