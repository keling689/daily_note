<template>
  <div class="progress-query">
      <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>业务进度查询</header-title>
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
          				<!--<router-link :to="{ path: 'personmsg' }">
          			  	<b>我的个人资料</b>
				       </router-link>-->
          				</h4>
          				<p><span>积分：</span>520</p>
          			</div>
          		</div>          		
          	</div>
          </div>
        </div>
         <div class="row">
          <div class="col-100 query">
          	<span>身份证/手机号：</span><input type="text" /> <m-button size="small">查询</m-button>
          </div>
        </div>
        <div class="row">
          <div class="col-100">
	  <table border="0" width="100%">
			  <tr>
			  	<th>业务类型</th>
			    <th>业主名称</th>
			    <th>用水地址</th>
			    <th>状态</th>
			  </tr>
			  <tr>
			    <td>类型1</td>
			    <td>业主1</td>
			    <td>地址1</td>
			    <td>状态</td>
			  </tr>
			    <tr>
			    <td>类型1</td>
			    <td>业主1</td>
			    <td>地址1</td>
			    <td>状态</td>
			  </tr>
			    <tr>
			    <td>类型1</td>
			    <td>业主1</td>
			    <td>地址1</td>
			    <td>状态</td>
			  </tr>
			    <tr>
			    <td>类型1</td>
			    <td>业主1</td>
			    <td>地址1</td>
			    <td>状态</td>
			  </tr>
			</table>
          </div>
        </div>
       </div>
     
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

	}
}
</script>

<style scoped lang="less">
.progress-query{
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
								    		background: url('../../../../project/assets/img/right-arrow.png') no-repeat;
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
								    		background: url('../../../../project/assets/img/coin.png') no-repeat;
								    		background-position: left bottom;
								    		background-size:14px ;
								    	}
								    }
						    }

							}
		}
	table{
				th{
					background: #51A5E8;
					color: #fff;
					padding: .2rem;
				}
				td{
					text-align: center;
					border-bottom: 1px solid #00B4C2;
					padding: .2rem;
				}
			}
	
	}
	.query{
		padding-bottom: .25rem;
		span{
			font-size: .8rem;
		}
		input{
			width: 45%;
		}
	}
}
</style>
