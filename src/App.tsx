import React, {Suspense, lazy} from 'react';
import "./App.scss"
import 'antd/dist/antd.css';

// библиотека для медиазапросов на изменение размера экрана
import {useMediaQuery} from 'react-responsive'
import {Header} from "./components/Header";
import {Route, Routes} from "react-router-dom";
import SushiPage from "./Pages/SushiPage";



 const PizzaPage = lazy(() => import('./Pages/PizzaPage'));

export const App = () => {
    const isBigScreen = useMediaQuery({query: '(min-width: 900px)'})


    return (
        <div className="app">
            <Header isBigScreen={isBigScreen}/>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={"Home"}/>
                        <Route path="pizza" element={<PizzaPage/>}/>
                        <Route path="sushi" element={<SushiPage/>}/>
                        <Route path="snacks" element={"snacks"}/>
                        <Route path="login" element={"login"}/>
                        <Route path="*" element={"404"}/>
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
};

