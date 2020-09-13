import user from '../utils/user';
import axios from 'axios'
// import env from 'dotenv/config'


export async function registerRequest(email, password) {
  try {
    var result = await axios.post(process.env.REACT_APP_BASE_URL + 'user/register', { email: email, password: password });
    return {
      status: result.data.status,
      msg: result.data.msg
    };
  }
  catch {
    return {
      status: false,
      msg: "Failed to create account"
    };
  }
}

export async function loginRequest(email, password) {
  try {

    var result = await axios.post(process.env.REACT_APP_BASE_URL + 'user/login', { email: email, password: password })

    if (result.data.status === 1) {
      localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, result.data.token.accessToken)
    }

    return {
      status: result.data.status,
      msg: result.data.msg
    };
  }
  catch {
    return {
      status: false,
      msg: "Authentication failed"
    };
  }
}

export async function activate(uuid) {
  try {

    var result = await axios.post(process.env.REACT_APP_BASE_URL + 'user/activate', { uuid: uuid })

    return {
      status: result.data.status,
      msg: result.data.msg
    };
  }
  catch {
    return {
      status: false,
      msg: "Activation failed"
    };
  }
}


export async function getUser() {
  try {
    // Send request

    if (user.email != null) {
      return {
        isOk: true,
        data: null
      };
    }
    return {
      isOk: true,
      data: null
    };
  }
  catch {
    return {
      isOk: false
    };
  }
}

export async function changePassword(email, recoveryCode) {
  try {
    // Send request
    console.log(email, recoveryCode);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to change password"
    }
  };
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to reset password"
    };
  }
}
