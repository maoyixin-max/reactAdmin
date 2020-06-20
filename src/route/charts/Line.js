import React, { Component } from 'react';
// 引入echarts
import ReactEcharts from 'echarts-for-react'

// 引入获取商品的接口函数
import {goods} from '../../api/ajaxApi'

// 引入antd
import { Card} from 'antd';





class Line extends Component {
    state ={
        categorys:[],
        
    }
    
    // 获取全部数据
    getCategorys=  async()=>{
       
        const res = await goods()
        if(res.status===200){
    
          const categorys = res.data
          
        
          this.setState({categorys})
        }
    }

//   组件完成获取数据
      componentDidMount(){
        this.getCategorys()

     }
   

    barOption=(category)=>{
        const arr = []
        //   定义一个re 接受所有的数组对象
        const re = category.categorys

        // 取出符合数码条件的数组对象的一个键的值组成新的数组
        const acte1 = re.filter((item)=>{
            return item.category === "数码电器/办公用品"

        })
         // 取出符合食品条件的数组对象的一个键的值组成新的数组
        const shi = re.filter((item)=>{
            return item.category === "食品饮料/厨房用品"

        })
        // 取出符合服装条件的数组对象的一个键的值组成新的数组
        const fu = re.filter((item)=>{
            return item.category === "服装鞋包/化妆洗护"

        })

        // 取出符合家具条件的数组对象的一个键的值组成新的数组
        const jia = re.filter((item)=>{
            return item.category === "家居家装/家用纺织"

        })
        // 取出符合汽车条件的数组对象的一个键的值组成新的数组
        const qi = re.filter((item)=>{
            return item.category === "汽车配件/汽车用品"

        })

        // 取出符合运动条件的数组对象的一个键的值组成新的数组
        const yun = re.filter((item)=>{
            return item.category === "运动户外/文娱艺术"

        })

        // 取出符合珠宝条件的数组对象的一个键的值组成新的数组
        const zhu = re.filter((item)=>{
            return item.category === "钟表珠宝/计生医疗"

        })
        // 取出符合其他条件的数组对象的一个键的值组成新的数组
        const ta = re.filter((item)=>{
            return item.category === "其它分类"

        })
    
    




            //   取出符合数码条件的对象中的数量
        const  cate2  = acte1.map((itme)=>{
            return itme.quantity
        })
         //   取出符合食品条件的对象中的数量
        const  shi1  = shi.map((itme)=>{
            return itme.quantity
        })
         //   取出符合服装条件的对象中的数量
         const  fu1 = fu.map((itme)=>{
            return itme.quantity
        })
        //   取出符合家具条件的对象中的数量
        const  jia1 = jia.map((itme)=>{
            return itme.quantity
        })
        //   取出符合汽车条件的对象中的数量
        const  qi1 = qi.map((itme)=>{
            return itme.quantity
        })
        //   取出符合运动条件的对象中的数量
        const  yun1 = yun.map((itme)=>{
            return itme.quantity
        })
        //   取出符合珠宝条件的对象中的数量
        const  zhu1 = zhu.map((itme)=>{
            return itme.quantity
        })
        //   取出其他条件的对象中的数量
        const  ta1 = ta.map((itme)=>{
            return itme.quantity
        })



        // 将数码数组里面的字符串变为数字
          const re1 =  cate2.map(Number)
       // 将食品数组里面的字符串变为数字
          const shi2 =  shi1.map(Number)
      // 将服装数组里面的字符串变为数字
          const fu2 =  fu1.map(Number)
          // 将家具数组里面的字符串变为数字
          const jia2 =  jia1.map(Number)
          // 将汽车数组里面的字符串变为数字
          const qi2 =  qi1.map(Number)
         // 将运动数组里面的字符串变为数字
         const yun2 =  yun1.map(Number)
         // 将珠宝数组里面的字符串变为数字
         const zhu2 =  zhu1.map(Number)
         // 将其他数组里面的字符串变为数字
         const ta2 =  ta1.map(Number)



        //  将数码数据里面的值相加
           const re2 =re1.reduce((total,num)=>{
               return total+num
           },0)
           arr.push(re2)

          //  将食品数据里面的值相加
          const shi3 =shi2.reduce((total,num)=>{
            return total+num
        },0)
        arr.push(shi3)
      
         //  将服装数据里面的值相加
         const fu3 =fu2.reduce((total,num)=>{
           return total+num
        },0)
        arr.push(fu3)
         //  将家具数据里面的值相加
         const jia3 =jia2.reduce((total,num)=>{
            return total+num
         },0)
         arr.push(jia3)
          //  将汽车数据里面的值相加
         const qi3 =qi2.reduce((total,num)=>{
            return total+num
         },0)
         arr.push(qi3)
         
           //  将运动数据里面的值相加
         const yun3 =yun2.reduce((total,num)=>{
            return total+num
         },0)
         arr.push(yun3)
       
          //  将珠宝数据里面的值相加
         const zhu3 =zhu2.reduce((total,num)=>{
            return total+num
         },0)
         arr.push(zhu3)
         
           //  将珠宝数据里面的值相加
         const ta3 =ta2.reduce((total,num)=>{
            return total+num
         },0)
         arr.push(ta3)
         
          
          
        
    return {
        title: {
            text: '商品总览'
        },
        tooltip: {},
        legend: {
            data:['数量']
        },
        xAxis: {
            // data: ["数","羊食","服","家","汽","运","钟",'其']
            data: ["数码电器/办公用品","食品饮料/厨房用品","服装鞋包/化妆洗护","家居家装/家用纺织","汽车配件/汽车用品","运动户外/文娱艺术","钟表珠宝/计生医疗",'其它分类']
        },
        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                start: 1,
                end: 35
            },
           
            
        ],
        yAxis: {},
        series: [{
            name: '数量',
            type: 'line',
            // 将动态的数据显示出来
            data: arr
        }]

        

     }

    }
    

    
    render() {
        // 结构赋值
         const category =  this.state
        
        return (
           <div>
 
            <Card title="折线图">
         <ReactEcharts option={this.barOption(category)}/>
            </Card>
           </div>
        );
    }
}

export default Line;