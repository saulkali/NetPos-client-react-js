import {useSpring,animated} from 'react-spring';

const TitleAnimationLogin = () =>{
    return useSpring({
        from:{opacity:0, transform:'translate3d(0,40px,0)'},
        to: {opacity:1, transform:'translate3d(0,0px,0)'}
    });
};

export default TitleAnimationLogin;