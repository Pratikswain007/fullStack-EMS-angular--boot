package com.cglia.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cglia.ems.entity.Participant;

@Repository
public interface ParticipantRepository extends JpaRepository<Participant, Integer> {

}
