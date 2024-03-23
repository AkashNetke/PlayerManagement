import { Component } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerserviceService } from '../../services/playerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createplayer',
  templateUrl: './createplayer.component.html',
  styleUrl: './createplayer.component.css'
})
export class CreateplayerComponent {
  constructor(private service:PlayerserviceService,private router:Router){}


  player=new Player();
  submitted = false;
  onSubmit()
  {
    this.submitted=true;
    this.save();
  }

  save()
  {
    this.service.createPlayer(this.player).subscribe();

  }
}
