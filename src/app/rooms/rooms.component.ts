import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rooms',
  imports: [ReactiveFormsModule,RouterModule,FormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  constructor(public service: ApiService) {
    this.allRooms();
  }

  public rooms: any;

  public formInfo: FormGroup = new FormGroup({
    roomTypeId: new FormControl(),
    priceFrom: new FormControl(),
    priceTo: new FormControl(),
    maximumGuests: new FormControl(),
    checkIn: new FormControl(),
    checkOut: new FormControl(),
  });

  allRooms() {
    this.service.getAllRooms().subscribe((data: any) => {
      console.log(data);
      this.rooms = data;
    });
  }


  filterRooms() {
    console.log(this.formInfo.value);
    this.service.filterRooms(this.formInfo.value).subscribe( (data:any) => {
      console.log(data);
      this.rooms = data
    } )
  }

}
