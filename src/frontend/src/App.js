import './App.css';
import TeamPage from './pages/team-page';
import MatchPage from './pages/match-page';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
	<div className="App">
		<Router>
			<Switch>
				<Route path="/teams/:teamName/matches/:year" component={MatchPage}/>
				<Route path="/teams/:teamName" component={TeamPage}/>
			</Switch>
		</Router>
	</div>
  );
}

export default App;
