import { Component, ViewEncapsulation, OnInit, Input, HostBinding } from '@angular/core';
import { Models } from '../date/DataTypes';
import { zh_CN, en_US } from '../../locale-provider/languages';

export interface PropsType {
  locale: Models.Locale;
  prefixCls?: string;
  pickerPrefixCls?: string;
  title?: string;
  defaultValue?: Date;
  value?: Date;
  onValueChange?: (time: Date) => void;
  mode?: string;
  minDate?: Date;
  maxDate?: Date;
  clientHeight?: number;
  datePickerViewLocale?: any;
}

@Component({
  selector: 'CalendarTimePicker, nzm-calendar-time-picker',
  templateUrl: './timepicker.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TimePickerComponent implements OnInit {
  defaultProps = {
    minDate: new Date(0, 0, 0, 0, 0),
    maxDate: new Date(9999, 11, 31, 23, 59, 59),
    defaultValue: new Date(2000, 1, 1, 8),
    mode: 'time',
    datePickerViewLocale: zh_CN
  } as PropsType;

  props = {
    minDate: new Date(0, 0, 0, 0, 0),
    maxDate: new Date(9999, 11, 31, 23, 59, 59),
    defaultValue: new Date(2000, 1, 1, 8),
    mode: 'time',
    datePickerViewLocale: zh_CN
  } as PropsType;

  selfHeight: string;

  @Input()
  set propsData(value) {
    this.props = {
      ...this.props,
      ...value
    };

    if (this.props.locale && this.props.locale.today === 'Today') {
      this.props.datePickerViewLocale = en_US;
    } else {
      this.props.datePickerViewLocale = zh_CN;
    }
  }
  @Input()
  set title(value) {
    this.props.title = value;
  }
  @Input()
  set value(value) {
    this.props.value = value;
  }
  @Input()
  set prefixCls(value) {
    this.props.prefixCls = value;
  }
  @Input()
  set defaultValue(value) {
    this.props.defaultValue = value;
  }
  @Input()
  set pickerPrefixCls(value) {
    this.props.pickerPrefixCls = value;
  }
  @Input()
  set clientHeight(value) {
    this.props.clientHeight = value;
    const height = (value && (value * 3) / 8 - 52) || Number.POSITIVE_INFINITY;
    this.selfHeight = (height > 164 || height < 0 ? 164 : height) + 'px';
  }
  @Input()
  set onValueChange(value) {
    this.props.onValueChange = value;
  }

  @HostBinding('class.time-picker') timePicker: boolean = true;

  constructor() {}

  onDateChange = (date: Date) => {
    const { onValueChange } = this.props;
    onValueChange && onValueChange(date);
  };

  getMinTime(date?: Date) {
    const minDate = this.props.minDate as Date;
    if (
      !date ||
      date.getFullYear() > minDate.getFullYear() ||
      date.getMonth() > minDate.getMonth() ||
      date.getDate() > minDate.getDate()
    ) {
      return this.defaultProps.minDate;
    }
    return minDate;
  }

  getMaxTime(date?: Date) {
    const maxDate = this.props.maxDate as Date;
    if (
      !date ||
      date.getFullYear() < maxDate.getFullYear() ||
      date.getMonth() < maxDate.getMonth() ||
      date.getDate() < maxDate.getDate()
    ) {
      return this.defaultProps.maxDate;
    }
    return maxDate;
  }

  ngOnInit() {}
}
