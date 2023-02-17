import LoginResponses from '../enums/LoginResponses';
import LoginRepository from '../model/LoginRepository';
import { makeAutoObservable } from 'mobx';

class LoginViewModel{
    username:string = "";
    password:string = "";
    showLoader:boolean = false;
    showSnackBar:boolean = false;
    messageLoginResponse:LoginResponses = LoginResponses.UNKNOW;
    _loginRepository:LoginRepository;
    
    constructor(loginRepository:LoginRepository){
        this._loginRepository = loginRepository;
        makeAutoObservable(this);    
    }
    
    login = async () => {

        
        if(this.username.length === 0 || this.password.length === 0)
            this.messageLoginResponse = LoginResponses.EMPTYFIELDS;
        else 
        {
            this.showLoader = true;
            this.messageLoginResponse = await this._loginRepository.Auth(this.username,this.password);
            this.showLoader = false;
            this.showSnackBar = true;
            
        }
    }
}

export default LoginViewModel;
  