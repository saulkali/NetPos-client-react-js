type AlertSeverity = "error" | "warning" | "info" | "success";
class UserEntity{
    IsOpen:boolean;
    Message: string;
    TypeSnackBar: AlertSeverity;
    private ListTypesSnackBar = {
        "success":"success",
        "error":"error",
        "warning":"warning",
        "info":"info",
    };
    constructor(){
        this.IsOpen = false;
        this.Message = "";
        this.TypeSnackBar = this.ListTypesSnackBar.info as AlertSeverity;
    }
    
    setIsOpen(isOpen:boolean){
        this.IsOpen = isOpen;
    }

    setMessageSnackBar(message:string){
        this.Message = message;
    }

    typeSuccessSnackBar(){
        this.TypeSnackBar = this.ListTypesSnackBar.success as AlertSeverity;
    }
    typeErrorSnackBar(){
        this.TypeSnackBar = this.ListTypesSnackBar.error as AlertSeverity;
    }
    typeInfoSnackBar(){
        this.TypeSnackBar = this.ListTypesSnackBar.info as AlertSeverity;
    }
    typeWarningSnackBar(){
        this.TypeSnackBar = this.ListTypesSnackBar.warning as AlertSeverity;
    }
}


export default UserEntity;