import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { AnnualReport } from '../annual-report';

import { AnnualReportService } from '../annual-report.service';



@Component({

  selector: 'app-update-product',

  templateUrl: './update-product.component.html',

  styleUrls: ['./update-product.component.css']

})

export class UpdateProductComponent implements OnInit{

  id:number;

  report:AnnualReport=new AnnualReport();

  graphTableForm:FormGroup;

  // productNamePattern="^[a-zA-Z_]{8}$";

  // yearPattern="^[0-9]{4}$";

  // salesPattern="^[0-9]$";

  // incomePattern="^[0-9]$";

  // balancePattern="^[0-9]$";

  isValidFormSubmitted :boolean;



constructor(private annualReportService:AnnualReportService ,

  private route:ActivatedRoute,

  private router: Router

  ,private formBuilder:FormBuilder

  ){



}

ngOnInit(): void {

  this.id=this.route.snapshot.params['id'];

  this.annualReportService.getProductById(this.id).subscribe(data =>{

    this.report=data;

  }

  );



    this.graphTableForm= this.formBuilder.group({

 

      product_name:['',[Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z_0-9]*$')]],

      year:['',[Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('^[0-9]*$')]],

      sales:['',[Validators.required, Validators.pattern('^[0-9]*$')]],

      income: ['',[Validators.required, Validators.pattern('^[0-9]*$')]],

      balance:['',[Validators.required, Validators.pattern('^[0-9]*$')]]

      })

   

 

}



onSubmit(){

  // this.annualReportService.updateProduct(this.id,this.report).subscribe(data =>{

  //   this.gotoAnnualReportList();



  // })

 

    if (this.graphTableForm.valid){

      this.annualReportService.updateProduct(this.id,this.report).subscribe(data =>{

        this.gotoAnnualReportList();

        this.isValidFormSubmitted=true;

       this.router.navigate(['/reports'])



    })

     const productREG =this.graphTableForm.value;

     const formData={

      product_name:productREG.product_name,

      year:productREG.year,

      sales:productREG.sales,

      income:productREG.income,

      balance:productREG.balance,

     

     }

  }

  else{

    this.validateAllFormFields(this.graphTableForm)

  }

  }



gotoAnnualReportList(){

  this.router.navigate(['/reports']);

}

validateAllFormFields(formGroup: FormGroup) {

  Object.keys(formGroup.controls).forEach(field => {

    const control = formGroup.get(field);

    if (control instanceof FormControl) {

      control.markAsTouched({ onlySelf: true });

    }

    else if (control instanceof FormGroup) {

      this.validateAllFormFields(control);

    }

  });

}



}