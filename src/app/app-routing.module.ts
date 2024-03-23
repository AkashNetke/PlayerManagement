import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateplayerComponent } from './component/createplayer/createplayer.component';
import { PlayerlistComponent } from './component/playerlist/playerlist.component';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
import { UpdateplayerComponent } from './component/updateplayer/updateplayer.component';

const routes: Routes = [
  {
    path:"add",
    component:CreateplayerComponent
  },
  {
    path:"list",
    component:PlayerlistComponent
  },
  
    {
      path:"details/:playerId",
      component:PlayerdetailsComponent
    },
    {
      path:"update/:playerId",
      component:UpdateplayerComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
