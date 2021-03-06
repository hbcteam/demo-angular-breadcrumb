import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AfricanCountriesComponent} from './african-countries/african-countries.component';
import {AfricaRoutingModule} from './africa-routing.module';
import {EgyptComponent} from './egypt/egypt.component';
import {CairoComponent} from './egypt/cairo/cairo.component';
import {GizaComponent} from './egypt/giza/giza.component';

@NgModule({
  declarations: [AfricanCountriesComponent, EgyptComponent, CairoComponent, GizaComponent],
  imports: [
    CommonModule,
    AfricaRoutingModule
  ]
})
export class AfricaModule { }
