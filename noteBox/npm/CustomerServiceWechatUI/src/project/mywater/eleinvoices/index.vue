<template>
  <div class="ele-invoices">
   <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>电子发票</header-title>
    </page-header>
    <page-content>
    <div class="content-padded">
        <div class="row">
          <div class="col-100">
          	<div class="user-card">
          			<div class="card-header">
          			<img :src="header" alt="" width="35%"/>
          	</div>
          	<div class="card-content">
          		<ul>
          			<li v-for="item in list">
          				<b>{{item.title}}:</b>
          				<span>{{item.content}}</span>
          			</li>
          			<li>
          				<a href="#">
          					<m-button size="small" :round="true" type="white">
		          			  	切换用户
			          	  </m-button>
          				</a>
          			 <!--<router-link to="{ path: 'page' }">
			          	  <m-button size="small" :round="true" type="white">
		          			  	切换用户
			          	  </m-button>
	          	   </router-link>	-->
          			</li>
          		</ul>
          	</div>
          </div>
        </div>
        </div>
       </div>
       <list>
        <list-item>
          <div class="item-media">
          	<div style="width: 60px;height: 60px;line-height: 60px;text-align: center;border: 1px solid #3193F6;color:#3193F6;border-radius: 50%;font-size:2rem ;">
          		9
          	</div>
          </div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">本期水量：42</div>
      
            </div>
              <div class="item-title-row">
              <div class="item-title">合计金额：116.7</div>
              <div class="item-after">
              	<m-button @click.native="$refs.confirm.open()" size="small" :round="true">开票</m-button>
              	<!--<router-link :to="{ path: 'page' }">-->
			          	  <!--<m-button size="small" :round="true">-->
		          			  	<!--开票-->
						     <!--   <icon icon="link"></icon>-->
			          	  <!--</m-button>-->
	          	   <!--</router-link>-->
              </div>
            </div>
          </div>
        </list-item>
         <list-item>
          <div class="item-media">
          	<div style="width: 60px;height: 60px;line-height: 60px;text-align: center;border: 1px solid #3193F6;color:#3193F6;border-radius: 50%;font-size:2rem ;">
          		7
          	</div>
          </div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">本期水量：42</div>
            </div>
              <div class="item-title-row">
              <div class="item-title">合计金额：116.7</div>
              <div class="item-after">	 
              	<m-button @click.native="$refs.confirm.open()" size="small" :round="true">开票</m-button>
              </div>
            </div>
          </div>
        </list-item>
         <list-item>
        
          <div class="item-media">
          	<div style="width: 60px;height: 60px;line-height: 60px;text-align: center;border: 1px solid #3193F6;color:#3193F6;border-radius: 50%;font-size:2rem ;">
          		7
          	</div>
          </div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">本期水量：42</div>
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
      <confirm :title="'确认提示'" :content="'开具2018年07月发票？'" :on-ok="log" ref="confirm"></confirm>
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
.ele-invoices{
	.col-100{
		/*font-size: 14px;*/
/*		color: red;*/
		.user-card{
			border-radius: 10px;
			padding:15px;
			background: url('../../../project/assets/img/sfcj-bg.png') no-repeat;
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
							}
		}
	
		
	}
	
}
</style>