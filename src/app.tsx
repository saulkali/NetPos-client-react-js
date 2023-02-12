import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";

import RouterUtil from './common/utils/RouterUtil';


const App = ()=>{

    const routers = createBrowserRouter(RouterUtil);
    return (
        <>
            <RouterProvider router={routers} />
        </>
    );  
};


export default App;

//https://articulo.mercadolibre.com.mx/MLM-1419306128-monitor-portatil-para-laptops-y-consolas-pantalla-156-fhd-_JM#position=6&search_layout=grid&type=item&tracking_id=a68cafe0-4cb9-4219-a475-71cee4ad8a43