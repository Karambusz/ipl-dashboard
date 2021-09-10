import {React, useEffect, useState} from 'react';
import TeamTile from '../../components/team-tile';
import './HomePage.scss';

const HomePage = () => {
    const [teams, setTeams] = useState([]);

    useEffect(
        () => {
            const fetchAllTeams = async () => {
                const response = await fetch(`http://localhost:9000/team`);
                const data = await response.json();
                setTeams(data);     
            };

            fetchAllTeams();
        }, []
    );

    return (
        <div className="home-page">
            <div className="team-grid">
                {
                    teams.map(team => <TeamTile key={team.id} teamName={team.teamName}/>)
                }
            </div>
        </div>
    )
};


export default HomePage;