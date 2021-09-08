import {React} from 'react';
import {Link} from 'react-router-dom';

const MatchDetailCard = ({teamName, match}) => {
	const {team1, team2, date, venue, matchWinner, resultMargin, result} = match;
	const otherTeam = team1 === teamName ? team2 : team1;
	const otherTeamRoute = `/teams/${otherTeam}`;
	if (!match) return null;


	return (
		<div className="match-detail-card">
			<h3>Latest Matches</h3>
			<h4>Match Details</h4>
			<h1>vs <Link to={otherTeamRoute}>
					{otherTeam}
				</Link>
			</h1>
			<h2>{date}</h2>
			<h3>at {venue}</h3>
			<h3>{matchWinner} won by {resultMargin} {result}</h3>
		</div>
	);
}

export default MatchDetailCard;


