import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { InitCapsPipe, TruncatePipe } from './pipes';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    InitCapsPipe,
    TruncatePipe
  ],
  exports: [
    InitCapsPipe,
    TruncatePipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
