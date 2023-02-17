import LoginResponses from "../enums/LoginResponses";
import axios from 'axios';
import ApiReferences from "../../../common/constants/ApiReferences";

class LoginRepository{
    async Auth(email:string,password:string):Promise<LoginResponses>{
        let loginResponse = Promise.resolve(LoginResponses.UNKNOW);
        try{
            const data = {
                "Email":email,
                "Password":password
            };
            const response = await axios.post(
                ApiReferences.apiBase + 
                ApiReferences.authLoginReference,
                data
            )
            loginResponse = Promise.resolve(
                response.data.response as LoginResponses
            );
            
        }catch(error){
            console.log(error);
        }
        return loginResponse;
    }
}
export default LoginRepository;