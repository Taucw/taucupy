import request from 'reqwest';
import {LOGIN_URL} from '../config/constants';
import LoginActions from '../actions/LoginActions';

class AuthService {

  login(username, password) {
    request({
      url: LOGIN_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password
      }
    }).then(this.handleAuth)
  }

  logout(){
    LoginActions.logoutUser();
  }

  handleAuth(response) {
    var jwt = response.id_token;
    LoginActions.loginUser(jwt);
    return true;
  }
}

export default new AuthService();
