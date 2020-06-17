import React, { Component} from 'react';

// 引入商品数据入口函数
import {goods} from '../../api/ajaxApi'
import Mo from '../../components/modal'

// 引入antd
import { Card,Button,Table, message,Modal  } from 'antd';
import Href from '../../components/href';




class Goods extends Component {
// 初始化数据
state = {
  loading :false,
  categorys: [],
  showstate:0

}



// 添加跳转页面
  add=()=>{
    this.props.history.replace('./add')
  }

  // 获取全部数据
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

//  获取全部数据
 componentDidMount(){
     this.getCategorys()
  }

//  修改数据显示对话框
showUpdate= (categorys)=>{
  this.categorys=categorys || {}
 this.setState({
  showstate:1
 })
  
}

// 取消对话框
handleCancel = ()=>{
  this.setState({
    showstate:0

  })
}


updateCategory=()=>{
  console.log('updateCategory()');
  
}



    
    render() {
      const {categorys,loading,showstate} = this.state
      const  category = this.categorys
      
   
          
          
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
               render:( categorys)=>( 
                    
                        <span>
                           <Href   >查看</Href>
                            <Href  onClick={()=>this.showUpdate(categorys)}>修改</Href>
                             <Href >删除</Href>
                         </span>
                       
                     )
                 
               
              }

          ];
        
        return (
            <Card title="库存信息管理" extra={<Button type='primary' onClick={this.add}>添加</Button>}>
          <Table dataSource={categorys} columns={columns}
          rowKey="goodsID"
          bordered 
          loading={loading}
          pagination={
            
            {defaultPageSize:6,showQuickJumper:true,
           
          }}
          />;
           <Modal
          title="修改分类"
          visible={showstate===1}
          onOk={this.updateCategory}
          onCancel={this.handleCancel}
        >
         <Mo categoryName={category}/>
          
        </Modal>
        </Card>
        
        );
    }
}

export default Goods;