import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss']
})
export class FridgeComponent implements OnInit {
  bottleCount=10
  
  @Input() isAvailable !: boolean
  @Output() updateStock = new EventEmitter<number>()


  constructor() { }

  public takeBottle(): void{
    if(this.bottleCount>0){
      this.bottleCount --;
    }
    if(this.bottleCount <= 5) {
      this.updateStock.emit(this.bottleCount);
    }
  }

  ngOnInit(): void {
  }

}
