import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homecards',
  imports: [FormsModule,RouterModule,ReactiveFormsModule],
  templateUrl: './homecards.component.html',
  styleUrl: './homecards.component.css'
})
export class HomecardsComponent {

constructor(private http: ApiService) {}

  favouriteRooms: any = []


  ngOnInit(): void {
    this.getFavRooms()
  }

  getFavRooms() {
  this.http.getAllRooms().subscribe((res) => {
    this.favouriteRooms =((item:any) => {
      return item.id <= 6;
      
    })
  })
}


  }
