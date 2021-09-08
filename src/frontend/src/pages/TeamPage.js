import {React} from 'react';
import MatchDetailCard from './../components/match-detail-card';
import MatchSmallCard from './../components/match-small-card';

export const  TeamPage = () => {
  return (
	<div className="team-page">
		<h1>Team Name</h1>
        <MatchDetailCard />
        <MatchSmallCard/>
        <MatchSmallCard/>
        <MatchSmallCard/>
	</div>
  );
}


