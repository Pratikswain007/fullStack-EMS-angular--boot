import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListParticipantComponent } from './list-participant/list-participant.component';
import { CreateParticipantComponent } from './create-participant/create-participant.component';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';

const routes: Routes = [
  {path:'get',component:ListParticipantComponent},
  {path:'',redirectTo:'get',pathMatch:'full'},
  {path:'addParticipant',component:CreateParticipantComponent},
  {path:'updateParticipant/:id',component:UpdateParticipantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
