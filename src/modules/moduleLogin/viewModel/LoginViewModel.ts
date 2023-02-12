import {observable, action} from 'mobx';
import {useNavigate} from 'react-router-dom';

class LoginViewModel{
    @observable username:string = '';
    @observable password:string = '';
    @observable showLoader:boolean = false;

    @action
    setUsername(value:string){
        this.username = value;
    }
    
    @action
    setPassword(value:string){
        this.password = value;
    }

    @action
    setShowLoader(value:boolean){
        this.showLoader = value;
    }

    login(){
        this.showLoader = true;
    }
}

export default new LoginViewModel();