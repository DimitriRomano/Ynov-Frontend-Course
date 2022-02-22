import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoomServiceService } from '../room-service.service';
import { IRoom } from '../room.model';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent  {
  rooms!: IRoom[];
  roomSubscription !: Subscription;
  roomId : string = '';
  roomGuest : string =''; 

  constructor(private roomService : RoomServiceService) {  }



  addRoom(): void {
    if(this.roomId!= ''){
      const room  = {roomId : this.roomId,
                  guest : this.roomGuest}
      this.roomService.addRoom(room);

    }
  }

}
