import {observable, action} from 'mobx';
import LoginResponses from '../enums/LoginResponses';
import LoginRepository from '../model/LoginRepository';
import { makeAutoObservable } from 'mobx';

class LoginViewModel{
    username:string = "";
    password:string = "";
    showLoader:boolean = false;
    messageLoginResponse:LoginResponses = LoginResponses.UNKNOW;
    _loginRepository:LoginRepository;
 
    constructor(loginRepository:LoginRepository){
        this._loginRepository = loginRepository;
        makeAutoObservable(this);
    }
    login = async () => {
        alert(this.username);
    }
}

export default LoginViewModel;
  