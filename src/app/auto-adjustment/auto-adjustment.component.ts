import { Component, OnInit, Input, AfterContentInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auto-adjustment',
  template: `<button #idbutton>{{label}}</button>`,
  styleUrls: ['./auto-adjustment.component.scss']
})
export class AutoAdjustmentComponent implements OnInit, AfterViewInit {

  // @Input() aWidth: string = '';
  private width: string='';
  @ViewChild('idbutton') idbutton: ElementRef; 
  @Input() label: string= '';
  // @Input() set aWidth(w){
  //   console.log('w ', w )
  //   this.width = w;
  // }
  // get(){
  //   return this.width;
  // }

  @Input() private aWidth: string = '';
  @Output() public aWidthChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit")
    console.dir(this.idbutton.nativeElement.clientWidth);
    setTimeout(() => {
      this.aWidthChange.emit(this.idbutton.nativeElement.clientWidth);
    }, 10)
    
  }
}
