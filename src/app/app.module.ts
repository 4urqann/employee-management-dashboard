import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { MatCard, MatCardTitle, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatDialogContent, MatDialogModule, MatDialogActions } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    AngMaterial
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
