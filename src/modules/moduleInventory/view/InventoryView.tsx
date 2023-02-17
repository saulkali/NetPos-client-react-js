import { useState } from "react";
import InventoryHomeView from "../subModules/subModuleHome/view/InventoryHomeView";
import InventoryHomeViewModel from "../subModules/subModuleHome/viewModel/InventoryHomeViewModel";
import RegisterArticleView from "../subModules/subModuleRegisterArticle/view/RegisterArticleView";

const InventoryView = () => {

    const [activeComponent,setActiveComponent] = useState("InventoryHome");
    return (
    <>
        {activeComponent === 'InventoryHome' && 
            <InventoryHomeView viewModel={
                new InventoryHomeViewModel()
            } setActiveComponent={setActiveComponent}/>
        }
        {activeComponent === 'InventoryRegisterArticle' 
        && <RegisterArticleView setActiveComponent={setActiveComponent}/>}
    </>  
    );
};

export default InventoryView;