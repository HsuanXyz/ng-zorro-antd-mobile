import { Component, OnInit } from '@angular/core';
import { Toast } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'demo-input-item-basic',
  template: `
    <div class="am-demo-page">
      <div style="padding: 15px;font-size: 16px; color:#000">Basic</div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Money input</div>
        <div class="am-list-body">
          <InputItem [type]="'money'"
                     [clear]="true"
                     [placeholder]="'start from left'"
                     [moneyKeyboardAlign]="'left'"
          >光标在左</InputItem>
          <InputItem [type]="'money'"
                     [clear]="true"
                     [placeholder]="'start from rigth'"
          >光标在右</InputItem>
          <InputItem [type]="'money'"
                     [clear]="true"
                     [placeholder]="'money format'"
                     [focus]="numberFocus"
          >数字键盘</InputItem>
          <div class="am-list-item am-list-item-middle">
            <div class="am-list-line">
              <div class="am-list-content"
                   style="width:100%;color:#108ee9;text-align:center"
                   (click)="clickFocus()"
              >click to focus</div>
            </div>
            <div class="am-list-ripple" style="display: none;"></div>
          </div>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
          <div class="am-list-header">Customize to focus</div>
          <div class="am-list-body">
            <InputItem [clear]="true"
                       [placeholder]="'auto focus'"
                       [focus]="autoFocus"
            >标题</InputItem>
            <InputItem [clear]="true"
                       [placeholder]="'click the button below to focus'"
                       [focus]="inputFocus"
            >标题</InputItem>
            <div class="am-list-item am-list-item-middle">
              <div class="am-list-line">
                <div class="am-list-content"
                     style="width:100%;color:#108ee9;text-align:center"
                     (click)="clickFocusInput()"
                >click to focus</div>
              </div>
              <div class="am-list-ripple" style="display: none;"></div>
            </div>
          </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Click label to focus input</div>
        <div class="am-list-body">
          <InputItem [placeholder]="'Click label to focus input'" [focus]="titleFocus">
            <span (click)="clickTitle()">标题</span>
          </InputItem>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Show clear</div>
        <div class="am-list-body">
          <InputItem [clear]="true" [placeholder]="'displayed clear while typing'">标题</InputItem>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Number of words for the title</div>
        <div class="am-list-body">
          <InputItem [clear]="true"
                     [labelNumber]="5"
                     [placeholder]="'limited title length'"
          >标题过长超过5个字符</InputItem>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Custom title（text / image / empty)</div>
        <div class="am-list-body">
          <InputItem [placeholder]="'no label'"></InputItem>
          <InputItem [placeholder]="'title can be icon，image or text'">
            <div style="background-image:url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png); background-size:cover;height:22px; width: 22px "></div>
          </InputItem>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Customize the extra content in the right</div>
        <div class="am-list-body">
          <InputItem [placeholder]="'0.00'" [extra]="'¥'">价格</InputItem>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Format</div>
        <div class="am-list-body">
          <InputItem [type]="'bankCard'" [defaultValue]="'8888 8888 8888 8888'">银行卡</InputItem>
          <InputItem [type]="'phone'" [placeholder]="'186 1234 1234'" (onChange)="inputChange($event)">手机号码</InputItem>
          <InputItem [type]="'password'" [placeholder]="'****'">密码</InputItem>
          <InputItem [type]="'number'" [placeholder]="'click to show number keyboard'">数字键盘</InputItem>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Not editable / Disabled</div>
        <div class="am-list-body">
          <InputItem [editable]="false" [value]="'not editable'">姓名</InputItem>
          <InputItem [disabled]="true" [value]="'style of disabled InputItem'">姓名</InputItem>
        </div>
      </div>
      <div class="am-list" style="margin:0;">
        <div class="am-list-header">Confirm when typing</div>
        <div class="am-list-body">
          <InputItem [type]="'phone'"
                     [placeholder]="'input your phone'"
                     [value]="value"
                     [error]="error"
                     (onErrorClick)="inputErrorClick($event)"
                     (onChange)="inputChange($event)"
          >手机号码</InputItem>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .am-list-body {
        position: relative;
        background-color: #fff;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
      }
      .am-list-header {
        padding: 15px 15px 9px 15px;
        font-size: 14px;
        color: #888;
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      /deep/ .am-list-body InputItem:not(:last-child) .am-list-line {
        border-bottom: 1px solid #ddd;
      }

      .am-list-item .am-list-line .am-list-content {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        color: #000;
        font-size: 17px;
        line-height: 1.5;
        text-align: left;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-top: 7px;
        padding-bottom: 7px;
      }
    `
  ]
})
export class DemoInputItemBasicComponent implements OnInit {
  value = '';
  error = false;
  numberFocus = {
    focus: false,
    date: new Date()
  };
  inputFocus = {
    focus: false,
    date: new Date()
  };

  titleFocus = {
    focus: false,
    date: new Date()
  };
  autoFocus = { focus: true, date: new Date() };

  constructor(private _toast: Toast) {}

  inputErrorClick(e) {
    Toast.info('Please enter 11 digits');
  }

  inputChange(e) {
    const value = e.replace(/\s/g, '');
    if (value.length < 11 && value.length > 0) {
      this.error = true;
    } else {
      this.error = false;
    }
    this.value = e;
  }

  clickFocus() {
    this.numberFocus = {
      focus: true,
      date: new Date()
    };
  }

  clickFocusInput() {
    this.inputFocus = {
      focus: true,
      date: new Date()
    };
  }

  clickTitle() {
    this.titleFocus = {
      focus: true,
      date: new Date()
    };
  }
  ngOnInit() {}
}