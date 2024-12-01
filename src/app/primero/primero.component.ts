import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';


@Component({
  selector: 'app-primero',
  standalone: true,
  imports: [
    MatStepperModule,
  ],
  templateUrl: './primero.component.html',
  styleUrl: './primero.component.css'
})
export class PrimeroComponent {

}


