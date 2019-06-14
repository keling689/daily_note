<template>
  <div class="bill">
      <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>账单</header-title>
    </page-header>
    <page-content>
    <div class="content-padded">
        <div class="row">
          <div class="col-100">
          	<div class="user-card">
          			<div class="card-header">
          			<img :src="header" alt="" width="35%"/>
          			  <router-link :to="{  path: 'fastpay' }">
          			  	<b>无需绑定、快速代缴</b>
				        <icon icon="link"></icon>
				       </router-link>
          	</div>
          	<div class="card-content">
          		<ul>
          			<li v-for="item in list">
          				<b>{{item.title}}:</b>
          				<span>{{item.content }}</span>
          			</li>
          		</ul>
          		<ol>
          			<li v-for="item in buttons">
          					 <router-link :to="{ path: item.linkUrl }">
			          	  <m-button size="small" :round="true" type="white">
		          			  	{{item.name}}
						     <!--   <icon icon="link"></icon>-->
			          	  </m-button>
	          	   </router-link>
	          	   </li>
          		</ol>
          	</div>
          </div>
        </div>
        </div>
       </div>
       <list>
        <list-item>
          <div class="item-media">
          	<div style="width: 65px;height: 65px;line-height: 65px;text-align: center;border: 1px solid #3193F6;color:#3193F6;border-radius: 50%;font-size:2rem ;">
          		9
          	</div>
          </div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">本期水量：42</div>
              <div class="item-after">
              	<router-link :to="{ path: 'billDetail' }">
              	 	[详情]
               </router-link>
              </div>
            </div>
           
             <div class="item-title-row">
              <div class="item-title">用户区间：2018.7.13~9.13</div>
           
            </div>
              <div class="item-title-row">
              <div class="item-title">合计金额：116.7</div>
              <div class="item-after">	 <router-link :to="{ path: 'recharge' }">
			          	  <m-button size="small" :round="true" type="danger">
		          			  	缴费
						     <!--   <icon icon="link"></icon>-->
			          	  </m-button>
	          	   </router-link></div>
            </div>
          </div>
        </list-item>
         <list-item>
         	<div class="item-icon">
         		<img :src="payed" alt="" width="60%"/>
         	</div>
          <div class="item-media">
          	<div style="width: 65px;height: 65px;line-height: 65px;text-align: center;border: 1px solid #3193F6;color:#3193F6;border-radius: 50%;font-size:2rem ;">
          		7
          	</div>
          </div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">本期水量：42</div>
              <div class="item-after">
              	<router-link :to="{ path: 'billDetail' }">
              	 	[详情]
               </router-link>
              </div>
            </div>
           
         
          
             <div class="item-title-row">
              <div class="item-title">用户区间：2018.5.13~7.13</div>
           
            </div>
              <div class="item-title-row">
              <div class="item-title">合计金额：116.7</div>
              <div class="item-after">	 
			          	  <m-button size="small" :round="true" @click.native="$refs.confirm.open()">
		          			  	开票
						     <!--   <icon icon="link"></icon>-->
			          	  </m-button>
	          <confirm :title="'确认提示'" :content="'开具2018年07月发票？'" :on-ok="log" ref="confirm"></confirm>
              </div>
            </div>
          </div>
        </list-item>
         <list-item>
         	<div class="item-icon">
         		<img :src="payed" alt="" width="60%"/>
         	</div>
          <div class="item-media">
          	<div style="width: 65px;height: 65px;line-height: 65px;text-align: center;border: 1px solid #3193F6;color:#3193F6;border-radius: 50%;font-size:2rem ;">
          		7
          	</div>
          </div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">本期水量：42</div>
              <div class="item-after">
              	<router-link :to="{ path: 'billDetail' }">
              	 	[详情]
               </router-link>
              </div>
            </div>
           
         
          
             <div class="item-title-row">
              <div class="item-title">用户区间：2018.5.13~7.13</div>
           
            </div>
              <div class="item-title-row">
              <div class="item-title">合计金额：116.7</div>
              <div class="item-after">	 
              	<router-link :to="{ path: 'invoicesDetail' }">
			          	  <m-button size="small" :round="true" type="success">
		          			  	发票
						     <!--   <icon icon="link"></icon>-->
			          	  </m-button>
	          	   </router-link></div>
            </div>
          </div>
        </list-item>
      </list>
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
				payed:require('@/project/assets/img/payed.png'),
				list:[
				{
					title:'用户编号',
					content:'1001111'
				},
					{
					title:'用户地址',
					content:'步埠路39号'
				},
					{
					title:'预存余额',
					content:'0元'
				},
					{
					title:'合计应缴',
					content:'116.70元'
				}	
				],
				buttons:[
				{
							name:'切换用户',
							linkUrl:''
				},
				{
							name:'充值',
							linkUrl:'pay'
				},
				{
							name:'缴费',
							linkUrl:'recharge'
				}
				]
		}
	},
  filters: {
    dealUser: function (value) {
      if(value.length>5)
      return value.slice(0,5)+'...'
      else
        return value
    }
  },
	components:{

	},
	 methods: {
    log (m) {
      console.log(m || 'log')
    }
  }
}
</script>

<style scoped lang="less">
.bill{
	.item-icon{
		position: absolute;
		left: 50%;
		top:5%
	}
	.col-100{
		/*font-size: 14px;*/
/*		color: red;*/
		.user-card{
			border-radius: 10px;
			padding:15px;
			background: url('../../../../project/assets/img/sfcj-bg.png') no-repeat;
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
						    display: -webkit-box;
						    display: -ms-flexbox;
						    display: flex;
						    position: relative; 
						    padding-top: 10px;
						    ul{
						    	width: 60%;
						    	
						    	li{
						    		color:#fff;
						    		padding: 7px;
						    		font-weight: 300;
						    		width: 100%;
						    		b{
						    			width: 40%;
						    			font-weight: 300;
						    		}
						    		span{
						    			width: 60%;
						    			overflow: hidden;
											text-overflow:ellipsis;
											white-space: nowrap;
						    		}
						    		font-size: 15px;
						    	}
						    }
						    ol{
						    	width: 40%;
						    	li{
						    		padding: 10px;
						    		text-align: right;
						    		a{
						    			display: inline-block;
						    			color:#3193F6;
						    		}
						    		
						    	}
						    }
							}
		}
	
		
	}
}
</style>