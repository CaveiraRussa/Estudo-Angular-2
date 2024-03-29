import { SignInComponent } from './signin/signin.component';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [SignInComponent],
    imports: [ CommonModule,ReactiveFormsModule, VMessageModule, RouterModule ]
})
export class HomeModule{}