import { animate, AnimateTimings, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
const flipState =trigger('flipState', [

  state('active', style({

    transform: 'rotateY(179.9deg)'

  })),

  state('inactive', style({

    transform: 'rotateY(0)'

  })),

  transition('active => inactive', animate('300ms ease-out')),

  transition('inactive => active', animate('300ms ease-in'))

])
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  animations:[flipState]
})
export class StoreComponent implements OnInit {
  
  name:any;
  fliping:any= 'inactive';
  isclick=true;
  onclick= false;
  
  name1:any;
  fliping1:any= 'inactive';
  isclick1=true;
  onclick1= false;

  name2:any;
  fliping2:any= 'inactive';
  isclick2=true;
  onclick2= false;

  name3:any;
  fliping3:any= 'inactive';
  isclick3=true;
  onclick3= false;

  name4:any;
  fliping4:any= 'inactive';
  isclick4=true;
  onclick4= false;

  name5:any;
  fliping5:any= 'inactive';
  isclick5=true;
  onclick5= false;

  name6:any;
  fliping6:any= 'inactive';
  isclick6=true;
  onclick6= false;

  name7:any;
  fliping7:any= 'inactive';
  isclick7=true;
  onclick7= false;

  name8:any;
  fliping8:any= 'inactive';
  isclick8=true;
  onclick8= false;

 
  constructor() { }

  ngOnInit(): void {
  }
  flip(){

    this.isclick=this.isclick;
    this.fliping = (this.fliping == 'inactive') ? 'active' : 'inactive';
   }
   action(name:any){
    this.name=name;
  this.onclick=this.onclick;
   }

   flip1(){

    this.isclick1=this.isclick1;
    this.fliping1 = (this.fliping1 == 'inactive') ? 'active' : 'inactive';
   }
   action1(name1:any){
    this.name1=name1;
  this.onclick1=this.onclick1;
   }

   flip2(){

    this.isclick2=this.isclick2;
    this.fliping2 = (this.fliping2 == 'inactive') ? 'active' : 'inactive';
   }
   action2(name2:any){
    this.name2=name2;
  this.onclick2=this.onclick2;
   }
   
   flip3(){

    this.isclick3=this.isclick3;
    this.fliping3 = (this.fliping3 == 'inactive') ? 'active' : 'inactive';
   }
   action3(name3:any){
    this.name3=name3;
  this.onclick3=this.onclick3;
   }

   flip4(){

    this.isclick4=this.isclick4;
    this.fliping4 = (this.fliping1 == 'inactive') ? 'active' : 'inactive';
   }
   action4(name4:any){
    this.name4=name4;
  this.onclick4=this.onclick4;
   }

   flip5(){

    this.isclick5=this.isclick5;
    this.fliping5 = (this.fliping5 == 'inactive') ? 'active' : 'inactive';
   }
   action5(name5:any){
    this.name5=name5;
  this.onclick5=this.onclick5;
   }
   
   flip6(){

    this.isclick6=this.isclick6;
    this.fliping6 = (this.fliping6 == 'inactive') ? 'active' : 'inactive';
   }
   action6(name6:any){
    this.name6=name6;
  this.onclick6=this.onclick6;
   }

   flip7(){

    this.isclick7=this.isclick7;
    this.fliping7 = (this.fliping7 == 'inactive') ? 'active' : 'inactive';
   }
   action7(name7:any){
    this.name7=name7;
  this.onclick7=this.onclick7;
   }
   
   flip8(){

    this.isclick8=this.isclick8;
    this.fliping8 = (this.fliping8 == 'inactive') ? 'active' : 'inactive';
   }
   action8(name8:any){
    this.name8=name8;
  this.onclick8=this.onclick8;
   }
   scroll(el: HTMLElement) {

    el.scrollIntoView({

      behavior: "smooth",

      block: "start",

      inline: "nearest"

    });
  }

  // @ViewChild('pdfTable') pdfTable: ElementRef | undefined;
  // public convertToPDF() {
  //   let data = document.getElementById('target');
  //   html2canvas(data!).then(canvas => {
  //     let docWidth = 208;
  
  //     let docHeight = canvas.height * docWidth / canvas.width;
  //     const contentDataURL = canvas.toDataURL('image/png')
  //     let doc = new jsPDF('p', 'mm', 'a4');
  //     let position = 0;
  //     doc.addImage(contentDataURL, 'png', 0, position, docWidth, docHeight) 
  //     doc.save('exportedPdf.pdf');
  
  
  //       });
  // }
}
