import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'


// 导入接受现在时间的函数，返回一个字符串
import {formateDate} from '../../utils/date'


// 导入antd的对话框样式
import { Modal } from 'antd';


// 导入包装好的a标签
import Href from '../href'

// 导入了存储用户数据和操作用户数据的函数
import storeUtils  from '../../utils/storeUtils'
import storeUtilss from '../../utils/storeUtilss'




class Hh extends Component {
   
    // 实现时间日期实时更新
        state ={
            time:formateDate(Date.now())
        }

        gitTime =()=>{
       this.ID =  setInterval(()=>{
      const time = formateDate(Date.now())
      this.setState({time})
        },1000)
        }
      
    componentDidMount() {
        this.gitTime()
    }



    // 用户退出的操作
    remove=(e)=>{
        e.preventDefault()
        Modal.confirm({  
            content:'您确定要退出吗?',
            onOk: ()=> {
                storeUtilss.removeUser()
                storeUtils.user={}
                this.props.history.replace('./login')    
            }
            
        })
    }
    // 退出后暂停定时器，组件都没了，定时器也不需要了
   componentWillUnmount(){
       clearInterval(this.ID)
   }

     
    render() {
        const {time} = this.state
        return (
            <div style={{height: '80px' ,
                fontSize: '20px',
                textAlign:' center',
                position: 'relative',
                paddingRight:  '20px' }}>
               <span
               style={{ height: '80px',
                textAlign:' center',
                fontSize: '20px',
                lineHeight: '80px',
                color: 'rgb(89, 96, 196)'}}
               > 欢迎您:{storeUtils.user.account}
               </span>
                <Href   onClick={this.remove} style={{ fontSize: '15px',
              float:'right',
              lineHeight:'80px',
              cursor:'pointer',
              color:'red'
            }}>
                </Href>
             <span style={{float:'left', color:'#405212'}}>{time}</span>
            </div>
        );
    }
}

export default  withRouter(Hh);