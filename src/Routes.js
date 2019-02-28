import React from 'react';
import { Route } from "react-router-dom";
import Home from './containers/Home'
import Login from "./containers/Login";

export default [
  {
    path: "/",
    component: Home,
    exact: true, //精确匹配
    loadData: Home.loadData,
    key: 'Home',
  },
  {
    path: "/login",
    component: Login,
    exact: true, //精确匹配
    key: 'Login'
  }
]
