import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerserviceService } from '../services/playerservice.service';
import { Player } from '../model/player';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrl: './playerdetails.component.css'
})
export class PlayerdetailsComponent {
  playerId: number=0;
  player: Player=new Player();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: PlayerserviceService) { }

    ngOnInit() {
      this.player = new Player();
  
      this. playerId = this.route.snapshot.params['playerId'];
      
      
      this.service.getOnePlayer(this.playerId).subscribe((data)=>{
        console.log(data);
        this.player=data;
      })


}

list(){
  this.router.navigate(['list']);
}
}
