import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'CardBody, nzm-card-body',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None
})
export class CardBody implements OnInit {

  @HostBinding('class.am-card-body') cardBodyWrapper: boolean = true;

  constructor() {}

  ngOnInit() {}

}
