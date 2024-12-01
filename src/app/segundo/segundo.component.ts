import {MatChipsModule} from '@angular/material/chips';
import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterOutlet, RouterLink,RouterLinkActive } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';

import {MatDialogModule} from '@angular/material/dialog';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-segundo',
  standalone: true,
  imports: [RouterOutlet,
    MatChipsModule, 
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatMenuModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSliderModule,
],
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent {
}

  export class StepperOverviewExample {
    private _formBuilder = inject(FormBuilder);
  
    firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    isLinear = false;
  }
  
  export class BottomSheetOverviewExample {
    private _bottomSheet = inject(MatBottomSheet);
  
    openBottomSheet(): void {
      this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
  }
  
  export class BottomSheetOverviewExampleSheet {
    private _bottomSheetRef =
      inject<MatBottomSheetRef<BottomSheetOverviewExampleSheet>>(MatBottomSheetRef);
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }
  }
  


