import LoginView from './../../modules/moduleLogin/view/LoginView';
import LoginViewModel from './../../modules/moduleLogin/viewModel/LoginViewModel';
import RegisterEmployeView from './../../modules/moduleRegisterEmploye/view/registerEmployeView';
import ShoppingCar from "../../modules/moduleHome/view/Home";


const RouterUtil = [
    {
      path: "/login",
      element: <LoginView loginViewModel={LoginViewModel}/>,
    },
    {
        path: "/register_employe",
        element: <RegisterEmployeView />
    },
    {
        path:"/",
        element: <ShoppingCar/>
    }
];

export default RouterUtil;