import React, { Component } from 'react';

import storeUtils  from '../../utils/storeUtils'




class Hh extends Component {
    render() {
        return (
            <div style={{height: '80px' ,
                fontSize: '20px',
                textAlign:' center',
                position: 'relative' }}>
               <span
               style={{ height: '80px',
                textAlign:' center',
                fontSize: '20px',
                lineHeight: '80px',
                color: 'rgb(89, 96, 196)'}}
               > 欢迎您:{storeUtils.user.account}</span>
            </div>
        );
    }
}

export default Hh;