import LoginView from './../../modules/moduleLogin/view/LoginView';
import RegisterEmployeView from './../../modules/moduleRegisterEmploye/view/registerEmployeView';
import ShoppingCar from "../../modules/moduleHome/view/Home";
import { Provider } from 'mobx-react';
import LoginViewModel from '../../modules/moduleLogin/viewModel/LoginViewModel';
import LoginRepository from '../../modules/moduleLogin/model/LoginRepository';
import SettingsView from '../../modules/moduleSettings/view/SettingsView';
const loginViewModel:LoginViewModel = new LoginViewModel(new LoginRepository());

const RouterUtil = [
    {
      path: "/login",
      element: <Provider>
        <LoginView viewModel={loginViewModel}/>
      </Provider>,
    },
    {
        path: "/register_employe",
        element: <RegisterEmployeView />
    },
    {
        path:"/",
        element: <ShoppingCar/>
    },
    {
      path:"/settings",
      element:<SettingsView/>
    }
];

export default RouterUtil;