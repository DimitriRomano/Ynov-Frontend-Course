import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { FridgeComponent } from './fridge/fridge.component';
import { RoomServiceService } from './room-service.service';
import { AddRoomComponent } from './add-room/add-room.component';
import { CountRoomComponent } from './count-room/count-room.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    FridgeComponent,
    AddRoomComponent,
    CountRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RoomServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
