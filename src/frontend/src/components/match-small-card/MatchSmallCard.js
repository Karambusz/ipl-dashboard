import {React} from 'react';

const MatchSmallCard = ({match}) => {
  return (
	<div className="match-small-card">
		<p>{match.team1} vs {match.team2}</p>
	</div>
  );
}

export default MatchSmallCard;


