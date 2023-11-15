import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { FormCharacterComponent } from './components/form-character/form-character.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    MainPageComponent,
    FormCharacterComponent,
    ListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
