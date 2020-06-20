import React, { Component } from 'react';
import './remove.scss'

export default class Li extends Component{
    constructor(props){
        super(props)

        // 设置当前页码，默认为第一页
        this.state = {
            pageCurr:1,
            pageCount:'asdsd'
           
        }
    }
    create(){
        const {
            totalPage,
        } = this.props.config;

        const {
            pageCurr,
        } = this.state;

        let pages = [];
        pages.push(<li onClick = { this.goPrev.bind(this) } key={0}>上一页</li>)
        for(let i = 1;i <= totalPage; i++){
            // 点击页码时调用 go 方法，根据 state 判断是否应用 active 样式
            pages.push(<li onClick = { this.go.bind(this,i) } className = { pageCurr === i ? 'active' : "" } key={i}>{i}</li>)
        }
        pages.push(<li onClick = { this.goNext.bind(this) } key={totalPage + 1}>下一页</li>)

        return pages;
    }
    
    // 更新 state
    go(pageCurr){
        const {
            groupCount
        } = this.state;
    
        const {
            totalPage,
            paging
        } = this.props.config


        this.setState({
            pageCurr
        })
// 处理上一页的情况
        if(pageCurr % groupCount === 1){
            this.setState({
                startPage:pageCurr
            })
        }
    
        // 处理下一页的情况
        if(pageCurr % groupCount === 0){
            this.setState({
                startPage:pageCurr - groupCount + 1
            })
        }
        setTimeout(()=>{
            paging({
                pageCurr:this.state.pageCurr,
                pageCount:this.state.pageCount
            })
        });
    }
    // 页面向前
goPrev(){
    let {
        pageCurr,
    } = this.state;

    this.go( --pageCurr )
}
// 页面向后
goNext(){
    let {
        pageCurr,
    } = this.state;

    this.go( ++pageCurr )
}



    render(){
        const Pages = this.create.bind(this)();
        const pageCurr =this.props.state

        if (pageCurr===1) {
           console.log(123);
           
        }
        return(
            <div>

                <div className = 'mian'>
                    <ul className = 'page'>
                        { Pages }
                    </ul>
                </div>
                </div>

            // <div className = 'main'>
            //     <ul className = 'page'>
            //         <li>第一页</li>
            //         <li>1</li>
            //         <li>2</li>
            //         <li>3</li>
            //         <li className = 'active'>4</li>
            //         <li>5</li>
            //         <li>6</li>
            //         <li>7</li>
            //         <li>8</li>
            //         <li>9</li>
            //         <li>10</li>
            //         <li>下一页</li>
            //     </ul>
            // </div>
        );
    }
}