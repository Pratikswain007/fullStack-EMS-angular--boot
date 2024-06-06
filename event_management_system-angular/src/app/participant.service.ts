import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Participant } from './participant';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
    private baseUrl="http://localhost:8095";
  constructor(private httpClient:HttpClient) { }

  getParticipantList():Observable<Participant[]>{
    return this.httpClient.get<Participant[]>(`${this.baseUrl}/participants`)    
  }

  addParticipants(participant:Participant):Observable<Participant>{
    return this.httpClient.post<Participant>(`${this.baseUrl}/addParticipant`,participant)   
  }

  getParticipantById(id:number):Observable<Participant>{
    return this.httpClient.post<Participant>(`${this.baseUrl}${id}/getParticipantById`,id)  
  }

  updateParticipant(id:number,participant:Participant):Observable<Participant>{
    return this.httpClient.post<Participant>(`${this.baseUrl}/updateParticipant/${id}`,participant)   
  }
    deleteParticipant(id:number):Observable<Participant>{
      return this.httpClient.delete<Participant>(`${this.baseUrl}/deleteParticipant/${id}`);  
}
}