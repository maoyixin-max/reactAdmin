import React, { Component } from 'react';


// 引入添加商品的入口函数
import {add} from '../../api/ajaxApi'

// 引入antd

import { Form, Input, Button, Select,Card,DatePicker,InputNumber, message } from 'antd';
import {formateDate} from '../../utils/date'

const { Option } = Select;











class Add extends Component {

    // 将数据保存到params
    onFinish= async (value)=>{
        const {brand,goodsName,model,category,intoDatetime,quantity,price} =value
        const date1 = intoDatetime._d
        const date2 =  formateDate(date1)
        const params = new URLSearchParams()
   
        params.append('brand',brand)
        params.append('goodsName',goodsName)
        params.append('model',model)
        params.append('category',category)
        params.append('intoDatetime',date2)
        params.append('quantity',quantity)
        params.append('price',price)

        // 消灭异步函数
         const res = await add(params)    
   try{

    // 对成功和失败做判断

    if(res.data==='商品添加成功！'  && res.status===200){
        message.success('添加成功') 
        this.props.history.replace('/goods')
      }else{
        message.error('添加失败')
        console.log(res);    
      }
   }catch(error){
    alert(error)
   }
                  
    }
    render() {
        
        return (
            <Card title="商品信息录用" >
               
               <Form  
               ref={this.formRef} 
               name="control-ref" 
               onFinish={this.onFinish}>


    {/* 品牌 */}
            <Form.Item name="brand" label="品牌" 
            rules={[{ required: true }]}>
          <Input />
        </Form.Item>


    {/* 名称 */}
    <Form.Item name="goodsName" label="名称" 
            rules={[{ required: true }]}>
          <Input />
        </Form.Item>


    {/* 型号 */}
        <Form.Item name="model" label="型号" 
            rules={[{ required: true }]}>
          <Input />
        </Form.Item>


    {/* 分类 */}
        <Form.Item name="category" label="分类" 
        rules={[{ required: true }]}>
          <Select
            placeholder="------请选择-----"
            allowClear
          >
            <Option value="数码电器/办公用品">数码电器/办公用品</Option>
            <Option value="食品饮料/厨房用品">食品饮料/厨房用品</Option>
            <Option value="服装鞋包/化妆洗护">服装鞋包/化妆洗护</Option>
            <Option value="家居家装/家用纺织">家居家装/家用纺织</Option>
            <Option value="汽车配件/汽车用品">汽车配件/汽车用品</Option>
            <Option value="运动户外/文娱艺术">运动户外/文娱艺术</Option>
            <Option value="钟表珠宝/计生医疗">钟表珠宝/计生医疗</Option>
            <Option value="其它分类">其它分类</Option>
          </Select>
        </Form.Item>
       

       {/* 时间 */}
        <Form.Item label="时间" name="intoDatetime"
         rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>

      {/* 数量 */}
        <Form.Item label="数量" name='quantity'
         rules={[{ required: true },
         ]}>
          <InputNumber min={1} max={10} initialValues={2}/>
        </Form.Item>


      {/* 单价 */}
        <Form.Item name="price" label="单价" 
            rules={[{ required: true }]}>
          <Input />
        </Form.Item>


    {/* 提交 */}
        <Form.Item>
          <Button type="primary" htmlType="提交">
            Submit
          </Button>
        </Form.Item>
      </Form>
           </Card>
        );
    }
}

export default Add;