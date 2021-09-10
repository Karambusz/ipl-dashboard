import {React, useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import MatchSmallCard from '../../components/match-small-card';
import CustomPieChart from '../../components/custom-pie-chart';

import './TeamPage.scss';
import MatchDetailCardContainer from '../../components/match-detail-card-container';

const TeamPage = () => {

    const [team, setTeam] = useState({matches: [{}]});
    const {teamName} = useParams();
    const [moreYear, setMoreYear] = useState(0);

    useEffect(
        () => {
            const fetchTeams = async () => {
                const response = await fetch(`http://localhost:9000/team/${teamName}`);
                const data = await response.json();
                setTeam(data);    
                setMoreYear(data.matches[0].date.split("-")[0]);     
            };

            fetchTeams();
        }, [teamName]
    );

    if (!team || !team.teamName) {
        return <h1>Team not found</h1>
    }

    return (
        <div className="team-page">
            <div className="team-name-section">
                <h2 className="team-name">{team.teamName}</h2>        
            </div>
            <CustomPieChart team={team}/>
            <MatchDetailCardContainer team={team}/>
            {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} match={match} teamName={team.teamName}/>)}
            <div className="more-link">
                <Link to={`/teams/${teamName}/matches/${moreYear}`}> 
                    More &#8594;
                </Link>
            </div>
        </div>
    );
}

export default TeamPage;


