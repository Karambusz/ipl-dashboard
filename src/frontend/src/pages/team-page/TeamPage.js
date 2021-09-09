import {React, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import MatchDetailCard from '../../components/match-detail-card';
import MatchSmallCard from '../../components/match-small-card';
import {PieChart} from 'react-minimal-pie-chart';

import './TeamPage.scss';

const TeamPage = () => {

    const [team, setTeam] = useState({matches: [{}]});
    const {teamName} = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:9000/team/${teamName}`);
                const data = await response.json();
                setTeam(data);             
            };

            fetchMatches();
        }, [teamName]
    );

    if (!team || !team.teamName) {
        return <h1>Team not found</h1>
    }

    return (
        <div className="team-page">
            <div className="team-name-section">
                <h1 className="team-name">{team.teamName}</h1>
            </div>
            <div className="win-loss-section">
                Wins / Losses
                <PieChart
                    data = {[
                        {title: 'Losses', value: team.totalMatches - team.totalWins, color: '#a34d5d'},
                        {title: 'Wins', value: team.totalWins, color: '#4da375'}
                        ]
                    }
                />
            </div>
            <div className="match-detail-section">
                <h3>Latest Matches</h3>
                <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
            </div>
            {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} match={match} teamName={team.teamName}/>)}
            <div className="more-link">
                <a href="#">More &#8594;</a>
            </div>
        </div>
    );
}

export default TeamPage;


