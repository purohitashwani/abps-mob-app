import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrimony-list',
  templateUrl: './matrimony-list.component.html',
  styleUrls: ['./matrimony-list.component.scss'],
})
export class MatrimonyListComponent  implements OnInit {

  isGroomBrideActive: string = "Groom";

  constructor() { }

  ngOnInit() {}

  activeTab(val: any) {
    this.isGroomBrideActive = val.detail.value
  }

}
