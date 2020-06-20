import React, { Component } from 'react';

// 引入柱状图
import Bar from '../charts/Bar'
// 引入折线图
import Line from '../charts/Line'


import './home.css'




class Home extends Component {


    
    steOption=()=>{
        return{

        }
    }



    render() {
        return (
            // 柱状图
            <div className='parent'>
                <div className='box1'>
                    <Bar />
                </div>

                {/* 折线图 */}
                <div className='box2'>
                <Line />  
                </div>
              
            

                
            </div>
        );
    }
}

export default Home;