import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Desctmenu = () => {
    return (
        <div className='text-8xl m-auto h-screen text-center '>
           <div className='h-full w-2/5 text-left m-auto flex justify-center flex-col'>
            <Fade bottom cascade><h1><Link to="/velocity" className='hover:text-red-600'>Velocity</Link></h1></Fade> 
            <Fade bottom cascade><h1><Link to="/progectiels" className='hover:text-red-600'>Progectiels</Link></h1></Fade> 
            <Fade bottom cascade><h1><Link to="/gravity" className='hover:text-red-600'>Gravity</Link></h1></Fade> 
            <Fade bottom cascade><h1><Link to="/quasimodo" className='hover:text-red-600'>Quasimodo</Link></h1></Fade> 
            <Fade bottom cascade><h1><Link to="/hyperbolic" className='hover:text-red-600'>Hyperbolic</Link></h1></Fade> 
            <Fade bottom cascade><h1><Link to="/ganymede" className='hover:text-red-600'>Ganymede</Link></h1></Fade> 
            </div>
            <Link to="/" className='absolute right-0 top-0 text-5xl p-8'>&#10005;</Link>
        </div>
    );
};

export default Desctmenu;