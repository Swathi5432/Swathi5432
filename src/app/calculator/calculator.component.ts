import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public num1:any
  public num2:any;
  public res1:any;

  public num3:any;
  public num4:any;
  public res2:any;

  public num5:any;
  public num6:any;
  public res3:any;

  public num7:any;
  public num8:any;
  public res4:any;
  
  public num9:any;
  public res5:any;

  addition(){
    this.res1= this.num1 + this.num2;
  }
  sub(){
    this.res2= this.num3 - this.num4;
    // this.res= this.num - this.num;
    
  }
  mul(){
    this.res3= this.num5 * this.num6;
    
  }
  div(){
    this.res4= this.num7 / this.num8;
    
  }
  sqrt(){
    this.res5=Math.sqrt(this.num9);
  }

  constructor() { }

  ngOnInit(): void {
  }
  enable1:boolean=false;
  enable2:boolean=false;
  enable3:boolean=false;
  enable4:boolean=false;
  enable5:boolean=false;
  enable6:boolean=false;
  enable7:boolean=false;
  enable8:boolean=false;
  enable9:boolean=false;
  // disable:boolean=false;
  a:string[]=[];
  b:string[]=[];
  next:boolean=true;
  display:boolean=true;
  textoFormat:string='';
  c:string='kuhl ja sim simm';
  d:string='band ho ja sim simm';
  formGroup: any;
  isChecked1:boolean = true;
  isChecked2:boolean = true;
  isChecked3:boolean = true;
  isChecked4:boolean = true;
  isChecked5:boolean = true;
  isChecked6:boolean = true;
  isChecked7:boolean = true;
  isChecked8:boolean = true;
  isChecked9:boolean = true;
  count:number=0;
  count2:number=0;
  count3:number=0;
  count4:number=0;
  count5:number=0; 
  count6:number=0;
  count7:number=0;
  count8:number=0;
  count9:number=0;
  aa:any;
  bb:any;
  cc:any;
  // onFormSubmit() {
  // alert(JSON.stringify(this.formGroup.value, null, 2));
  // }
  disableFunctionality(kuhl:any){
    this.enable5=true;
    this.enable6=true;
    this.enable7=true;
    this.enable8=true;
    this.enable9=true;
    this.enable1=false;
    this.enable2=false;
    this.enable3=false;
    this.enable4=false;
    this.count=this.count+1
  if(this.count===1){
  this.isChecked1=false;
  this.isChecked2 = false;
  this.isChecked3 = false;
  this.isChecked4 = false;
  this.isChecked5 = false;
  this.isChecked6 = false;
  this.isChecked7 = false;
  this.isChecked8 = false;
  this.isChecked9 = false;
    }
    if(this.count==this.count){
      this.isChecked5 = false;
      this.isChecked6 = false;
      this.isChecked7 = false;
      this.isChecked8 = false;
      this.isChecked9 = false;
      this.b.length=0;
      this.display=true;
        }
    console.log(this.isChecked1);
    
    if(this.isChecked1==false&&this.enable1==false){
      this.a.push(kuhl);
    }else{
    this.a.pop();
    this.next=true;

    }
    console.log(this.a);
    
    if(this.a.join(" ")==this.c&&this.a.length==4&&this.enable1==false){
      this.next=false;  
      // this.a.length=0;
    }else{
      if(this.a.join(" ")!='kuhl'&&this.a.length==4){
      //  this.a.length=0;
      alert("click in this order to enable the next button--kuhl ja sim sim")
    }
  }
    
  }
  ja(ja:any){
    // this.enable=false;
    if(this.isChecked2==false&&this.enable2==false){

      this.a.push(ja);
    }else{
    this.a.pop();
    this.next=true;

    }
    console.log(this.a);
    if(this.a.join(" ")==this.c&&this.a.length==4&&this.enable2==false){
      this.next=false;  
      // this.a.length=0;
    }else{
      if(this.a.join(" ")!='kuhl ja'&&this.a.length==4){
      //  this.a.length=0;
      alert("click in this order to enable the next button--kuhl ja sim sim")
    }
  }
  }
  sim1(sim:any){
    // this.enable=false;
    if(this.isChecked3==false&&this.enable3==false){
     this.a.push(sim);
    }else{
      this.a.pop();
      this.next=true;
      }
    console.log(this.a);
    if((this.a.join(" "))==this.c&&this.a.length==4&&this.enable3==false){
      this.next=false;  
      // this.a.length=0;
    }else{
      if(this.a.join(" ")!='kuhl ja sim' &&this.a.length==4){
        // this.a.length=0;
      alert("click in this order to enable the next button--khul jaa sim sim")
    }
  }
  }
  sim2(simm:any){
    // this.enable=false;
    if(this.isChecked4==false&&this.enable4==false){
      this.a.push(simm);
    }else{
      this.a.pop();
      this.next=true;

      }
    console.log(this.a);
    console.log((this.a.join(" ")));
        if(this.a.join(" ")==this.c&&this.a.length==4&&this.enable4==false){
      this.next=false; 
      // this.a.length=0;
    }else{
      if(this.a.join(" ")!='kuhl ja sim simm'&&this.a.length==4){
        // this.a.length=0;
      alert("click in this order to enable the next button--Khul Jaa Sim Sim")
    }
  }
  }
  
  band(band:any){
    this.enable1=true;
    this.enable2=true;
    this.enable3=true;
    this.enable4=true;
    this.enable5=false;
    this.enable6=false;
    this.enable7=false;
    this.enable8=false;
    this.enable9=false;
    this.count=this.count+1
     if(this.count==this.count){
    this.isChecked1=false;
    this.isChecked2 = false;
    this.isChecked3 = false;
    this.isChecked4 = false;
    this.a.length=0;
    this.next=true;
       }
      
    if(this.isChecked5==false&&this.enable5==false){
     this.b.push(band);
    }else{
      this.b.pop();
      this.display=true;
      }
    console.log(this.b);
    if(this.b.join(" ")==this.d&&this.b.length==5&&this.enable5==false){
      this.display=false; 
      // this.a.length=0;
    }else{
      if(this.b.join(" ")!='band'&&this.b.length==5){
        // this.a.length=0;
      alert("click in this order for the back button--band ho ja sim sim")
    }
  }
  }
  
  ho(ho:any){
    // this.enable=false;
    if(this.isChecked6==false&&this.enable6==false){
     this.b.push(ho);
    }else{
      this.b.pop();
      this.display=true;
      }
    
    console.log(this.b);
    if(this.b.join(" ")==this.d&&this.b.length==5&&this.enable6==false){
      this.display=false; 
      // this.a.length=0;
    }else{
      if(this.b.join(" ")!='band ho'&&this.b.length==5){
        // this.a.length=0;
      alert("click in this order for the back button--band ho ja sim sim")
    }
  }
  }
  jaa(jaa:any){
    // this.enable=false;
    if(this.isChecked7==false&&this.enable7==false){
      this.b.push(jaa);
    }else{
      this.b.pop();
      this.display=true;
      }
    console.log(this.b);
    if(this.b.join(" ")==this.d&&this.b.length==5&&this.enable7==false){
      this.display=false;
      // this.a.length=0;
    }else{
      if(this.b.join(" ")!='band ho ja'&&this.b.length==5){
        // this.a.length=0;
      alert("click in this order for the back button--band ho ja sim sim")
    }
  }
  }
  sim3(sim3:any){
    // this.enable=false;
    if(this.isChecked8==false&&this.enable8==false){
      this.b.push(sim3);
    }else{
      this.b.pop();
      this.display=true;
      }
    console.log(this.b);
    if(this.b.join(" ")==this.d&&this.b.length==5&&this.enable8==false){
      this.display=false;
      // this.a.length=0;
    }else{
      if(this.b.join(" ")!='band ho ja sim'&&this.b.length==5){
        // this.a.length=0;
      alert("click in this order for the back button--band ho ja sim sim")
    }
  }
  }
  sim4(sim4:any){
    // this.enable=false;
    if(this.isChecked9==false&&this.enable9==false){
      this.b.push(sim4);
    }else{
      this.b.pop();
      this.display=true;
      }
    console.log(this.b);
    if(this.b.join(" ")==this.d&&this.b.length==5&&this.enable9==false){
      this.display=false; 
      // this.a.length=0;
    }else{
      if(this.b.join(" ")!='band ho ja sim simm'&&this.b.length==5){
        // this.a.length=0;
      alert("click in this order for the back button--band ho ja sim sim")
    }
  }
  }
 
}

