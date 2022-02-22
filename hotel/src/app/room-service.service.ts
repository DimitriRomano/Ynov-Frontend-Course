import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { IRoom } from './room.model';

@Injectable({
  providedIn: 'root'
})


export class RoomServiceService {
  private rooms: IRoom[] = [
    {roomId:'23555',
    guest:'Dim'
  },
    {roomId:'565235',
    guest:''
  },
    {roomId:'6565',
    guest:'paul'}
    ,
    {roomId:'656',
    guest:'vic'}
  ];


  public rooms$ : BehaviorSubject<IRoom[]>;

  constructor() { 
    this.rooms$ = new BehaviorSubject<IRoom[]>(this.rooms);
   }


   addRoom(newRoom : IRoom){
     this.rooms.push(newRoom);
     this.rooms$.next(this.rooms);
   }

   deleteRoom(roomId : string){
     const id = this.rooms.findIndex((myRoom) => myRoom.roomId === roomId);
     this.rooms.splice(id,1);
     this.rooms$.next(this.rooms);
   }



  
}
