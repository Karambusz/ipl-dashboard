package com.example.ipldashboard.repository;

import com.example.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TeamRepository extends CrudRepository<Team, Long> {
    Optional<Team> findByTeamName(String teamName);
}
