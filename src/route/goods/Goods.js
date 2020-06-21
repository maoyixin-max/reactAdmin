import React, { Component} from 'react';

// 引入商品数据入口函数
import {goods} from '../../api/ajaxApi'
// 引入修改会话框组件
import Mo from '../../components/modal'
// 引入查看会话框组件
import See from '../../components/modal/See'

// 引入删除数据入口函数
import {removedate} from '../../api/ajaxApi'

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
// 点击删除弹出会话框
removeUpdate=(removegorys)=>{
  this.categorys=removegorys || {}
 this.setState({
  showstate:3
 })
  
}


// 删除数据
removeCategory= async ()=>{
  // 发送异步请求删除数据
  const params = new URLSearchParams()
  params.append('goodsID',this.categorys.goodsID)
  const re =   await removedate(params)
  console.log(re.data);
  
  // 关闭会话框
 this.setState({
  showstate:0
 })
//  重新刷新页面
message.success('删除成功')
this.getCategorys()
}




// 控制查看会话框
see=(categorys)=>{
  this.categorys=categorys || {}
 this.setState({
  showstate:2
 })
  
}


// 点击确认关闭会话框
seeCategory=()=>{
  this.setState({
    showstate:0
   })
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

// 点击确认修改后
updateCategory=()=>{ 
  // 关闭会话框
  this.setState({
    showstate:0

  })

  // 重新显示列表
  this.getCategorys()
  
  
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
                           <Href  onClick={()=>this.see(categorys)} >查看</Href>
                            <Href  onClick={()=>this.showUpdate(categorys)}>修改</Href>
                             <Href onClick={()=>this.removeUpdate(categorys)}>删除</Href>
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
            
            {defaultPageSize:5,showQuickJumper:true,
           
          }}
          />;

     {/* 修改分类会话框 */}
           <Modal
          title="修改分类"
          visible={showstate===1}
          onOk={this.updateCategory}
          onCancel={this.handleCancel}



        >{/* 导入更新会话框组件 */}
         <Mo categoryName={category}
       
         />
          
        </Modal>
     {/* 查看分类会话框 */}
        <Modal
          title="查看分类"
          visible={showstate===2}
          onOk={this.seeCategory}
          onCancel={this.handleCancel}
        >
        <See categoryName={category}/>
          </Modal>


          <Modal
          title="删除"
          visible={showstate===3}
          onOk={this.removeCategory}
          onCancel={this.handleCancel}
        >
         <p>您确定要删除吗</p>
          </Modal>
        </Card>
        
        );
    }
}

export default Goods;