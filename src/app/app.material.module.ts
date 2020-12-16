import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
/* import {MatOptionModule} from '@angular/material/' */
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule } from '@angular/material/tooltip';

const material = [    MatButtonModule,
                      MatCardModule,
                      MatDialogModule,
                      MatFormFieldModule,
                      MatIconModule,
                      MatInputModule,
                      MatListModule,
            /*           MatOptionModule, */
                      MatProgressBarModule,
                      MatSelectModule,
                      MatSnackBarModule,
                      MatToolbarModule,
                      MatTooltipModule]

@NgModule({
  imports: [CommonModule, ...material ],
  exports: [...material ]
  
})
export class AppMaterialModule { }
