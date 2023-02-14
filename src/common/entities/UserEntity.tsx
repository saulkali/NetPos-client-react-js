import {Guid} from 'guid-typescript';
class UserEntity{
    Id:Guid;
    FirstName:string;
    LastName:string;
    Email:string;
    Password:string;
    IdUserRolScheme:Guid;
    
    constructor(
        id:Guid,
        firstName:string,
        lastName:string,
        email:string,
        password:string,
        idUserRolScheme:Guid
    ){
        this.Id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.Password = password;
        this.IdUserRolScheme = idUserRolScheme;
    }
}

export default UserEntity;