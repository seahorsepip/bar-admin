import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from "react-router-dom";

class SideNavigationBar extends Component {
    render() {
        return (
        <Nav vertical>
          <NavItem>
            <Link className="nav-link" to='/'>
                <i class="fa fa-tachometer" aria-hidden="true"></i>
                Dashboard
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to='/bar'>
                <i class="fa fa-beer" aria-hidden="true"></i>
                Bar
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to='/music'>
                <i class="fa fa-music" aria-hidden="true"></i>
                Music
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to='/quiz'>
                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                Pubquiz
            </Link>
          </NavItem>
        </Nav>
        );
    }
}

export default SideNavigationBar;