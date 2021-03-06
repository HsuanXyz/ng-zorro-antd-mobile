import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { formatDate } from '../util/index';
import { Models } from '../date/DataTypes';

export interface ConfirmPanelPropsType {
  type?: 'one' | 'range';
  locale: Models.Locale;
  onlyConfirm?: boolean;
  disableBtn?: boolean;
  startDateTime?: Date;
  endDateTime?: Date;
  formatStr?: string;
  onConfirm: () => void;
}

@Component({
  selector: 'CalendarConfirmPanel, nzm-calendar-confirm-panel',
  templateUrl: './confirm-panel.component.html',
  encapsulation: ViewEncapsulation.None
})

export class ConfirmPanelComponent {
  props = {
    formatStr: 'yyyy-MM-dd hh:mm'
  } as ConfirmPanelPropsType;
  startTimeStr: string;
  endTimeStr: string;
  btnCls: string;

  @Input()
  set propsData(value) {
    this.props = {
      ...this.props,
      ...value
    };
  }
  @Input()
  set disableBtn(value) {
    this.props.disableBtn = value;
  }
  @Input()
  set formatStr(value) {
    this.props.formatStr = value;
  }
  @Input()
  set startDateTime(value) {
    this.props.startDateTime = value;
    this.formatTime();
  }
  @Input()
  set endDateTime(value) {
    this.props.endDateTime = value;
    this.formatTime();
  }
  @Input()
  set onConfirm(value) {
    this.props.onConfirm = value;
  }

  @HostBinding('class.confirm-panel') confirmPane: boolean = true;

  constructor() {}

  formatTime() {
    const { type, locale, disableBtn } = this.props;
    let { startDateTime, endDateTime } = this.props;
    if (startDateTime && endDateTime && +startDateTime > +endDateTime) {
      const tmp = startDateTime;
      startDateTime = endDateTime;
      endDateTime = tmp;
    }

    this.startTimeStr = startDateTime ? this.selfFormatDate(startDateTime) : locale.noChoose;
    this.endTimeStr = endDateTime ? this.selfFormatDate(endDateTime) : locale.noChoose;
    let btnCls = disableBtn ? 'button button-disable' : 'button';
    if (type === 'one') {
      btnCls += ' button-full';
    }
    this.btnCls = btnCls;
  }

  triggerConfirm = () => {
    const { onConfirm, disableBtn } = this.props;
    !disableBtn && onConfirm();
  }

  selfFormatDate(date: Date) {
    const { formatStr = '', locale } = this.props;
    return formatDate(date, formatStr, locale);
  }
}
