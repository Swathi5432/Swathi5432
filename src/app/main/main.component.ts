import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:[flipState]
})

export class MainComponent implements OnInit {

  isclick=true;
  onclick1:boolean=true;
  onclick2:boolean=true;
  onclick3:boolean=true;
  onclick4:boolean=true;
  onclick5:boolean=true;
  onclick6:boolean=true;
  onclick7:boolean=true;
  onclick8:boolean=true;
  onclick9:boolean=true;
  name1:any;
  name2:any;
  name3:any;
  name4:any;
  name5:any;
  name6:any;
  name7:any;
  name8:any;
  name9:any;

  fliping1:any= 'inactive';
  fliping2:any= 'inactive';
  fliping3:any= 'inactive';
  fliping4:any= 'inactive';
  fliping5:any= 'inactive';
  fliping6:any= 'inactive';
  fliping7:any= 'inactive';
  fliping8:any= 'inactive';
  fliping9:any= 'inactive';
  inc1: number=0;
  inc2: number=0;
  inc3: number=0;
  inc4: number=0;
  inc5: number=0;
  inc6: number=0;
  inc7: number=0;
  inc8: number=0;
  inc9: number=0;
  
height:any;
  

 
  constructor() { }

  ngOnInit(): void {


  }
 flip1(){
  this.isclick=this.isclick;
    this.fliping1 = (this.fliping1 == 'inactive') ? 'active' : 'inactive';
 }

 flip2(){
  this.isclick=this.isclick;
    this.fliping2 = (this.fliping2 == 'inactive') ? 'active' : 'inactive';
   
 }
 flip3(){
  this.isclick=this.isclick;
    this.fliping3 = (this.fliping3 == 'inactive') ? 'active' : 'inactive';
   
 }
 flip4(){
  this.isclick=this.isclick;
    this.fliping4 = (this.fliping4 == 'inactive') ? 'active' : 'inactive';
   
 }
 flip5(){
  this.isclick=this.isclick;
    this.fliping5 = (this.fliping5 == 'inactive') ? 'active' : 'inactive';
   
 }
 flip6(){
  this.isclick=this.isclick;
    this.fliping6 = (this.fliping6 == 'inactive') ? 'active' : 'inactive';
   
 }
 flip7(){
  this.isclick=this.isclick;
    this.fliping7 = (this.fliping7 == 'inactive') ? 'active' : 'inactive';
   
 }
 flip8(){
  this.isclick=this.isclick;
    this.fliping8 = (this.fliping8 == 'inactive') ? 'active' : 'inactive';
   
 }
 flip9(){
  this.isclick=this.isclick;
    this.fliping9 = (this.fliping9 == 'inactive') ? 'active' : 'inactive';
   
 }
action1(name: any) {
  if (this.inc1 == 0) {
    this.onclick1 = false;
    this.inc1 += 1;
    this.name1=name;

  }
  else if (this.inc1 == 1) {
    this.onclick1 = true;
    this.inc1 = 0;
    this.flip1();

  }
}

 action2(name:any){
  if (this.inc2 == 0) {
    this.onclick2 = false;
    this.inc2 += 1;
    this.name2=name;

  }
  else if (this.inc2 == 1) {
    this.onclick2 = true;
    this.inc2 = 0;
    this.flip2();

  }
 }
 action3(name:any){
  if (this.inc3 == 0) {
    this.onclick3 = false;
    this.inc3 += 1;
    this.name3=name;

  }
  else if (this.inc3 == 1) {
    this.onclick3 = true;
    this.inc3 = 0;
    this.flip3();

  }
 }
 action4(name:any){
  if (this.inc4 == 0) {
    this.onclick4 = false;
    this.inc4 += 1;
    this.name4=name;

  }
  else if (this.inc4 == 1) {
    this.onclick4 = true;
    this.inc4 = 0;
    this.flip4();

  }
 }
 action5(name:any){
  if (this.inc5 == 0) {
    this.onclick5 = false;
    this.inc5 += 1;
    this.name5=name;

  }
  else if (this.inc5 == 1) {
    this.onclick5 = true;
    this.inc5 = 0;
    this.flip5();

  }
 }
 action6(name:any){
  if (this.inc6 == 0) {
    this.onclick6 = false;
    this.inc6 += 1;
    this.name6=name;

  }
  else if (this.inc6 == 1) {
    this.onclick6 = true;
    this.inc6 = 0;
    this.flip6();

  }
 }
 action7(name:any){
  if (this.inc7 == 0) {
    this.onclick7 = false;
    this.inc7 += 1;
    this.name7=name;

  }
  else if (this.inc7 == 1) {
    this.onclick7 = true;
    this.inc7 = 0;
    this.flip7();

  }
 }
 action8(name:any){
  if (this.inc8 == 0) {
    this.onclick8 = false;
    this.inc8 += 1;
    this.name8=name;

  }
  else if (this.inc8 == 1) {
    this.onclick8 = true;
    this.inc8 = 0;
    this.flip8();

  }
 }
 action9(name:any){
  if (this.inc9 == 0) {
    this.onclick9 = false;
    this.inc9 += 1;
    this.name9=name;

  }
  else if (this.inc9 == 1) {
    this.onclick9 = true;
    this.inc9 = 0;
    this.flip9();

  }
 }


@ViewChild('pdfTable') pdfTable: ElementRef | undefined;
public convertToPDF() {
  let data = document.getElementById('target');
  html2canvas(data!).then(canvas => {
    let docWidth = 208;

    let docHeight = canvas.height * docWidth / canvas.width;
    const contentDataURL = canvas.toDataURL('image/png')
    let doc = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    doc.addImage(contentDataURL, 'png', 0, position, docWidth, docHeight) 
    doc.save('exportedPdf.pdf');


      });
}

}

