import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
