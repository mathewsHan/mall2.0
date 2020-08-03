import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
    {path: '/login', component: () = > import('@/views/login/index'), hidden;
:
true;
},
{
    '/404', component;
:
    () =;
>
    import('@/views/404'), hidden;
:
    true
}
,
{
    '',
        component;
:
    Layout,
        redirect;
:
    '/home',
        children;
:
    [{
        path: 'home',
        name: 'home',
        component: () = > import('@/views/home/index'),
        meta;
:
    {
        '首页', icon;
    :
        'home'
    }
}]
}
]

export const asyncRouterMap = [
    {
        path: '/pms',
        component: Layout,
        redirect: '/pms/product',
        name: 'pms',
        meta: {title: '商品', icon: 'product'},
        children: [{
            path: 'product',
            name: 'product',
            component: () = > import('@/views/pms/product/index'),
            meta;
:
{
    '商品列表', icon;
:
    'product-list'
}
},
{
    'addProduct',
        name;
:
    'addProduct',
        component;
:
    () =;
>
    import('@/views/pms/product/add'),
        meta;
:
    {
        '添加商品', icon;
    :
        'product-add'
    }
}
,
{
    'updateProduct',
        name;
:
    'updateProduct',
        component;
:
    () =;
>
    import('@/views/pms/product/update'),
        meta;
:
    {
        '修改商品', icon;
    :
        'product-add'
    }
,
    true
}
,
{
    'productCate',
        name;
:
    'productCate',
        component;
:
    () =;
>
    import('@/views/pms/productCate/index'),
        meta;
:
    {
        '商品分类', icon;
    :
        'product-cate'
    }
}
,
{
    'addProductCate',
        name;
:
    'addProductCate',
        component;
:
    () =;
>
    import('@/views/pms/productCate/add'),
        meta;
:
    {
        '添加商品分类'
    }
,
    true
}
,
{
    'updateProductCate',
        name;
:
    'updateProductCate',
        component;
:
    () =;
>
    import('@/views/pms/productCate/update'),
        meta;
:
    {
        '修改商品分类'
    }
,
    true
}
,
{
    'productAttr',
        name;
:
    'productAttr',
        component;
:
    () =;
>
    import('@/views/pms/productAttr/index'),
        meta;
:
    {
        '商品类型', icon;
    :
        'product-attr'
    }
}
,
{
    'productAttrList',
        name;
:
    'productAttrList',
        component;
:
    () =;
>
    import('@/views/pms/productAttr/productAttrList'),
        meta;
:
    {
        '商品属性列表'
    }
,
    true
}
,
{
    'addProductAttr',
        name;
:
    'addProductAttr',
        component;
:
    () =;
>
    import('@/views/pms/productAttr/addProductAttr'),
        meta;
:
    {
        '添加商品属性'
    }
,
    true
}
,
{
    'updateProductAttr',
        name;
:
    'updateProductAttr',
        component;
:
    () =;
>
    import('@/views/pms/productAttr/updateProductAttr'),
        meta;
:
    {
        '修改商品属性'
    }
,
    true
}
,
{
    'brand',
        name;
:
    'brand',
        component;
:
    () =;
>
    import('@/views/pms/brand/index'),
        meta;
:
    {
        '品牌管理', icon;
    :
        'product-brand'
    }
}
,
{
    'addBrand',
        name;
:
    'addBrand',
        component;
:
    () =;
>
    import('@/views/pms/brand/add'),
        meta;
:
    {
        '添加品牌'
    }
,
    true
}
,
{
    'updateBrand',
        name;
:
    'updateBrand',
        component;
:
    () =;
>
    import('@/views/pms/brand/update'),
        meta;
:
    {
        '编辑品牌'
    }
,
    true
}
]
},
{
    '/oms',
        component;
:
    Layout,
        redirect;
:
    '/oms/order',
        name;
:
    'oms',
        meta;
:
    {
        '订单', icon;
    :
        'order'
    }
,
    [
        {
            path: 'order',
            name: 'order',
            component: () = > import('@/views/oms/order/index'),
        meta;
:
    {
        '订单列表', icon;
    :
        'product-list'
    }
},
    {
        'orderDetail',
            name;
    :
        'orderDetail',
            component;
    :
        () =;
    >
        import('@/views/oms/order/orderDetail'),
            meta;
    :
        {
            '订单详情'
        }
    ,
        true
    }
,
    {
        'deliverOrderList',
            name;
    :
        'deliverOrderList',
            component;
    :
        () =;
    >
        import('@/views/oms/order/deliverOrderList'),
            meta;
    :
        {
            '发货列表'
        }
    ,
        true
    }
,
    {
        'orderSetting',
            name;
    :
        'orderSetting',
            component;
    :
        () =;
    >
        import('@/views/oms/order/setting'),
            meta;
    :
        {
            '订单设置', icon;
        :
            'order-setting'
        }
    }
,
    {
        'returnApply',
            name;
    :
        'returnApply',
            component;
    :
        () =;
    >
        import('@/views/oms/apply/index'),
            meta;
    :
        {
            '退货申请处理', icon;
        :
            'order-return'
        }
    }
,
    {
        'returnReason',
            name;
    :
        'returnReason',
            component;
    :
        () =;
    >
        import('@/views/oms/apply/reason'),
            meta;
    :
        {
            '退货原因设置', icon;
        :
            'order-return-reason'
        }
    }
,
    {
        'returnApplyDetail',
            name;
    :
        'returnApplyDetail',
            component;
    :
        () =;
    >
        import('@/views/oms/apply/applyDetail'),
            meta;
    :
        {
            '退货原因详情'
        }
    ,
        true
    }
]
}
,
{
    '/sms',
        component;
:
    Layout,
        redirect;
:
    '/sms/coupon',
        name;
:
    'sms',
        meta;
:
    {
        '营销', icon;
    :
        'sms'
    }
,
    [
        {
            path: 'flash',
            name: 'flash',
            component: () = > import('@/views/sms/flash/index'),
        meta;
:
    {
        '秒杀活动列表', icon;
    :
        'sms-flash'
    }
},
    {
        'flashSession',
            name;
    :
        'flashSession',
            component;
    :
        () =;
    >
        import('@/views/sms/flash/sessionList'),
            meta;
    :
        {
            '秒杀时间段列表'
        }
    ,
        true
    }
,
    {
        'selectSession',
            name;
    :
        'selectSession',
            component;
    :
        () =;
    >
        import('@/views/sms/flash/selectSessionList'),
            meta;
    :
        {
            '秒杀时间段选择'
        }
    ,
        true
    }
,
    {
        'flashProductRelation',
            name;
    :
        'flashProductRelation',
            component;
    :
        () =;
    >
        import('@/views/sms/flash/productRelationList'),
            meta;
    :
        {
            '秒杀商品列表'
        }
    ,
        true
    }
,
    {
        'coupon',
            name;
    :
        'coupon',
            component;
    :
        () =;
    >
        import('@/views/sms/coupon/index'),
            meta;
    :
        {
            '优惠券列表', icon;
        :
            'sms-coupon'
        }
    }
,
    {
        'addCoupon',
            name;
    :
        'addCoupon',
            component;
    :
        () =;
    >
        import('@/views/sms/coupon/add'),
            meta;
    :
        {
            '添加优惠券'
        }
    ,
        true
    }
,
    {
        'updateCoupon',
            name;
    :
        'updateCoupon',
            component;
    :
        () =;
    >
        import('@/views/sms/coupon/update'),
            meta;
    :
        {
            '修改优惠券'
        }
    ,
        true
    }
,
    {
        'couponHistory',
            name;
    :
        'couponHistory',
            component;
    :
        () =;
    >
        import('@/views/sms/coupon/history'),
            meta;
    :
        {
            '优惠券领取详情'
        }
    ,
        true
    }
,
    {
        'brand',
            name;
    :
        'homeBrand',
            component;
    :
        () =;
    >
        import('@/views/sms/brand/index'),
            meta;
    :
        {
            '品牌推荐', icon;
        :
            'product-brand'
        }
    }
,
    {
        'new',
            name;
    :
        'homeNew',
            component;
    :
        () =;
    >
        import('@/views/sms/new/index'),
            meta;
    :
        {
            '新品推荐', icon;
        :
            'sms-new'
        }
    }
,
    {
        'hot',
            name;
    :
        'homeHot',
            component;
    :
        () =;
    >
        import('@/views/sms/hot/index'),
            meta;
    :
        {
            '人气推荐', icon;
        :
            'sms-hot'
        }
    }
,
    {
        'subject',
            name;
    :
        'homeSubject',
            component;
    :
        () =;
    >
        import('@/views/sms/subject/index'),
            meta;
    :
        {
            '专题推荐', icon;
        :
            'sms-subject'
        }
    }
,
    {
        'advertise',
            name;
    :
        'homeAdvertise',
            component;
    :
        () =;
    >
        import('@/views/sms/advertise/index'),
            meta;
    :
        {
            '广告列表', icon;
        :
            'sms-ad'
        }
    }
,
    {
        'addAdvertise',
            name;
    :
        'addHomeAdvertise',
            component;
    :
        () =;
    >
        import('@/views/sms/advertise/add'),
            meta;
    :
        {
            '添加广告'
        }
    ,
        true
    }
,
    {
        'updateAdvertise',
            name;
    :
        'updateHomeAdvertise',
            component;
    :
        () =;
    >
        import('@/views/sms/advertise/update'),
            meta;
    :
        {
            '编辑广告'
        }
    ,
        true
    }
]
}
,
{
    '/ums',
        component;
:
    Layout,
        redirect;
:
    '/ums/admin',
        name;
:
    'ums',
        meta;
:
    {
        '权限', icon;
    :
        'ums'
    }
,
    [
        {
            path: 'admin',
            name: 'admin',
            component: () = > import('@/views/ums/admin/index'),
        meta;
:
    {
        '用户列表', icon;
    :
        'ums-admin'
    }
},
    {
        'role',
            name;
    :
        'role',
            component;
    :
        () =;
    >
        import('@/views/ums/role/index'),
            meta;
    :
        {
            '角色列表', icon;
        :
            'ums-role'
        }
    }
,
    {
        'allocMenu',
            name;
    :
        'allocMenu',
            component;
    :
        () =;
    >
        import('@/views/ums/role/allocMenu'),
            meta;
    :
        {
            '分配菜单'
        }
    ,
        true
    }
,
    {
        'allocResource',
            name;
    :
        'allocResource',
            component;
    :
        () =;
    >
        import('@/views/ums/role/allocResource'),
            meta;
    :
        {
            '分配资源'
        }
    ,
        true
    }
,
    {
        'menu',
            name;
    :
        'menu',
            component;
    :
        () =;
    >
        import('@/views/ums/menu/index'),
            meta;
    :
        {
            '菜单列表', icon;
        :
            'ums-menu'
        }
    }
,
    {
        'addMenu',
            name;
    :
        'addMenu',
            component;
    :
        () =;
    >
        import('@/views/ums/menu/add'),
            meta;
    :
        {
            '添加菜单'
        }
    ,
        true
    }
,
    {
        'updateMenu',
            name;
    :
        'updateMenu',
            component;
    :
        () =;
    >
        import('@/views/ums/menu/update'),
            meta;
    :
        {
            '修改菜单'
        }
    ,
        true
    }
,
    {
        'resource',
            name;
    :
        'resource',
            component;
    :
        () =;
    >
        import('@/views/ums/resource/index'),
            meta;
    :
        {
            '资源列表', icon;
        :
            'ums-resource'
        }
    }
,
    {
        'resourceCategory',
            name;
    :
        'resourceCategory',
            component;
    :
        () =;
    >
        import('@/views/ums/resource/categoryList'),
            meta;
    :
        {
            '资源分类'
        }
    ,
        true
    }
]
}
,
{
    '*', redirect;
:
    '/404', hidden;
:
    true
}
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () = > ({y: 0}),
    routes
:
constantRouterMap;
})

