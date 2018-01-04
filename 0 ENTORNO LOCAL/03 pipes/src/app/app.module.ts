import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
registerLocaleData(localeEs);

@NgModule({
 imports: [
   BrowserModule,
   FormsModule,
   HttpModule
 ],
 declarations: [
   AppComponent,
   CapitalizadoPipe,
   DomseguroPipe,
   ContrasenaPipe
  ],
 providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
 bootstrap: [ AppComponent ]
})

export class AppModule { }
