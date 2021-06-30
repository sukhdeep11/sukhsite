import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snap',
  templateUrl: './snap.component.html',
  styleUrls: ['./snap.component.css']
})
export class SnapComponent implements OnInit {

  constructor() { }

  snap = 0;

  letsSnap() {

    // this.snap = !this.snap;


    if (this.snap == 2) {
      this.snap = this.snap + 1;;
      console.log(this.snap);
    }
    else {
      this.snap = this.snap + 1;
      console.log(this.snap);
    }
  }

  ngOnInit(): void {
  }

}
