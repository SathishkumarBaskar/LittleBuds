import { Component,OnInit,Renderer2,ViewChild,ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //private _router: Subscription;
  @ViewChild(AppComponent) navbar: AppComponent;
  

  constructor( private renderer : Renderer2,private element : ElementRef ){}
  ngOnInit() {
          var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
      // //this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      //     if (window.outerWidth > 991) {
      //         window.document.children[0].scrollTop = 0;
      //     }else{
      //         window.document.activeElement.scrollTop = 0;
      //     }

          this.renderer.listen('window', 'scroll', (event) => {
              const number = window.scrollY;
              //var _location = this.location.path();
              //_location = _location.split('/')[2];

              if (number > 1 || window.pageYOffset > 1) {
                  navbar.classList.add('top-nav-collapse');
              } 
              else {
                  // remove logic
                  navbar.classList.remove('top-nav-collapse');
              }
          });
      //});
  }
}
