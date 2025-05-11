import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PictureComponent } from "../picture/picture.component";
import { HomecardsComponent } from "../homecards/homecards.component";
import { UspSectionComponent } from "../usp-section/usp-section.component";

@Component({
  selector: 'app-home',
  imports: [ PictureComponent, HomecardsComponent, UspSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
 
}
