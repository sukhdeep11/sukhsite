import { Component, HostListener, OnInit } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  constructor() { }

  mountainValue;
  hillsValue;
  groundValue;
  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) scrollImages(e) {
    let value;
    let scrollValue = e.target['scrollingElement'].scrollTop;
    value = scrollValue - 1150;
    this.mountainValue = value * 0.6;
    this.hillsValue = value * 0.3;
    this.groundValue = value * -0.05;
    console.log(scrollValue);
  }



}
