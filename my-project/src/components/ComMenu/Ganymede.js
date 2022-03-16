import React from 'react';
import img1 from '../img/2.jpg'
import img2 from '../img/3.jpg'
import img3 from '../img/4.jpg'
import img4 from '../img/5.jpg'
import img5 from '../img/6.jpg'
import img6 from '../img/7.jpg'
import img7 from '../img/8.jpg'
import img8 from '../img/9.jpg'
import img9 from '../img/10.jpg'
import img10 from '../img/11.jpg'
import img11 from '../img/12.jpg'
import img12 from '../img/13.jpg'
import img13 from '../img/14.jpg'
import img14 from '../img/15.jpg'
import img15 from '../img/16.jpg'
import img16 from '../img/17.jpg'
import '../../App.css'
import Fade from 'react-reveal/Fade'; 
import { Link } from 'react-router-dom';

const Ganymede = () => {
    return (
        <div className='w-full h-screen pt-24 bg-orange-50 absolute overflow-hidden'>
            <div className='palase_img absolute w-full h-full top-0 left-0 grid opacity-50'>
                <Fade bottom cascade><img src={img1} alt={"img"} className='img1 img1-1 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img2} alt={"img"} className='img1 img1-2 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img3} alt={"img"} className='img1 img1-3 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img4} alt={"img"} className='img1 img1-4 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img5} alt={"img"} className='img1 img1-5 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img6} alt={"img"} className='img1 img1-6 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img7} alt={"img"} className='img1 img1-7 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img8} alt={"img"} className='img1 img1-8 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img9} alt={"img"} className='img1 img1-9 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img10} alt={"img"} className='img1 img1-10 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img11} alt={"img"} className='img1 img1-11 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img12} alt={"img"} className='img1 img1-12 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img13} alt={"img"} className='img1 img1-13 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img14} alt={"img"} className='img1 img1-14 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img15} alt={"img"} className='img1 img1-15 w-30 h-40' /></Fade>
                <Fade bottom cascade><img src={img16} alt={"img"} className='img1 img1-16 w-30 h-40' /></Fade>
            </div>
            <div className='text-descr w-2/4 m-auto text-left p-5 relative'>
                <Fade bottom cascade><h1 className='text-7xl m-auto'>Ganymede</h1></Fade>
                <Fade bottom cascade><p className='text-4xl py-16 w-4/6'>Incredible as this seems to our
                    ordinary ideas, it is undoubtedly
                    an understatement rather than an
                    exaggeration of the true
                    proportion as observed in the
                    case of koilon.</p></Fade>
                <Fade bottom cascade><p className='hover:text-red-600 text-2xl'>+ Read the story</p>
                </Fade>
            </div>
            <Fade bottom cascade><Link to="/menu" className='absolute right-0 top-0 text-5xl p-8'>&#10005;</Link></Fade>
        </div>
    );
};

export default Ganymede;