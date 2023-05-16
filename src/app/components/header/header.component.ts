import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  isModalOpen = false;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  onLanguageChange(e: any) {
    console.log(e.target.value)
      this.translateService.use(e.target.value?e.target.value:"en");
  }

}
