package com.example.ipldashboard.data;

import com.example.ipldashboard.model.Team;
import com.example.ipldashboard.repository.MatchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.Map;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

    private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

    private final EntityManager entityManager;
    private final MatchRepository matchRepository;

    @Autowired
    public JobCompletionNotificationListener(EntityManager entityManager, MatchRepository matchRepository) {
        this.entityManager = entityManager;
        this.matchRepository = matchRepository;
    }

    @Override
    @Transactional
    public void afterJob(JobExecution jobExecution) {
        Map<String, Team> teamData = new HashMap<>();
        if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
            log.info("!!! JOB FINISHED! Time to verify the results");

            matchRepository.findAllTeam1Matches()
            .stream()
            .map(element -> new Team(element[0], Long.valueOf(element[1])))
            .forEach(team -> teamData.put(team.getTeamName(), team));


            matchRepository.findAllTeam2Matches()
            .forEach(element -> {
                Team team = teamData.get(element[0]);
                team.setTotalMatches(team.getTotalMatches() + Long.parseLong(element[1]));
            });

            entityManager.createQuery("select m.matchWinner, count (*) from Match m group by m.matchWinner", Object[].class)
                .getResultList()
                .forEach(element -> {
                    Team team = teamData.get(element[0]);
                    if (team != null)
                        team.setTotalWins((Long) element[1]);
                });

            teamData.values()
                    .forEach(entityManager::persist);
            teamData.values()
                    .forEach(System.out::println);
        }
    }
}
