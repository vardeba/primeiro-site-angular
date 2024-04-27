import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DevelopercardComponent } from './developercard/developercard.component';

@Component({
  selector: 'app-developerssection',
  standalone: true,
  imports: [CommonModule, DevelopercardComponent],
  templateUrl: './developerssection.component.html',
  styleUrl: './developerssection.component.css',
})
export class DeveloperssectionComponent {
  developerList = [
    {
      name: 'Josefine',
      photo: 'assets/Developer1.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      name: 'Rudolf',
      photo: 'assets/Developer2.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      name: 'Lucy',
      photo: 'assets/Developer3.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      name: 'Robert',
      photo: 'assets/Developer4.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
  ];
}
