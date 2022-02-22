import { Component, Input, OnInit } from '@angular/core';
import { RoomServiceService } from '../room-service.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @Input() roomId = '235'
  isDoNotDisturb = false
  @Input() guest = "Dimitri"
  fridgeIsAvailable = false;

  constructor(private roomService : RoomServiceService) {
  }

  public sayKnock() {
    console.log("Knock knock " + this.guest);
  }

  public changeKnock() {
    this.isDoNotDisturb=!this.isDoNotDisturb;
  }

  public updateRoomStock(stockBottle : number){
      console.log("attention il vous reste que "+ stockBottle +" bouteilles"); 
  }

  ngOnInit(): void {
  }

  deleteRoom(){
    this.roomService.deleteRoom(this.roomId)
  }

}
