import { Injectable } from '@angular/core';
import { IRoom } from './room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  public rooms: IRoom[] = [
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

  constructor() { 
   }
}
