import img from '../img/img.jpg'
import img2 from '../img/img2.jpg'
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';


const Titlemenu = () => {

    return (
        <div className="menuclose h-screen text-center flex p-7 overflow-hidden">
            <div className='coneiner flex justify-between flex-col w-8/12 text-left' >
                <Fade bottom cascade><p className="menu1 text-5xl w-3/4 leading-none overflow-hidden relative pb-1">We are Super.fluid</p></Fade>
                <Fade bottom cascade><p className='menu1 text-6xl w-3/4 leading-none overflow-hidden relative pb-1'>Flowing without any loss of kinetic energy — stir us and we form vortices that continue to rotate indefinitely.</p></Fade>
                <Fade bottom cascade><p className='menu1 text-3xl w-2/4 leading-none overflow-hidden relative pb-1'>Not all Bose–Einstein condensates can be regarded as superfluids, and not all superfluids are Bose–Einstein condensates.</p></Fade>
            </div>
            <div className='coneiner1 w-6/12 flex justify-between flex-col text-right items-end	'>
                <Fade bottom cascade><Link to="/menu" className='menu mr-2 text-5xl leading-none overflow-hidden relative pb-1 '
                > Menu</Link></Fade>
                <div>
                    <div>
                        <Fade bottom cascade><img src={img2} alt={"img"} className='menu ml-60' /></Fade>
                        <Fade bottom cascade><p className='menu1 leading-none overflow-hidden relative pb-1'><img src={img} alt={"img"} className='menu mt-4 ml-60' /></p></Fade>
                    </div>
                    <div className='f-s flex justify-end mt-4 font-medium opacity-50 mr-2'>
                        <Fade bottom cascade><p className='menu1 mr-8 leading-none overflow-hidden relative pb-1'>Content Preview and Menu Animation</p></Fade>
                        <Fade bottom cascade><p className='menu1 leading-none overflow-hidden relative pb-1'>Previous demo</p></Fade>
                        <Fade bottom cascade><p className='menu1 mx-4 leading-none overflow-hidden relative pb-1'>Article</p></Fade>
                        <Fade bottom cascade><a href='https://github.com/IsrailovSardor' className='menu1 leading-none overflow-hidden relative pb-1'>GitHub</a></Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Titlemenu;