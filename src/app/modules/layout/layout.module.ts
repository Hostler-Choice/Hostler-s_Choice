import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [HeaderComponent,NavigationComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,NavigationComponent]
})
export class LayoutModule { }
