import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom'

// Components
import NavigationBar from './common/NavigationBar';
import SideNavigationBar from './common/SideNavigationBar';


//Layouts
import MainLayout from './common/MainLayout';
import BlankLayout from './common/BlankLayout';

// Pages
// Main
import HomePage from './HomePage';

//Bar & Events
import BarPage from './Bar/BarPage';
import AddEventPage from "./Bar/Event/AddEventPage";
import EditEventPage from "./Bar/Event/EditEventPage";
import EditBarPage from './Bar/EditBarPage';

//Music
import MusicPage from './Music/MusicPage';
import AddMusicPage from "./Music/AddMusicPage";
import Playlists from "./Music/Playlists";
import Playlist from "./Music/Playlist";
import Library from "./Music/Library";
import AddPlaylist from "./Music/AddPlaylist";
import EditPlaylist from "./Music/EditPlaylist";




// Authorization
import requireAuth from '../utils/requireAuth';
import LoginPage from './Auth/LoginPage';

//Quiz
import QuizPage from './Quiz/QuizPage';
import AddQuizPage from './Quiz/AddQuizPage';
import QuestionPage from './Quiz/Question/QuestionPage';


class App extends Component {
  render() {
    return (
		<div>
			<MainLayout exact path="/" component={requireAuth(HomePage)} />
			<BlankLayout exact path="/login" component={LoginPage} />
			<MainLayout exact path="/quiz" component={requireAuth(QuizPage)} />
			<MainLayout exact path="/quiz/new" component={requireAuth(AddQuizPage)} />
			<MainLayout exact path="/quiz/id/:id" component={requireAuth(QuestionPage)} />
			<MainLayout exact path="/quiz/edit/:id" component={requireAuth(AddQuizPage)} />
			<MainLayout exact path="/quiz/play/:id" component={"TODO"}/>
			<MainLayout exact path="/event/new" component={requireAuth(AddEventPage)}/>
			<MainLayout exact path="/event/edit/:eventId/" component={requireAuth(EditEventPage)}/>
			<MainLayout exact path="/music" component={requireAuth(MusicPage)} />
			<MainLayout exact path="/music/new" component={requireAuth(AddMusicPage)}/>
			<MainLayout exact path="/music/playlists" component={requireAuth(Playlists)}/>
			<MainLayout exact path="/music/library" component={requireAuth(Library)}/>
			<MainLayout exact path="/music/playlist/:id" component={requireAuth(Playlist)}/>
			<MainLayout exact path="/music/addplaylist" component={requireAuth(AddPlaylist)}/>
			<MainLayout exact path="/music/editplaylist/:id" component={requireAuth(EditPlaylist)}/>
			<MainLayout exact path="/bar" component={requireAuth(BarPage)} />
			<MainLayout exact path="/bar/new/:id" component={requireAuth(EditBarPage)} />
			<MainLayout exact path="/bar/new/:id/:method" component={requireAuth(EditBarPage)} />
			<MainLayout exact path="/event/new" component={requireAuth(AddEventPage)} />
			<MainLayout exact path="/event/edit/:eventId" component={requireAuth(EditEventPage)} />
		</div>

    );
  }
}

export default App;
