<template>
  <div class="personal-center">
      <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>个人中心</header-title>
    </page-header>
    <page-content>
     <div class="content-padded">
        <div class="row">
          <div class="col-100">
          	<div class="user-card">
          		<div class="card-content">
          			<div class="left-img">
          					<img :src="rabbit" alt="" />
          			</div>
          			<div class="right-content">
          				<h4>{{user | dealUser}}  
          				<router-link :to="{ path: 'personmsg' }">
          			  	<b>我的个人资料</b>
				       </router-link></h4>
          				<p><span>积分：</span>520</p>
          			</div>
          		</div>          		
          	</div>
          </div>
        </div>
         <div class="row">
          <div class="col-100">
          	<div class="midle-bar">
          		<b>已绑用户</b>		
	          		 <router-link :to="{ path: 'accountBind' }">
	          			  	+
					 </router-link>
         	</div>
          </div>
        </div>
        <div class="row">
          <div class="col-100">
          	<div class="user-card-bg">
          			<div class="card-header">
          			<img :src="header" alt="" width="35%"/>
          	</div>
          	<div class="card-content">
          		<ul>
          			<li v-for="item in list">
          				<b>{{item.title}}:</b> 
          				<span v-if='item.title === "用户编号" '>
          					<router-link :to="{ path: 'bill' }">
				          	  <m-button size="small" :round="true" type="white">
			          			  	个人账单
				          	  </m-button>
		          	   </router-link>
          				</span>
          				<span>{{item.content}}</span>
          			</li>
          		</ul>
          		<ol>
          			<li>
          				<a href="#/waterAnalysis" class="bar-grid">
				            <div class="grid-icon">
				              <img src="../../assets/img/fenxi.png" alt="">
				            </div>
				            <p class="grid_label">
				              用水分析
				            </p>
				          </a>
          			</li>
          			<li>
          					<a href="#/contacts" class="bar-grid">
				            <div class="grid-icon">
				              <img src="../../assets/img/lianxiren.png" alt="">
				            </div>
				            <p class="grid_label">
				            	
				              联系人
				            </p>
				          </a>
          			</li>
          			<li>
          					<a href="#/newsFeeds" class="bar-grid">
				            <div class="grid-icon">
				              <img src="../../assets/img/xiaoxi.png" alt="">
				            </div>
				            <p class="grid_label">
				              消息订阅
				            </p>
				          </a>
          			</li>
          			<li>
          				<a href="#" class="bar-grid">
				            <div class="grid-icon" @click="$refs.confirm.open()">
				              <img src="../../assets/img/jiechu.png" alt="">
				            </div>
				            <p class="grid_label">
				              解除绑定
				            </p>
				          </a>
          			</li>
          		</ol>
          	</div>  	
          </div>
        </div>
       </div>
       </div>
      <confirm :title="'确认 提示'" :content="'解除个人绑定？'" :on-ok="log" ref="confirm"></confirm>
    </page-content>
  </div>
</template>

<script>
export default {
	data(){
		return {
		     user:"小胖子",
				header:require('@/project/assets/img/header.png'),
				rabbit:require('@/project/assets/img/rabbit.jpg'),
					list:[
				{
					title:'用户编号',
					content:'1001111'
				},
					{
					title:'用户地址',
					content:'步埠路四级39号'
				}	
				],
				buttons:[
				{
							name:'切换用户'
				},
				{
							name:'充值'
				},
				{
							name:'缴费'
				}
				]
		}
	},
  filters: {
    dealUser: function (value) {
      if(value.length>3)
      return value.slice(0,3)+'...'
      else
        return value
    }
  },
	components:{

	},
	methods:{
		log (m) {
      console.log(m || 'log')
    }
	}
}
</script>

