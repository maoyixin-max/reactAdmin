import React, { Component} from 'react';



// 引入antd
import { Card,Button,Table  } from 'antd';
import Href from '../../components/href';

class Goods extends Component {

    

    
    render() {
        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
              tel: '0571-22098909',
              
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
              tel: '0571-22098909'
            },
          ];
          
          const columns = [
            {
              title: '序号',
              dataIndex: 'name',
              key: 'name',
              
            },
            {
              title: '品牌',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '名称',
              dataIndex: 'address',
              key: 'address',
            },
            {
                title: '型号',
                dataIndex: 'tel',
                key: 'tel',
              },
              {
                title: '分类',
                dataIndex: 'tel',
                key: 'tel',
              },
              {
                title: '入库时间',
                dataIndex: 'address',
                key: 'address',
              },
              {
                title: '数量',
                dataIndex: 'address',
                key: 'address',
              },
              {
                title: '单价',
                dataIndex: 'address',
                key: 'address',
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
            <Card title="库存信息管理" extra={<Button type='primary'>添加</Button>}>
          <Table dataSource={dataSource} columns={columns}
          bordered 
          />;
        </Card>
        );
    }
}

export default Goods;