import React, { Component } from 'react';
import Li  from './Li'

class Remove extends Component {

state={
    acty:[],
    pageCount:[]

}

    render() {
       
        return (
            <article>
                <div>
                <div> </div>
              
                <Li config = {{
                    totalPage:10,
                    paging(obj){
                        
                       console.log(obj);
                       
                    }
                }}></Li>
                 
                
             </div>
                
               


            </article>
        );
    }
}

export default Remove;
