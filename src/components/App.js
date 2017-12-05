import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom'

// Components
import NavigationBar from './common/NavigationBar';
import SideNavigationBar from './common/SideNavigationBar';
import AddBarPage from './Bar/AddBarPage';


// Pages
import HomePage from './HomePage';
import QuizPage from './Quiz/QuizPage';
import AddQuizPage from './Quiz/AddQuizPage';
import BarPage from './Bar/BarPage';
import MusicPage from './Music/MusicPage';
import QuestionPage from './Quiz/Question/QuestionPage';
import {AddEventPage} from "./Bar/Event/AddEventPage";
import {EditEventPage} from "./Bar/Event/EditEventPage";
import AddMusicPage from "./Music/AddMusicPage";
import Playlists from "./Music/Playlists";
import Playlist from "./Music/Playlist";
import Library from "./Music/Library";
import AddPlaylist from "./Music/AddPlaylist";
import EditPlaylist from "./Music/EditPlaylist";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Container fluid>
            <main>
              <Row>
                <Col sm="3" md="2" xl="1" className="sidebar">
                  <SideNavigationBar />
                </Col>
                <Col sm="9" md="10" xl="11" className="ml-sm-auto p-4">
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/quiz" component={QuizPage} />
                  <Route exact path="/quiz/:id" component={QuestionPage} />
                  <Route exact path="/quiz/new" component={AddQuizPage} />
                  <Route exact path="/event/new" component={AddEventPage}/>
                  <Route exact path="/event/edit/:eventId/" component={EditEventPage}/>
                  <Route exact path="/quiz/edit/:id" component={AddQuizPage} />
                  <Route exact path="/quiz/play/:id" component={"TODO"}/>
                  <Route exact path="/music" component={MusicPage} />
                  <Route exact path="/music/new" component={AddMusicPage}/>
                  <Route exact path="/bar" component={BarPage} />
                  <Route exact path="/bar/new/:id" component={AddBarPage} />

                  <Route exact path="/music/playlists" component={Playlists} />
                  <Route exact path="/music/library" component={Library} />
                  <Route exact path="/music/playlist/:id" component={Playlist} />
                  <Route exact path="/music/addplaylist" component={AddPlaylist} />
                  <Route exact path="/music/editplaylist/:id" component={EditPlaylist} />
                </Col>
              </Row>
            </main>
        </Container>
      </div>
    );
  }
}

export default App;
