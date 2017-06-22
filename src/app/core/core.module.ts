import { NgModule } from '@angular/core';
import { CoreServicesModule } from './core-services/core-services.module';

@NgModule({
  exports: [
    CoreServicesModule
  ]
})
export class CoreModule {
}
