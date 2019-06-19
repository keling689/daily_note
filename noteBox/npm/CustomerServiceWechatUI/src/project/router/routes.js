import Index from '@/project/demos/Index'
//import WaterQuery from '@/project/mywater/waterquery/index'
//console.log(Index)

const myRoutes = [
	/*
	 * 0、vum框架
	 */
  {
    path: '/home',
      meta: {
        title: 'vm主页'
      },
      component:Index,
  },
    /*
     * 1、我的用水模块路由
     */
//水费查缴模块路由
    {
    path: '/waterquery',
      meta: {
        title: '水费查缴'
      },
      component:resolve => require(['@/project/mywater/waterquery/index'], resolve),
	},
	 {
    path: '/bill',
      meta: {
        title: '账单'
      },
      component:resolve => require(['@/project/mywater/waterquery/pages/bill'], resolve),
	},
	 {
    path: '/fastpay',
      meta: {
        title: '快速缴费'
      },
      component:resolve => require(['@/project/mywater/waterquery/pages/fastpay.vue'], resolve),
	},
		 {
    path: '/pay',
      meta: {
        title: '缴费'
      },
      component:resolve => require(['@/project/mywater/waterquery/pages/pay.vue'], resolve),
	},
		 {
    path: '/recharge',
      meta: {
        title: '快速缴费'
      },
      component:resolve => require(['@/project/mywater/waterquery/pages/recharge.vue'], resolve),
	},
		 {
    path: '/billdetail',
      meta: {
        title: '快速缴费'
      },
      component:resolve => require(['@/project/mywater/waterquery/pages/billdetail.vue'], resolve),
	},
//电子发票模块路由	
	 {
    path: '/eleinvoices',
      meta: {
        title: '电子发票'
      },
      component:resolve => require(['@/project/mywater/eleinvoices/index'], resolve),
	},
	 {
    path: '/invoicesDetail',
      meta: {
        title: '电子发票'
      },
      component:resolve => require(['@/project/mywater/eleinvoices/pages/invoicesDetail.vue'], resolve),
	},
	//业务办理模块路由	
	 {
    path: '/businesshand',
      meta: {
        title: '业务办理'
      },
      component:resolve => require(['@/project/mywater/businesshand/index'], resolve),
	},
	 {
    path: '/peopleApply',
      meta: {
        title: '居民用水申请'
      },
      component:resolve => require(['@/project/mywater/businesshand/pages/peopleApply.vue'], resolve),
	},
	 {
    path: '/compApply',
      meta: {
        title: '企业用水申请'
      },
      component:resolve => require(['@/project/mywater/businesshand/pages/compApply.vue'], resolve),
	},
	 {
    path: '/progressQuery',
      meta: {
        title: '业务进度查询'
      },
      component:resolve => require(['@/project/mywater/businesshand/pages/progressQuery.vue'], resolve),
	},
	//个人中心模块路由	
	 {
    path: '/personalcenter',
      meta: {
        title: '个人中心'
      },
      component:resolve => require(['@/project/mywater/personalcenter/index'], resolve),
	},
	 {
    path: '/personmsg',
      meta: {
        title: '个人信息'
      },
      component:resolve => require(['@/project/mywater/personalcenter/pages/personmsg.vue'], resolve),
	},
	 {
    path: '/accountBind',
      meta: {
        title: '账号绑定'
      },
      component:resolve => require(['@/project/mywater/personalcenter/pages/accountBind.vue'], resolve),
	},
	 {
    path: '/waterAnalysis',
      meta: {
        title: '用水分析'
      },
      component:resolve => require(['@/project/mywater/personalcenter/pages/waterAnalysis.vue'], resolve),
	},
	 {
    path: '/newsFeeds',
      meta: {
        title: '消息订阅'
      },
      component:resolve => require(['@/project/mywater/personalcenter/pages/newsFeeds.vue'], resolve),
	},
	 {
    path: '/contacts',
      meta: {
        title: '联系人'
      },
      component:resolve => require(['@/project/mywater/personalcenter/pages/contacts'], resolve),
	},
	 /*
     * 2、公共服务模块路由
     */
    {
    path: '/salesNetwork',
      meta: {
        title: '营业网点'
      },
      component:resolve => require(['@/project/comserver/salesNetwork'], resolve),
	},
	{
    path: '/waterPriceInfo',
      meta: {
        title: '水价信息'
      },
      component:resolve => require(['@/project/comserver/waterPriceInfo'], resolve),
	},
	
	{
    path: '/qualityReport',
      meta: {
        title: '水质报告'
      },
      component:resolve => require(['@/project/comserver/qualityReport'], resolve),
	},
	
	{
    path: '/announcemen',
      meta: {
        title: '通知公告'
      },
      component:resolve => require(['@/project/comserver/announcemen'], resolve),
	},
	 {
    path: '/gdhInfo',
      meta: {
        title: '粤海资 讯' 
      },
      component:resolve => require(['@/project/comserver/gdhInfo'], resolve),
	},
	 /*
     * 3、更多精彩
     */
	{
    path: '/complaintreport',
      meta: {
        title: '投诉举报'
      },
      component:resolve => require(['@/project/moresurprise/complaintreport.vue'], resolve),
	},
		 {
    path: '/leakandrepairs',
      meta: {
        title: '报修/报漏'
      },
      component:resolve => require(['@/project/moresurprise/leakandrepairs.vue'], resolve),
	},
	 {
    path: '/intelservice',
      meta: {
        title: '智慧客服'
      },
      component:resolve => require(['@/project/moresurprise/intelservice'], resolve),
	},
		 {
    path: '/thePipe',
      meta: {
        title: '水管家'
      },
      component:resolve => require(['@/project/moresurprise/thePipe.vue'], resolve),
	},
]

export default myRoutes
