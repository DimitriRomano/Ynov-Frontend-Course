import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoomServiceService } from '../room-service.service';
import { IRoom } from '../room.model';

@Component({
  selector: 'app-count-room',
  templateUrl: './count-room.component.html',
  styleUrls: ['./count-room.component.scss']
})
export class CountRoomComponent implements OnDestroy,OnInit {
  roomSubscription !: Subscription;
  rooms !: IRoom[]

  constructor(private roomService: RoomServiceService) { 
  }

  ngOnInit(): void {
      this.roomSubscription = this.roomService.rooms$.subscribe(
        (rooms)=>{
          this.rooms=rooms
           console.log(`${this.rooms.length}`);
           
         }
      )
  }

 

  ngOnDestroy(): void {
    if(this.roomSubscription){
      this.roomSubscription.unsubscribe();
    }
}

}