<style scoped lang="less">
.personal-center{
	.col-100{
		.user-card{
			border-radius: 10px;
			padding: 5px 0 20px 5px;
			/*background: url('../../../project/assets/img/grzx-bg.png') no-repeat;*/
			 background-size:100%;
			 &:after {
			    display: block;
			    width: 100%;
			    height: 100%;
			    content: "";}
			    .card-header{
			    	.img{
						float:left
						}
						a{
							float:right;
							/*color: #fff;*/
							b{
								font-size: 16px;
								font-weight: normal;
								text-decoration:underline;
							}
						}
			    }
			    .card-content{
			    	border-bottom: 1px solid #e7e7e7;
				    	    width: 100%;
						    display: -webkit-box;
						    display: -ms-flexbox;
						    display: flex;
						    padding: 0 0 0 .75rem;
						    position: relative;
						    .left-img{
						    	display: -webkit-box;
							    display: -ms-flexbox;
							    display: flex;
							    -webkit-box-align: center;
							    -ms-flex-align: center;
							    align-items: center;
							    -webkit-box-pack: center;
							    -ms-flex-pack: center;
							    justify-content: center;
							    padding: .25rem 0;
							    width:30%;
								img{
								width: 100%;
						    	border-radius: 50%;
						    	overflow: hidden;
						    	/*width: 50%;*/
						    	}
						    }
						    .right-content{
						    	    margin-left: .75rem;
						    	    width: 100%;
								    position: relative;
								    padding: .4rem .75rem .4rem 0;
								    h4,p{
								    	margin: 10px 0;
								    	/*color: #fff;*/
								    }
								    h4{
								    	a{
								    		color:#3193F6;
								    		float:right;
								    		font-size: 15px;
								    		line-height: 27px;
								    		font-weight: 500;
								    		padding-right: 15px;
								    		background: url('../../../project/assets/img/right-arrow.png') no-repeat;
								    		background-position: right;
								    		background-size:9px ;
								    		b{
								    			text-decoration: underline;
								    		}
								    	}
								    }
								    p{
								    	font-size: 16px;
								    	span{
								    		padding-left: 20px;
								    		background: url('../../../project/assets/img/coin.png') no-repeat;
								    		background-position: left bottom;
								    		background-size:14px ;
								    	}
								    }
						    }

							}
		}
		.grids-small{
								.grid{
									border:none;
									.grid-icon{
										border:1px solid red;
										background: ;
									}
								}
							}
		.midle-bar{
			padding: 0 10px 0 15px;
			 	display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
			    justify-content: space-between;
			   b{
			   	font-size: 20px;
			   	line-height: 40px;
			   }
			   a{
			   	font-size: 24px;
			   	color:#fff;
			   	background: #3193F6;
			   	height: 40px;
			   	width: 40px;
			   	text-align: center;
				line-height: 40px;
				border-radius: 50%;
				/*margin-right: 10px;*/
			   }
		}
		.user-card-bg{
			margin-top: 20px;
			border-radius: 10px;
			padding:15px;
			background: url('../../../project/assets/img/sfcj-bg.png') no-repeat;
			 background-size:102%;
			 &:after {
			    display: block;
			    width: 100%;
			    height: 100%;
			    content: "";}
			    .card-header{
			    	.img{
						float:left
						}
						a{
							float:right;
							color: #fff;
							b{
								font-size: 16px;
								font-weight: normal;
								text-decoration:underline;
							}
						}
			    }
			    .card-content{
				    		width: 100%;
						    position: relative; 
						    /*padding-top: 10px;*/
						    ul{
						    	width: 100%; 	
						    	li{
						    		color:#fff;
						    		padding: 7px;
						    		font-weight: 300;
						    		b{
						    			font-weight: 300;
						    		}
						    		font-size: 15px;
						    		a{
						    			display: inline-block;
						    			color:#3193F6;
						    			float:right;
						    		}
						    	}
						    }
						    ol{
						    	padding-top:15px;
						    	overflow: hidden;
						    	width: 100%;
						    	li{
						    		float: left;
						    		width: 25%;
						    		.grid-icon{
						    			/*background: #fff;*/
						    			height: 50px;
						    			width: 58px;
						    			margin: auto;
						    			/*height: 50%;*/
						    			/*width: 50%;*/
						    			text-align: center;
						    			line-height: 50px;
						    			border-radius: 50%;
						    			img{
						    				width: 100%;
						    				vertical-align: middle;
						    			}
						    		
						    		}
						    			.grid_label{
						    				color: #fff;
						    				margin-top: 5px;
						    			}
						    	}
						    }
							}
		}
		
	}
}
</style>
