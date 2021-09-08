import {React, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import MatchDetailCard from '../../components/match-detail-card';
import MatchSmallCard from '../../components/match-small-card';

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
            <h1>{team.teamName}</h1>
            <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
            {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} match={match} teamName={team.teamName}/>)}
        </div>
    );
}

export default TeamPage;


