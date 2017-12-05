import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom'

// Components
import NavigationBar from './common/NavigationBar';
import SideNavigationBar from './common/SideNavigationBar';


import EditBarPage from './Bar/EditBarPage';

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

//Music
import MusicPage from './Music/MusicPage';
import AddMusicPage from "./Music/AddMusicPage";

import LoginPage from './Auth/LoginPage';

// Authorization
import requireAuth from '../utils/requireAuth';
import Playlists from "./Music/Playlists";
import Playlist from "./Music/Playlist";
import Library from "./Music/Library";
import AddPlaylist from "./Music/AddPlaylist";
import EditPlaylist from "./Music/EditPlaylist";

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
			<MainLayout exact path="/bar" component={requireAuth(BarPage)} />
			<MainLayout exact path="/bar/events/new" component={requireAuth(AddEventPage)} />
		</div>

    );
  }
}

export default App;
