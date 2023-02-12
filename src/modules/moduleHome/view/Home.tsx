import ShoppingCart from './../../moduleShoppingCart/view/ShoppingCart';
import Loader from '../../../common/components/Loader';
import NavigateBase from '../../../common/components/NavigateBase';

const Home = () => {

    return(
    <>
        <NavigateBase/>
        <Loader/>
        <ShoppingCart/>    
    </>)
};

export default Home;