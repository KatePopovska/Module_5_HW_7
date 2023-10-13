// pages
import Home from "./pages/Home";


// other
import {FC} from "react";
import Login from "./pages/Login";
import Resource from "./pages/Resource";
import UserForm from "./Form/UserForm";
import Registration from "./pages/Registration";
// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'resource-route',
        title: 'Resource',
        path: '/resource',
        enabled: true,
        component: Resource
    },


    {
        key: 'login-route',
        title: 'Login',
        path: '/login',
        enabled: true,
        component: Login
    },
    {
        key: 'user-form-route',
        title: 'User Form',
        path: '/user-form/:userId',
        enabled: true,
        component: UserForm
    },
    {
        key: 'registration-route',
        title: 'Registration',
        path: '/regist',
        enabled: true,
        component: Registration
    }
]