import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from './room-service.service';
import { IRoom } from './room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RoomServiceService]
})
export class AppComponent {
  title = 'hotel';
  rooms: IRoom[];

  constructor(private roomService: RoomServiceService){
    
    this.rooms = this.roomService.rooms
  }

}
