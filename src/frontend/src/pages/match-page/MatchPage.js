import {React, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import MatchDetailCard from '../../components/match-detail-card';

const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:9000/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data);          
            };

            fetchMatches();
        }, [teamName, year]
    );

    return (
        <div className="team-page">
            <h1>Match Page</h1>
            {
                matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)
            }
        </div>
    );
}

export default MatchPage;


