import routes from './app-routes-main';

import React, { Component } from 'react'
import { Menu, Icon, Segment, Header, Sidebar } from 'semantic-ui-react'


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class MainNav extends Component {

  state = { activeItem: 'Main', visible: true }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  setVisible(bool) {
    this.setState({ visible: bool })
  }


  render() {

    const { activeItem } = this.state
    return (

      < Router >
        <Menu inverted  >
          {/* buton gelicek ve menu açılacak */}
          {/* sağ tarafta ise kullanıcı dropdownu ve logout sistemi */}
        </Menu>
        <Sidebar
          as={Menu}
          animation='push'
          onHide={() => this.setVisible(false)}
          inverted
          vertical
          visible={this.state.visible}
          width='thin'
        >

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

        </Sidebar>

        <Sidebar.Pusher>
          <Segment >
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
          </Segment>
        </Sidebar.Pusher>



      </Router >
    )
  }
}
export default MainNav;