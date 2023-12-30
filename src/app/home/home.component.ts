import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoMenuItem, PoToolbarAction } from '@portinari/portinari-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly body: string = 'XXX';

  profileActions: Array<PoToolbarAction> = [ { icon: 'po-icon-exit', label: 'Exit', type: 'danger',
  separator: true, action: item => this.router.navigate(['']) }
  ];
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClickHome.bind(this) },
    { label: 'Tarefas', action: this.onClick.bind(this) }
  ];

  private onClick() {
    this.router.navigate(['tarefas']) ;
  }

  private onClickHome() {
    this.router.navigate(['home']);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
