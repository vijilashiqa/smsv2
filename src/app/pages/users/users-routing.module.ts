import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { CancelshareComponent } from './cancelshare/cancelshare.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserhdcasComponent } from './userhdcas/userhdcas.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
    path: 'userlist',
    component: UserlistComponent,
    
  },
  {
    path: 'add-user',
    component:AddUserComponent,
    
  },
  {
    path: 'cancel-share',
    component: CancelshareComponent,
    
  },
  {
    path : 'edit-user',
    component : EditUserComponent
  },
{
  path : 'userhdcas',
  component : UserhdcasComponent


}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
