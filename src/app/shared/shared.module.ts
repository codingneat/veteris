import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [ 
    CommonModule
  ],
  exports: [ 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,   
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
