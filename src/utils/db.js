


const list =[
    {
        title:'首页',
        key:'/home',
        icon:'PieChartOutlined '

    },
    {
        title:'商品',
        key:'/products',
        icon:'MailOutlined',
        children: [
            {
                title:'库存信息管理',
             key:'/goods',
            icon:'MailOutlined',
            },
            {
                title:' 商品信息录用',
                key:'/add',
               icon:'MailOutlined',
            },
        ]

    },
    {
        title:'联系管理员',
        key:'/touch',
        icon:'AppstoreOutlined'
    },
    // {
    //     title:'添加人物权限',
    //     key:'/parsonage',
    //     icon:'PieChartOutlined ' 
    // },

    {
        title:'图形',
        key:'/ea',
        icon:'AreaChartOutlined ',
        children:[
            {
          title:'柱状图',
            key:'/bar',
           icon:'AreaChartOutlined',

            },
            {
                title:'折线图',
            key:'/line',
           icon:'AreaChartOutlined',
            },
            {
                title:'饼图',
                key:'/pie',
               icon:'AreaChartOutlined',
            }

        ] 
    },
    {
        title:'退出登录',
      key:'/remove',
        icon:'PieChartOutlined'
    }
]

export default list