
  import { Directive, ElementRef, OnInit, Input } from '@angular/core';

  @Directive({
    selector: '[appSlide]' // Attribute selector
  })
  
  export class SlideDirective implements OnInit {  
  
    @Input() resizableGrabWidth = 8;
    @Input() resizableMinWidth = 10;
  
    dragging = false;
  
    constructor(private el: ElementRef) {
  
      const self = this;
  
      const EventListenerMode = { capture: true };
  
      function preventGlobalMouseEvents() {
        //document.body.style['pointer-events'] = 'none';
       
      }
  
      function restoreGlobalMouseEvents() {
        //document.body.style['pointer-events'] = 'auto';
    
      }
  
      const newWidth = (wid: number) => {
        const newWidth = Math.max(this.resizableMinWidth, wid);
        el.nativeElement.style.width = (newWidth) + "px";
      }
  
      const mouseMoveG= (evt:any) => {
        if (!this.dragging) {
          return;
        }
        newWidth(evt.clientX - el.nativeElement.offsetLeft)
        evt.stopPropagation();
      };
  
      
  
      const mouseUpG = (evt:any) => {
        if (!this.dragging) {
          return;
        }
        restoreGlobalMouseEvents();
        this.dragging = false;
        evt.stopPropagation();
      };
  
      const mouseDown = (evt:any) => {
        if (this.inDragRegion(evt)) {
          this.dragging = true;
          preventGlobalMouseEvents();
          evt.stopPropagation();
        }
      };
  
      const mouseMove = (evt: any) => {
        if (this.inDragRegion(evt) || this.dragging) {
          el.nativeElement.style.cursor = "col-resize";
        } else {
          el.nativeElement.style.cursor = "default";
        }
      }
  
      document.addEventListener('mousemove', mouseMoveG, true);
      document.addEventListener('mouseup', mouseUpG, true);
      el.nativeElement.addEventListener('mousedown', mouseDown, true);
      el.nativeElement.addEventListener('mousemove', mouseMove, true);
    }
  
    ngOnInit(): void {
      this.el.nativeElement.style["border-right"] = this.resizableGrabWidth + "px solid darkgrey";
    }
  
    inDragRegion(evt:any) {
      return this.el.nativeElement.clientWidth - evt.clientX + this.el.nativeElement.offsetLeft < this.resizableGrabWidth;
    }
  
  }
  function navigateToFirst() {
    throw new Error('Function not implemented.');
  }
  
  
  