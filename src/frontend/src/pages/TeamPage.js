import {React, useEffect, useState} from 'react';
import MatchDetailCard from './../components/match-detail-card';
import MatchSmallCard from './../components/match-small-card';

export const  TeamPage = () => {

    const [team, setTeam] = useState({matches: [{}]});

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch('http://localhost:9000/team/Mumbai%20Indians');
                const data = await response.json();
                setTeam(data);               
            };

            fetchMatches();
        }, []
    );


    return (
        <div className="team-page">
            <h1>{team.teamName}</h1>
            <MatchDetailCard match={team.matches[0]}/>
            {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} match={match}/>)}
        </div>
    );
}


