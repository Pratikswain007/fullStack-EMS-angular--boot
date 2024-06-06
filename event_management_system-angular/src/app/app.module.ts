import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListParticipantComponent } from './list-participant/list-participant.component';
import { CreateParticipantComponent } from './create-participant/create-participant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';

@NgModule({
  declarations: [
    AppComponent,
    ListParticipantComponent,  // Declare your components here
    CreateParticipantComponent,
    UpdateParticipantComponent // Declare your components here
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AppModule { }
