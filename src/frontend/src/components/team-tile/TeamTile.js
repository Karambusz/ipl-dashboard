import {React} from 'react';
import {Link} from 'react-router-dom';
import './TeamTile.scss';

const TeamTile = ({teamName}) => {
    return (
        <div className="team-tile">
            <h1>
                <Link to={`/teams/${teamName}`}>
                {teamName}
                </Link>
            </h1>
        </div>
    )
};

export default TeamTile;