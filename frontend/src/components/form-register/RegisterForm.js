import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import { Row, Col, Container } from 'react-bootstrap';
import * as yup from "yup";

import { registerRequest } from '../../api/auth'
import { Redirect } from 'react-router';

import { ToastContext } from '../../contexts/toast';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter your email")
    .required("Email is a required field"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  termsandconditions: yup
    .bool("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted.")
  ,
  confirmpassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});

class RegisterForm extends React.Component {
  static contextType = ToastContext

  handleSubmit = (values, formData) => {


    (async () => {


      this.setState({ loading: true });
      var valid = false;
      var gotoLogin = false;
      var self = this;
      const toastMessageStack = this.context;
      await validationSchema.validate({
        email: this.state.email,
        password: this.state.password,
        termsandconditions: this.state.termsandconditions,
        confirmpassword: this.state.confirmpassword
      }).then(function (value) {
        valid = true;
      })
        .catch(error => {
          self.setState({ suMessage: error.errors[0], suMsgColor: 'orange', hideMessage: false, suMessageHeader: 'Error!' })

        });
      if (valid) {
        const result = await registerRequest(this.state.email, this.state.password)
        console.log(result);
        if (result.status === 1) {
          toastMessageStack(result.msg)
          gotoLogin = true;
        }
        else {
          this.setState({ suMessage: result.msg, suMsgColor: 'orange', hideMessage: false, suMessageHeader: 'Error!' })
        }
      }

      this.setState({ loading: false, redirect: gotoLogin });

    }
    )();

  };

  setMessage = (values, formData) => {
    this.setState({ hideMessage: true })
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  state = {

    email: '',
    password: '',
    termsandconditions: false,
    confirmpassword: '',
    suMessage: '',
    hideMessage: true,
    suMsgColor: 'orange',
    suMessageHeader: '',
    loading: false,
    redirect: false

  }

  render() {

    return (
      <Container>

        {this.state.redirect ? (<Redirect exact push to="/login" />) : null}
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
              header='Welcome to our site!'
              content='Fill out the form below to sign-up for a new account'
            />
            <Form className='attached fluid segment' onSubmit={this.handleSubmit} loading={this.state.loading}>

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

              <Form.Input
                label="Confirm Password"
                placeholder='Password'
                name="confirmpassword"
                type="password"
                value={this.state.confirmpassword}
                onChange={this.handleChange}
              />

              <Form.Checkbox label="I agree to the Terms and Conditions" name="termsandconditions" checked={this.state.termsandconditions} onChange={this.handleChange} />

              <Message color={this.state.suMsgColor} onDismiss={this.setMessage} hidden={this.state.hideMessage} header={this.state.suMessageHeader} content={this.state.suMessage} />

              <Form.Button primary content='Submit' />
            </Form>
            <Message attached='bottom' warning>
              Already signed up?&nbsp;<a href='Login'>Login here</a>&nbsp;instead.
          </Message>
          </Col>

        </Row>
      </Container>

    );
  }
}


export default RegisterForm;