import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnualReport } from '../annual-report';
import { AnnualReportService } from '../annual-report.service';
import { FormBuilder, Validators,NgForm,FormControl, FormGroup, MaxLengthValidator } from '@angular/forms';
import { ValidAnnualReport } from '../valid-annual-report';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
 
    report:AnnualReport=new AnnualReport();
    graphTableForm:FormGroup
    // productNamePattern="^[a-zA-Z_]{8}$";
    // yearPattern="^[0-9]{4}$";
    // salesPattern="^[0-9]$";
    // incomePattern="^[0-9]$";
    // balancePattern="^[0-9]$";
    isValidFormSubmitted :boolean;
 

    
  
  constructor(private annualReportService:AnnualReportService,
    private router:Router,private formBuilder:FormBuilder){

       
   




  }
  // getproduct:any;
  ngOnInit(): void {

    this.graphTableForm= this.formBuilder.group({
  
      product_name:['',[Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z_0-9]*$')]],
      year:['',[Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('^[0-9]*$')]],
      sales:['',[Validators.required, Validators.pattern('^[0-9]*$')]],
      income: ['',[Validators.required, Validators.pattern('^[0-9]*$')]],
      balance:['',[Validators.required, Validators.pattern('^[0-9]*$')]]
      })
    
  }
  // onFormSubmit(){
   


  //   this.isValidFormSubmitted= false;
  //   if (this.graphTableForm.invalid){
  //     return;
  //   }
  //   else{
  //     this.onSubmit();
  //   }
  //   this.isValidFormSubmitted = true;
  //   let detail:AnnualReport=this.graphTableForm.value as AnnualReport;
  //   this.annualReportService.createProduct(detail);
  //   this.graphTableForm.reset();
  // }
  // get  product_name():FormControl{
  //   return this.graphTableForm.get('product_name') as FormControl;
  // }
  // get getYearPtr(){
  //   return this.graphTableForm.get('year');
  // }
  // get getSalesPtr(){
  //   return this.graphTableForm.get('sales');
  // }
  // get getIncomePtr(){
  //   return this.graphTableForm.get('income');
  // }
  // get getBalancePtr(){
  //   return this.graphTableForm.get('balance');
  // }

  onSubmit(){
    if (this.graphTableForm.valid){
    console.log(this.report);
      this.annualReportService.addProduct(this.report).subscribe( data =>{
      console.log(data);
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
