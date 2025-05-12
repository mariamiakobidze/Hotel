import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usp-section',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './usp-section.component.html',
  styleUrl: './usp-section.component.css'
})
export class UspSectionComponent {

 cards: any = [
    {
      id: 1,
      icon: "fa-solid fa-martini-glass-empty",
      title: "Beverages included",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum."

    },
    {
      id: 2,
      icon: "fa-regular fa-credit-card",
      title: "Stay First, Pay After!",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum."

    },
    {
      id: 3,
      icon: "fa-solid fa-utensils",
      title: "24 Hour Restaurant",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum."

    },
    {
      id: 4,
      icon: "fa-solid fa-droplet",
      title: "Spa Included!",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum."

    },
  ]
}
