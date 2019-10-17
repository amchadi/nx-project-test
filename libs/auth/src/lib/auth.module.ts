import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MaterialModule} from '@demo/material';
export const authRoutes: Route[] = [
  { path: 'login', component: LoginFormComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule,MaterialModule],
  declarations: [LoginFormComponent]
})
export class AuthModule {}
