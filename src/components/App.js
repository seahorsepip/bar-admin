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
import HomePage from './HomePage';
import QuizPage from './Quiz/QuizPage';
import AddQuizPage from './Quiz/AddQuizPage';
import BarPage from './Bar/BarPage';
import MusicPage from './Music/MusicPage';
import QuestionPage from './Quiz/Question/QuestionPage';
import AddEventPage from "./Bar/Event/AddEventPage";
import EditEventPage from "./Bar/Event/EditEventPage";
import AddMusicPage from "./Music/AddMusicPage";
import LoginPage from './Auth/LoginPage';
import AddBarPage from './Bar/AddBarPage';

// Authorization
import requireAuth from '../utils/requireAuth';

class App extends Component {
  render() {
    return (
            <div>
                <MainLayout exact path="/" component={requireAuth(HomePage)} />
                <BlankLayout exact path="/login" component={LoginPage} />
                <MainLayout exact path="/quiz" component={requireAuth(QuizPage)} />
                <MainLayout exact path="/quiz/:id" component={requireAuth(QuestionPage)} />
                <MainLayout exact path="/quiz/new" component={requireAuth(AddQuizPage)} />
                <MainLayout exact path="/event/new" component={requireAuth(AddEventPage)}/>
                <MainLayout exact path="/event/edit/:eventId/" component={requireAuth(EditEventPage)}/>
                <MainLayout exact path="/quiz/edit/:id" component={requireAuth(AddQuizPage)} />
                <MainLayout exact path="/quiz/play/:id" component={"TODO"}/>
                <MainLayout exact path="/music" component={requireAuth(MusicPage)} />
                <MainLayout exact path="/music/new" component={requireAuth(AddMusicPage)}/>
                <MainLayout exact path="/bar" component={requireAuth(BarPage)} />
                <MainLayout exact path="/bar/new/:id" component={requireAuth(AddBarPage)} />
                <MainLayout exact path="/bar/events/new" component={requireAuth(AddEventPage)} />
            </div>
    );
  }
}

export default App;
