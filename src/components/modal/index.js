import React, { Component } from 'react';
import propsTypes from 'prop-types'
import { Form, Input, Button, Select,DatePicker,InputNumber, message } from 'antd';
// 引入修改数据的入口函数
import  {update }from '../../api/ajaxApi'


// 导入事件格式化的函数
import {formateDate} from '../../utils/date'

const Option=Select.Option




class Mo extends Component {

  // 拿到父组件穿过来的点击对象
  static propsTypes={
      categoryName:propsTypes.string.isRequired,
      
  }



    // 将数据保存到params
    onFinish= async (value)=>{


      const {brand,goodsName,model,category,intoDatetime,quantity,price} =value
      const date1 = intoDatetime._d
      const date2 =  formateDate(date1)
      const params = new URLSearchParams()

      params.append('goodsID',this.props.categoryName.goodsID)
      params.append('brand',brand)
      params.append('goodsName',goodsName)
      params.append('model',model)
      params.append('category',category)
      params.append('intoDatetime',date2)
      params.append('quantity',quantity)
      params.append('price',price)

      // 消灭异步函数
       const res = await update(params)        
 try{

  // 对成功和失败做判断

  if(res.data==='商品数据更新成功！' ){
    message.success('商品数据更新成功！') 
        
    }else{
      message.error('添加失败')
      console.log(res);    
    }
 }catch(error){
  alert(error)
 }
 
                
  }
 
    render() {
      // 结构赋值
        const {categoryName} = this.props
        
        
        
       
        
        return (
            <div>
        

<Form  
               ref={this.formRef} 
               name="control-ref" 
               onFinish={this.onFinish}>


    {/* 品牌 */}
      
            <Form.Item name="brand" label="品牌" 
            initialValue={categoryName.brand}
            
            rules={[{ required: true }]}>
          <Input />
        </Form.Item>
          
        
   
           


    {/* 名称 */}
    <Form.Item name="goodsName" label="名称" 
    initialValue={categoryName.goodsName}
            rules={[{ required: true }]}>
          <Input/>
        </Form.Item>


    {/* 型号 */}
        <Form.Item name="model" label="型号" 
        initialValue={categoryName.model}
            rules={[{ required: true }]}>
          <Input />
        </Form.Item>


    {/* 分类 */}
        <Form.Item name="category" label="分类" 
        initialValue={categoryName.category}
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
          <DatePicker placeholder={categoryName.intoDatetime}/>
        </Form.Item>

      {/* 数量 */}
        <Form.Item label="数量" name='quantity'
        initialValue={categoryName.quantity}
         rules={[{ required: true },
         ]}>
          <InputNumber min={1} max={10} initialValues={2} />
        </Form.Item>


      {/* 单价 */}
        <Form.Item name="price" label="单价" 
         initialValue={categoryName.price}
            rules={[{ required: true }]}>
          <Input />
        </Form.Item>


    {/* 提交 */}
        <Form.Item>
          <Button type="primary" htmlType="提交" style={{float:'right'}}>
            确定修改
          </Button>
        </Form.Item>
      </Form>
          </div>
        );
    }
}

export default Mo
