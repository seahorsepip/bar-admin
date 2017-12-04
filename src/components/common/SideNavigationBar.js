import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from "react-router-dom";

class SideNavigationBar extends Component {
    render() {
        return (
        <Nav vertical>
          <NavItem>
            <Link className="nav-link" to='/'>
                <i className="fa fa-tachometer" aria-hidden="true"></i>
                Dashboard
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to='/bar'>
                <i className="fa fa-beer" aria-hidden="true"></i>
                Bar
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to='/music'>
                <i className="fa fa-music" aria-hidden="true"></i>
                Music
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to='/quiz'>
                <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                Pubquiz
            </Link>
          </NavItem>
        </Nav>
        );
    }
}

export default SideNavigationBar;