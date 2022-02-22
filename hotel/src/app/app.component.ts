import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoomServiceService } from './room-service.service';
import { IRoom } from './room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RoomServiceService]
})
export class AppComponent implements OnDestroy{
  title = 'hotel';
  rooms!: IRoom[];
  roomSubscription!: Subscription;

  constructor(private roomService: RoomServiceService){
    
     this.roomService.rooms$.subscribe(
       (rooms)=>{
          this.rooms=rooms;
        }
        
    );

  }

  ngOnDestroy(): void {
      if(this.roomSubscription){
        this.roomSubscription.unsubscribe();
      }
  }

}
