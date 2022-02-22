import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountRoomComponent } from './count-room.component';

describe('CountRoomComponent', () => {
  let component: CountRoomComponent;
  let fixture: ComponentFixture<CountRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
