import React, { Component } from 'react';
import  {BrowserRouter,Route,Switch } from 'react-router-dom'




// 引入组件
import Login from './route/login/login'
import Admin from './route/admin/admin.js'
import Register from './route/register/register'







class app extends Component {
    render() {
        return (
         <BrowserRouter>
         <Switch>
        
             <Route path='/login'  component={Login}></Route>
             <Route path='/register'    component={Register}></Route>
             <Route path='/'   component={Admin}></Route>
             

         </Switch>
         </BrowserRouter>
        );
    }
}

export default app;