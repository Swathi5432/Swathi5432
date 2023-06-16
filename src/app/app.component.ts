import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';


// import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'appleStore';
  hide:any;
  display:boolean=false;
  scrolling:any;
  scrolltop:any;
  opened=false;
  router: any;
Breakpoints = Breakpoints;
currentBreakpoint:string = '';
readonly breakpoint$ = this.breakpointObserver

  .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)'])
  .pipe(
    tap(value => console.log(value)),
    distinctUntilChanged()
  );

  font: boolean=false;
  eventPhase: number=0;


constructor(private breakpointObserver: BreakpointObserver, private translateService: TranslateService) {
 
}



  ngOnInit(): void {
  this.breakpoint$.subscribe(() =>
    this.breakpointChanged()
  );

}
public selectLanguage(event:any)
{
  console.log(event.target.value)
  this.translateService.use(event.target.value);
  if(event.target.value==='tel'){
      this.font=true 
     }
     if(event.target.value==='en-UK'){
      this.font=false
     }
     if(event.target.value==='hin'){
      this.font=true 
     }
     
}

 

private breakpointChanged() {
  if(this.breakpointObserver.isMatched(Breakpoints.Large)) {
    this.hide=false;
    this.currentBreakpoint = Breakpoints.Large;
  } else if(this.breakpointObserver.isMatched(Breakpoints.Medium)) {
    this.hide=true;
    this.currentBreakpoint = Breakpoints.Medium;
  } else if(this.breakpointObserver.isMatched(Breakpoints.Small)) {
    this.hide=true;
    this.currentBreakpoint = Breakpoints.Small;
  } else if(this.breakpointObserver.isMatched('(min-width: 500px)')) {
    this.hide=true;
    this.currentBreakpoint = '(min-width: 500px)';
  }
}
scroll(el: HTMLElement) {
  el.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
  });
 
}

scrollToTop(el: HTMLElement) {
  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
  this.display=false;
}

scrollposition(el:HTMLElement){
 this.scrolling=el.onscroll
 console.log(this.scrolling);

}



}



