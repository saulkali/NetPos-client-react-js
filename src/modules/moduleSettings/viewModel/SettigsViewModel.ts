import {makeAutoObservable} from 'mobx';


class SettingsViewModel{

    //usb printer escpos
    printerPortEscPos:string = "/dev/lp0";

    //api settings
    apiHost:string = "https://localhost/"

    constructor(){
        makeAutoObservable(this);
    }
}

export default SettingsViewModel;