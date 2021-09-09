import {React} from 'react';
import {Link} from 'react-router-dom';

import "./MatchDetailCard.scss";

const MatchDetailCard = ({teamName, match}) => {
	const {team1, team2, date, venue, matchWinner, resultMargin, result} = match;
	const otherTeam = team1 === teamName ? team2 : team1;
	const otherTeamRoute = `/teams/${otherTeam}`;
	const isMatchWon = teamName === match.matchWinner;

	if (!match) return null;


	return (
		<div className={isMatchWon ? "match-detail-card won-card" : "match-detail-card lost-card"}>
			<div>
				<span className="vs">vs</span>
				<h1><Link to={otherTeamRoute}>
						{otherTeam}
					</Link>
				</h1>
				<h2 className="match-date">{date}</h2>
				<h3 className="match-venue">at {venue}</h3>
				<h3 className="match-result">{matchWinner} won by {resultMargin} {result}</h3>
			</div>
			<div className="additional-detail">
				<h3>First Innings</h3>
				<p>{match.team1}</p>
				<h3>Second Innings</h3>
				<p>{match.team2}</p>
				<h3>Man of the match</h3>
				<p>{match.playerOfMatch}</p>
				<h3>Umpires</h3>
				<p>{match.umpire1}, {match.umpire2}</p>
			</div>
		</div>
	);
}

export default MatchDetailCard;


