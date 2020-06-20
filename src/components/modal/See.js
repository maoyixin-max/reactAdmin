import React, { Component } from 'react';
import propsTypes from 'prop-types'
import './see.css'

class See extends Component {
    static propsTypes={
        categoryName:propsTypes.string.isRequired,
        
    }
    render() {
           // 结构赋值
           const {categoryName} = this.props
        return (
            <div>
                <p>品牌:{categoryName.brand}</p>
                <p>名称:{categoryName.goodsName}</p>
                <p>型号:{categoryName.model}</p>
                <p>分类:{categoryName.category}</p>
                <p>入库时间:{categoryName.intoDatetime}</p>
                <p>数量:{categoryName.quantity}</p>
                <p>单价:{categoryName.price}</p>
            </div>
        );
    }
}

export default See;