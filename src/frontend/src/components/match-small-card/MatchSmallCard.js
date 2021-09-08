import {React} from 'react';
import {Link} from 'react-router-dom';

const MatchSmallCard = ({match, teamName}) => {
	const {matchWinner, resultMargin, result} = match;
	const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
	const otherTeamRoute = `/team/${otherTeam}`;
	return (
		<div className="match-small-card">
			<h3>vs <Link to={otherTeamRoute}>
					{otherTeam}
				   </Link>
			</h3>
			<p>{matchWinner} won by {resultMargin} {result}</p>
		</div>
	);
}

export default MatchSmallCard;


