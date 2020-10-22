import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [HeaderComponent,NavigationComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,NavigationComponent]
})
export class LayoutModule { }
