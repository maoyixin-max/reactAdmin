import React, { Component } from 'react';
import  {BrowserRouter,Route,Switch } from 'react-router-dom'




// 引入组件
import Login from './route/login/login'
import Admin from './route/admin/admin.js'







class app extends Component {
    render() {
        return (
         <BrowserRouter>
         <Switch>
             <Route path='/' component={Login}></Route>
             <Route path='/admin' component={Admin}></Route>
         </Switch>
         </BrowserRouter>
        );
    }
}

export default app;