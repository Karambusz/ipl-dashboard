import {React} from 'react';

const MatchDetailCard = ({match}) => {
  if (!match) return null;
  return (
	<div className="match-detail-card">
		<h3>Latest Matches</h3>
    <h4>Match Details</h4>
    <h4>{match.team1} vs {match.team2}</h4>
	</div>
  );
}

export default MatchDetailCard;


