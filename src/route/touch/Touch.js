import React, { Component } from 'react';
// 引入管理员信息的入口函数
import  {adminDate} from '../../api/ajaxApi'

import { Card } from 'antd';
import './touch.css'

const { Meta } = Card;

class Touch extends Component {

    state ={
    admin:[]
    }

   getAdmin =  async()=>{
      const res = await  adminDate()
      if(res.status===200){

        const admin= res.data
        this.setState({admin
          
        })
      }
   }
  componentDidMount(){
       this.getAdmin()
       
   }
  
   

    render() {
        const {admin} = this.state
         const resAdmin =admin.map((item)=>{
             return   (
                <Card
                className='card'
              hoverable
              key={item.tel}
       
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
     >
           <Meta title={item.adminName} description={item.tel} />
           </Card>
             )
         })
        
        return (
            <div className='admin'>

        {resAdmin}
            </div>
        );
    }
}

export default Touch;