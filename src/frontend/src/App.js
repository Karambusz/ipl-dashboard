import './App.css';
import HomePage from './pages/home-page';
import TeamPage from './pages/team-page';
import MatchPage from './pages/match-page';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';



function App() {
  return (
	<div className="App">
		<Router>
			<h1 className="title">
				<Link to="/">
					IPL Dashboard
				</Link>
			</h1>
			<Switch>
				<Route path="/teams/:teamName/matches/:year" component={MatchPage}/>
				<Route path="/teams/:teamName" component={TeamPage}/>
				<Route path="/" component={HomePage}/>
			</Switch>
		</Router>
	</div>
  );
}

export default App;
