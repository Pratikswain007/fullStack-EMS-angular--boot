import { Component } from '@angular/core';
import { Participant } from '../participant';
import { ParticipantService } from '../participant.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-create-participant',

  templateUrl: './create-participant.component.html',
  styleUrl: './create-participant.component.css'
})
export class CreateParticipantComponent {
  participant: Participant = new Participant();

constructor(private participantService:ParticipantService, private router:Router){}

  onSubmit() {
      this.participantService.addParticipants(this.participant).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/get']);
      });
    
  }
}
