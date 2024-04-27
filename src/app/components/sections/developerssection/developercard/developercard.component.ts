import { Component, Input } from '@angular/core';

interface IDeveloper {
  name: string;
  photo: string;
  description: string;
}

@Component({
  selector: 'app-developercard',
  standalone: true,
  imports: [],
  templateUrl: './developercard.component.html',
  styleUrl: './developercard.component.css',
})
export class DevelopercardComponent {
  @Input() developer!: IDeveloper;
}
