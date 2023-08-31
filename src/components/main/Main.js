import React from 'react';
import '../../scss/_main.scss';
import { NavLink } from 'react-router-dom';
import MainConts1 from './MainConts1';
import MainConts2 from './MainConts2';
import MainConts3 from './MainConts3';

function Main() {

    const url = process.env.PUBLIC_URL;

    return(
        <>
            <MainConts1 />
            <MainConts2 />
            <MainConts3 />
        </>

    )
}

export default Main;