const myRouters =[
	  {
		path: '/klUpload',
	    meta: {
	      title: ''
	    },
	    component:resolve => require(['../lib/components/kl-upload'], resolve),
	},
]

export default myRouters;