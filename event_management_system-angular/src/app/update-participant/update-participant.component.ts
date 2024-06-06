import { Component } from '@angular/core';
import { ParticipantService } from '../participant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from '../participant';

@Component({
  selector: 'app-update-participant',
 
  templateUrl: './update-participant.component.html',
  styleUrl: './update-participant.component.css'
})
export class UpdateParticipantComponent {
  id: number=0;
  participant: Participant = new Participant();
  constructor(private participantService: ParticipantService,
    private route: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.participantService.updateParticipant(this.id,this.participant).subscribe(data => {
      this.participant = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.participantService.updateParticipant(this.id,this.participant).subscribe( data =>{
      this.goToParticipantList();
    }
    , (error: any) => console.log(error));
  }

  goToParticipantList(){
    this.router.navigate(['/get']);
  }
}

