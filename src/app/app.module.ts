import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
// import { HeaderComponent } from './modules/modules/layout/header/header.component';
// import { FooterComponent } from './modules/modules/layout/footer/footer.component';
// import { NavigationComponent } from './modules/modules/layout/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    // NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
