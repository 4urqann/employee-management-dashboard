import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EmpTileComponent } from './components/emp-tile/emp-tile.component';
import { MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';
import { MatOption } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';

const AngMaterial = [
  MatDialogContent,
  MatDialogModule,
  MatDialogActions,
  MatCard,
  MatCardTitle,
  MatCardActions,
  MatCardContent,
  MatFormFieldModule,
  MatOption,
  MatSelectModule
]

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit', component: FormComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    EmpTileComponent,
    FormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AngMaterial,
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
