import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink,
            UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    logout(e) {
      e.preventDefault();
      this.props.logout();
      this.context.router.history.push('/login');

    }

    render() {
        const userLinks = (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <UncontrolledDropdown>
                <DropdownToggle caret color="info">
                  {this.props.auth.user.username}
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-right">
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.logout.bind(this)}>Sign Out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
            </Nav>
          );

        return (
            <Navbar className="lightdarkgrey" light expand="md">
                <NavbarToggler onClick={this.toggle} />
                <NavbarBrand href="/">BarZo Admin</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    {userLinks}
                </Collapse>
            </Navbar>
        );
    }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

NavigationBar.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, {logout} )(NavigationBar);