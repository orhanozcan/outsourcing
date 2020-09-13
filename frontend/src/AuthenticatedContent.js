import routes from './app-routes-main';

import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class MainNav extends Component {

  state = { activeItem: 'Main' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state
    return (

      < Router >
        <Menu vertical >
          <Menu.Item>
            <Menu.Header>Products</Menu.Header>

            <Menu.Menu>
              {routes.map(({ name, path, menuposition, iconname }) => (
                menuposition === 'left' ?
                  <Menu.Item
                    key={name}
                    name={name}
                    position={menuposition}
                    active={activeItem === name}
                    onClick={this.handleItemClick}
                    as={Link}
                    to={path}
                  >
                    {iconname ? <Icon name={iconname} /> : ''}
                    {name}
                  </Menu.Item> : ''

              ))}

            </Menu.Menu>
          </Menu.Item>
          
        </Menu>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route
              exact
              key={path}
              path={path}
              component={component}
            />
          ))}
          <Redirect to={'/main'} />
        </Switch>

      </Router >
    )
  }
}
export default MainNav;