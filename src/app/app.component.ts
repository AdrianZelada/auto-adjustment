import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'auto-adjustment';
  items: Array<any> = [
    {
      width:0,
      label:'12312312312'
    },
    {
      width:0,
      label:'ss'
    },
    {
      width:0,
      label:'2828288282828282929299292929'
    }
  ]

  @ViewChild('contentAdjustment') contentAdjustment: ElementRef;
  width :any = 0 ; 
  widthItems :any = 0 ; 

  constructor(){}

  ngAfterViewInit(){
    // console.log(this.items);
    console.log(this.contentAdjustment.nativeElement.clientWidth);
    
    setTimeout(() => {
      console.log(this.items);
      this.width = this.contentAdjustment.nativeElement.clientWidth;
      this.items.forEach((item: any) => {
        console.log(item)
        // this.widthItems += item.width;
        this.widthItems = this.widthItems + item.width;
      })

      console.log(this.widthItems)
    }, 2000);
  }
}
