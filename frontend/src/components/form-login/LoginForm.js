import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Row, Col, Container } from 'react-bootstrap';
// import { loginRequest } from '../../api/auth'

// import { ToastContext } from '../../contexts/toast';
import { AuthContext } from '../../contexts/auth';

class LoginForm extends React.Component {
  static contextType = AuthContext

  handleSubmit = (values, formData) => {

    const { login } = this.context;
    login(this.state.email, this.state.password)


  };



  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  state = {

    email: '',
    password: ''

  }

  render() {

    return (
      <Container>
        <Row className="row justify-content-md-center">
          <Col className="col-md-auto text-center mb-4">
            <h6 className="h6 mb-3 font-weight-normal">outSourcing</h6>
            <p>İlgili açıklamalar son giriş için gaz vermeler </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="col-md-auto col-md-4">
            <Message
              attached
              header='Login!'
              content='Login to use out smartest app.'
            />
            <Form className='attached fluid segment' onSubmit={this.handleSubmit} >

              <Form.Input label="Email" placeholder='Email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Password"
                placeholder='Password'
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />

              <Form.Button primary content='Submit' />
            </Form>
            <Message attached='bottom' warning>
              &nbsp;<a href='fotgotpassword'>Forgot Password?</a>&nbsp;<br />
             &nbsp;<a href='register'>Register</a>&nbsp;
          </Message>
          </Col>
        </Row>
      </Container>

    );
  }
}


export default LoginForm;