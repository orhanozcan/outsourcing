import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import routes from '../../app-routes';


import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from "react-router-dom";

class NavComponent extends Component {

    state = { activeItem: 'Home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        const { activeItem } = this.state
        return (

            < Router >
                <Menu color={'teal'} >
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
                    <Menu.Menu position='right'>
                        {routes.map(({ name, path, menuposition, iconname }) => (
                            menuposition === 'right' ?
                                <Menu.Item

                                    key={name}
                                    name={name}
                                    position={menuposition}
                                    active={activeItem === name}
                                    onClick={this.handleItemClick}
                                    as={Link}
                                    to={path}
                                >
                                    <Icon name={iconname} />
                                    {name}
                                </Menu.Item> : ''
                        ))}
                    </Menu.Menu>
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
                </Switch>

            </Router >
        )
    }
}
export default NavComponent;