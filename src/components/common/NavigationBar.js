import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink,
            UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";

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

    render() {
        const userLinks = (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <UncontrolledDropdown>
                <DropdownToggle caret color="info">
                  Bob van Donselaar
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-right">
                  <DropdownItem onClick={console.log('settings-page')}>
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={console.log('logout')}>Sign Out</DropdownItem>
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

export default NavigationBar;