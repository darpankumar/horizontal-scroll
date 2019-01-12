import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './../../node_modules/materialize-css/dist/css/materialize.min.css', '../jquery.easy_slides.css']
})
export class AppComponent implements AfterViewInit {
 
  currentSource ='3';
  @ViewChild('carousel') element :ElementRef;
  @ViewChildren('carouselItem') elements : [ElementRef]
  ngAfterViewInit() {

    $('.slider_four_in_line').EasySlides({
      'loop': false,
      'show': 6,
      'startslide': 3
  });
    
  }

  clicked(element){
    
    this.currentSource = element
  }
}
