import React, { Component} from 'react';

// 引入商品数据入口函数
import {goods} from '../../api/ajaxApi'

// 引入antd
import { Card,Button,Table, message  } from 'antd';
import Href from '../../components/href';

class Goods extends Component {

state = {
  loading :false,
  categorys: []
}
  add=()=>{
    this.props.history.replace('./add')
  }
  getCategorys=  async()=>{
    this.setState({
      loading:true
    })
    const res = await goods()
    if(res.status===200){

      const categorys = res.data
      this.setState({categorys,
        loading:false
      })
    }else{
      message.error('无法查询到数据，可能是数据库发生异常。请联系后台开发管理人员')
    }
  }

  // UNSAFE_componentWillMount(){
  //   this.initColumns()
  // }
    
 componentDidMount(){
     this.getCategorys()
  }


    
    render() {
      const {categorys,loading} = this.state
     
      
        // const dataSource = [
            // {
            //   key: '1',
            //   name: '胡彦斌',
            //   age: 32,
            //   address: '西湖区湖底公园1号',
            //   tel: '0571-22098909',
              
            // },
            // {
            //   key: '2',
            //   name: '胡彦祖',
            //   age: 42,
            //   address: '西湖区湖底公园1号',
            //   tel: '0571-22098909'
            // },
          // ];
          
          const columns = [
            {
              title: '序号',
              dataIndex: 'goodsID',
              key: 'goodsID',
              
            },
            {
              title: '品牌',
              dataIndex: 'brand',
              key: 'brand',
            },
            {
              title: '名称',
              dataIndex: 'goodsName',
              key: 'goodsName',
            },
            {
                title: '型号',
                dataIndex: 'model',
                key: 'model',
              },
              {
                title: '分类',
                dataIndex: 'category',
                key: 'category',
              },
              {
                title: '入库时间',
                dataIndex: 'intoDatetime',
                key: 'intoDatetime',
              },
              {
                title: '数量',
                dataIndex: 'quantity',
                key: 'quantity',
              },
              {
                title: '单价',
                dataIndex: 'price',
                key: 'price',
              },
              {
                title: '操作',
               render:()=>( 
                   <span>
                       <Href>查看</Href>
                       <Href>修改</Href>
                       <Href>删除</Href>
                   </span>
               )
              }

          ];
        
        return (
            <Card title="库存信息管理" extra={<Button type='primary' onClick={this.add}>添加</Button>}>
          <Table dataSource={categorys} columns={columns}
          bordered 
          loading={loading}
          pagination={
            
            {defaultPageSize:6,showQuickJumper:true,
           
          }}
          />;
        </Card>
        );
    }
}

export default Goods;