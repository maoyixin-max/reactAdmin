import React, { Component } from 'react';
import propsTypes from 'prop-types'
import { Form, Input, Button, Select,Card,DatePicker,InputNumber, message } from 'antd';


const Itme = Form.Item
const Option=Select.Option

class Mo extends Component {
  static propsTypes={
      categoryName:propsTypes.string.isRequired
  }

    onFinish=(value)=>{
        console.log(value);
        
    }
    render() {
        const {categoryName} = this.props
        console.log(categoryName);
        
        return (
            <div>
           {/* <Form
           onFinish={this.onFinish}

           >
               <Itme>
                   <Input placeholder={categoryName.goodsID}/>
               </Itme>
           </Form> */}

<Form  
               ref={this.formRef} 
               name="control-ref" 
               onFinish={this.onFinish}>


    {/* 品牌 */}
            <Form.Item name="brand" label="品牌" 
            
            rules={[{ required: true }]}>
          <Input placeholder={categoryName.brand}/>
        </Form.Item>


    {/* 名称 */}
    <Form.Item name="goodsName" label="名称" 
            rules={[{ required: true }]}>
          <Input placeholder={categoryName.goodsName}/>
        </Form.Item>


    {/* 型号 */}
        <Form.Item name="model" label="型号" 
            rules={[{ required: true }]}>
          <Input placeholder={categoryName.model}/>
        </Form.Item>


    {/* 分类 */}
        <Form.Item name="category" label="分类" 
        rules={[{ required: true }]}>
          <Select
            placeholder="------请选择-----"
            allowClear
            placeholder={categoryName.category}
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
         rules={[{ required: true },
         ]}>
          <InputNumber min={1} max={10} initialValues={2} placeholder={categoryName.quantity}/>
        </Form.Item>


      {/* 单价 */}
        <Form.Item name="price" label="单价" 
            rules={[{ required: true }]}>
          <Input placeholder={categoryName.price}/>
        </Form.Item>


    {/* 提交 */}
        <Form.Item>
          <Button type="primary" htmlType="提交">
            Submit
          </Button>
        </Form.Item>
      </Form>
          </div>
        );
    }
}

export default Mo