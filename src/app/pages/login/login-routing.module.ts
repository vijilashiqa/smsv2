import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincComponent } from './loginc/loginc.component';

const routes: Routes = [

  { path :'loginc',component :LogincComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
