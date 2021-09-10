import {React, useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import MatchDetailCard from '../../components/match-detail-card';
import MatchSmallCard from '../../components/match-small-card';
import {PieChart} from 'react-minimal-pie-chart';

import './TeamPage.scss';

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
                <div className="title-wrapper">
                    <h1 className="title">
                        <Link to="/">
                            IPL Dashboard
                        </Link>
                    </h1>
                </div>
                <div className="team-name-wrapper">
                    <h2 className="team-name">{team.teamName}</h2>
                </div>
                
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
                <Link to={`/teams/${teamName}/matches/${moreYear}`}> 
                    More &#8594;
                </Link>
            </div>
        </div>
    );
}

export default TeamPage;


