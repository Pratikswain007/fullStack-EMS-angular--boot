package com.cglia.ems.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cglia.ems.entity.Participant;
import com.cglia.ems.repository.ParticipantRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ParticipantController {
	@Autowired
	private ParticipantRepository participantRepository;

	@GetMapping("/participants")
	public List<Participant> getAllParticipants() {

		return participantRepository.findAll();
	}
	
	@GetMapping("/getParticipantById/{id}")
	public ResponseEntity<Participant> getParticipantById(@PathVariable Integer id) {
		Optional<Participant> data=participantRepository.findById(id);
		
		if(data.isPresent()) {
			return new ResponseEntity<>(data.get(),HttpStatus.OK);
		}
		return new ResponseEntity<>(data.get(),HttpStatus.NOT_FOUND);
	}
	   @PostMapping("/addParticipant")
	    public ResponseEntity<Participant> addParticipant(@RequestBody Participant Participant) {
	        try {
	            Participant ParticipantObj = participantRepository.save(Participant);
	            return new ResponseEntity<>(ParticipantObj, HttpStatus.CREATED);
	        } catch (Exception e) {
	            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }

	    @PostMapping("/updateParticipant/{id}")
	    public ResponseEntity<Participant> updateParticipant(@PathVariable Integer id, @RequestBody Participant Participant) {
	        try {
	            Optional<Participant> ParticipantData = participantRepository.findById(id);
	            if (ParticipantData.isPresent()) {
	                Participant updatedParticipantData = ParticipantData.get();
	                updatedParticipantData.setFirstName(Participant.getFirstName());
	                updatedParticipantData.setLastName(Participant.getLastName());
	                updatedParticipantData.setEmail(Participant.getEmail());
	                updatedParticipantData.setAddress(Participant.getAddress());
	                updatedParticipantData.setCollege(Participant.getCollege());

	                Participant ParticipantObj = participantRepository.save(updatedParticipantData);
	                return new ResponseEntity<>(ParticipantObj, HttpStatus.CREATED);
	            }

	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        } catch (Exception e) {
	            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }

	    @DeleteMapping("/deleteParticipant/{id}")
	    public ResponseEntity<HttpStatus> deleteParticipant(@PathVariable Integer id) {
	        try {
	            participantRepository.deleteById(id);
	            return new ResponseEntity<>(HttpStatus.OK);
	        } catch (Exception e) {
	            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }
	    @DeleteMapping("/deleteAllParticipants")
	    public ResponseEntity<HttpStatus> deleteAllParticipants() {
	        try {
	            participantRepository.deleteAll();
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        } catch (Exception e) {
	            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }
}