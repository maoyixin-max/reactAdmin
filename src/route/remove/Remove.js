import React, {Component} from 'react'
import List from './List'
import data from '../../utils/mock.json'
import {adminDate} from '../../api/ajaxApi'

class Remove extends Component {
    componentDidMount(){
      adminDate().then((res)=>{
         this.setState({
            data:res.data
         })
      })
    }
    constructor() {
        super();
        this.state = {
            data:[],
            dataList:[],
            pageConfig: {
                totalPage: data.length //总条数
            }
        }
        this.getCurrentPage = this.getCurrentPage.bind(this)
    }
    getCurrentPage(currentPage) {
 
        
        this.setState({
            dataList:data[currentPage-1].name
        })
    }
    render() {
        console.log(this.state.data);
        
        return (
            <div>
                <div style={{padding:'0 300px'}}>
                    {this.state.dataList}
                </div>
                <List pageConfig={this.state.pageConfig}
                               pageCallbackFn={this.getCurrentPage}/>
            </div>

        )
    }
}
export default Remove
