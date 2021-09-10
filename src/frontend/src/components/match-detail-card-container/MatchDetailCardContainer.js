import {React} from 'react';
import MatchDetailCard from '../match-detail-card';

const MatchDetailCardContainer = ({team}) => {
    return (
    <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
    </div>
    )
}

export default MatchDetailCardContainer;