import Home from "../Home";
import Prodotti from "../Prodotti";
import Offerte from "../Offerte";
import {Navigate, useRoutes} from "react-router-dom";
import React from "react";
import DettaglioProdotto from "../DettaglioProdotto";


export default function HomepageRoute(){

    return useRoutes([

        {
            path: '/offerte',
            element: <Offerte/>,
            children: []
        },
       


        {
            path: '/prodotti',
            element: <Prodotti/>,
            children: []
        },
        {
            path: '/prodotti/dettaglioProdotto',
            element: <DettaglioProdotto/>,
            children: []
        },

        {
            path: '/',
            element: <Home/>,
            children: []
        },


        {
            path: '*', element: <Navigate to='/'/>
        }
        ])
}