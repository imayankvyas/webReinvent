import React from 'react';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';

import './App.css';
import LoginForm from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from "./Pages/Dashboard";
import {Provider} from "react-redux";
import store from "./store";
import ProtectedRoute from "./utils/ProtectedRoute";

const App: React.FC = () => {

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path='dashboard' element={<ProtectedRoute outlet={<Dashboard />} />} />
                    <Route path="*" element={<Outlet />} />
                </Routes>
            </Router>
        </Provider>

    );
}

export default App;
