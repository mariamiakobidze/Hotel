import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotels',
  imports: [FormsModule,RouterModule,ReactiveFormsModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit {
  constructor(private http: ApiService) {}

 hotels: any = []


 ngOnInit(): void {
   this.getAllHotels()
 }

 getAllHotels() {
  this.http.gethotels().subscribe({
    next: (res) => this.hotels = res
  })
 }

}
