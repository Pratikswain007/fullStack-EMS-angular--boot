import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { CommonModule } from '@angular/common';
import { ParticipantService } from '../participant.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrl: './list-participant.component.css'
})
export class ListParticipantComponent implements OnInit {
  ngOnInit(): void {
   this.getParticipants();
  }
  participants: Participant[]=[];

  constructor(private participantService:ParticipantService,private router:Router) {}
     
  private getParticipants(){
      this.participantService.getParticipantList().subscribe(data=>{
        this.participants=data;
      });
     }

     updateParticipant(id:number){
      this.router.navigate(['/updateParticipant',id]);
     }

     deleteParticipant(id:number){
     this.participantService.deleteParticipant(id).subscribe(data=>{
      console.log(data); 
      this.getParticipants();
     })
    }
}
