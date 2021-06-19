import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  onImageLoad() {
    console.log(" image loaded ")
  }

  toggle = false

  toggleSlide() {

    this.toggle = !this.toggle;
    console.log(this.toggle);

  }



  ngOnInit(): void {
  }

}

