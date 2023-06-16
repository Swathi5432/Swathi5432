import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  opened=false;

  @ViewChild("sidenavContainer", { static: false })

  sideNavContainer!: MatSidenavContainer;


ngAfterViewInit() {
  // calling updateContentMargins on next tick, fixes the spacing.
  setTimeout(() => {
    this.sideNavContainer.updateContentMargins();
  }, 0);

}
}
