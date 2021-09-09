import {React} from 'react';
import {Link} from 'react-router-dom';
import './MatchSmallCard.scss';

const MatchSmallCard = ({match, teamName}) => {
	const {matchWinner, resultMargin, result} = match;
	const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
	const otherTeamRoute = `/teams/${otherTeam}`;
	const isMatchWon = teamName === match.matchWinner;


	return (
		<div className= {isMatchWon ? "match-small-card won-card" : "match-small-card lost-card"}>
			<span className="vs">vs</span>
			<h3><Link to={otherTeamRoute}>
					{otherTeam}
				   </Link>
			</h3>
			<p className="match-result">{matchWinner} won by {resultMargin} {result}</p>
		</div>
	);
}

export default MatchSmallCard;


