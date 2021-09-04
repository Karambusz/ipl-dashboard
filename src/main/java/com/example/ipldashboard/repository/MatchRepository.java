package com.example.ipldashboard.repository;

import com.example.ipldashboard.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface MatchRepository extends JpaRepository<Team, Long> {

    @Query(value = "select m.team1, count(*) from Match m group by m.team1", nativeQuery = true)
    List<String[]> findAllTeam1Matches();

    @Query(value = "select m.team2, count(*) from Match m group by m.team2", nativeQuery = true)
    List<String[]> findAllTeam2Matches();

}
