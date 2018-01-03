import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
registerLocaleData(localeEs);

@NgModule({
 imports: [
   BrowserModule,
   FormsModule,
   HttpModule
 ],
 declarations: [
   AppComponent,
   CapitalizadoPipe
  ],
 providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
 bootstrap: [ AppComponent ]
})

export class AppModule { }
