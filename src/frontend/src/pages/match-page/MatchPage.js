import {React, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import MatchDetailCard from '../../components/match-detail-card';
import YearSelector from '../../components/year-selector';

import './MatchPage.scss';

const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data);          
            };

            fetchMatches();
        }, [teamName, year]
    );

    return (
        <div className="match-page">
            <div>
                <h1 className="page-heading">{teamName} matches in {year}</h1>
                {matches.length === 0 ? <h2>Team does not play matches in {year}</h2> :
                <>
                    {
                        matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)
                    }
                </>
                }
            </div>
            <div className="year-selector">
                <h3>Select year</h3>
                <YearSelector teamName={teamName}/>
            </div>
        </div>
    );
}

export default MatchPage;


