 <template>
 	<div class="water-query">
    <page-header>
    <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
    <header-title>水费查缴</header-title>
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
	          				<router-link :to="{ path: 'fastpay' }">
	          			  	<b>无需绑定、快速代缴</b>
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
	       			<list>
	        			<list-item :link="false">
	          			<div class="item-content">
	            			<div class="item-title-row">
				              <div class="item-title">
				              	<img src="../../../assets/images/home/contacts.png" width="20" >
				              	用户编号：100100000000
				              </div>
	            			</div>
	            				<!--<img src="../../../assets/images/home/home.png" width="30" >-->
				            <div class="item-title">
				            	<img src="../../../assets/images/home/home.png" width="20" >
				              	用户地址：步埠路39号
				            </div>
	          			</div>
			            <div class="item-media">
			          		<router-link :to="{ path: 'bill' }">
				          	  <m-button size="small" :round="true">
			          			  	查缴
							        <icon icon="link"></icon>
				          	  </m-button>
			          	  </router-link>
			          	</div>
	        			</list-item>
					      <list-item :link="false">
				          <div class="item-content">
				            <div class="item-title-row">
				              <div class="item-title">
				              	<img src="../../../assets/images/home/contacts.png" width="20" >
				              	用户编号：100100000000
				              </div>
				            </div>
				            <div class="item-title">
				            	<img src="../../../assets/images/home/home.png" width="20" >
				              	用户地址：步埠路39号
				            </div>
				          </div>
			            <div class="item-media">
			          		<router-link :to="{ path: 'bill' }">
					          	<m-button size="small" :round="true">
				          			  	查缴
								      <icon icon="link"></icon>
					          	</m-button>
			          	  </router-link>
			          	</div>
					      </list-item>
			         	<list-item :link="false">
			          	<div class="item-content">
			            	<div class="item-title-row">
				              <div class="item-title">
				              	<img src="../../../assets/images/home/contacts.png" width="20" >
				              	用户编号：100100000000
				              </div>
			            	</div>
				            <div class="item-title">
				            	<img src="../../../assets/images/home/home.png" width="20" >
				              	用户地址：步埠路39号
				            </div>
			          	</div>
				          <div class="item-media">
			          		<router-link :to="{ path: 'bill' }">
					          	<m-button size="small" :round="true">
				          			  	查缴
								      <icon icon="link"></icon>
					          	</m-button>
			          	  </router-link>
				          </div>
			      		</list-item>
	      			</list>
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
  mounted(){

      },
	components:{

	},
	methods:{
		
	},
	watch:{
	}
}
</script>

<style scoped lang="less">
.water-query{
	.col-100{
		.user-card{
			border-radius: 10px;
			padding: 5px 0 20px 5px;
			background-size:100%;
			&:after {
		    display: block;
		    width: 100%;
		    height: 100%;
		    content: "";
		  }
	    .card-header{
	    	.img{
					float:left
				}
				a{
					float:right;
					b{
						font-size: 16px;
						font-weight: normal;
						text-decoration:underline;
					}
				}
	    }
	    .card-content{
	    	border-bottom: 1px solid #2c1212a1;
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
			    		background-size:14px;
			    	}
			    }
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
		  }
		}
		.list{
			.item-media{
				margin-right: 10px;
				width: 20%;
				.pay-button{
					font-size: 18px;
					background: blue;
					height: 100%;
					width: 100%;
				}
			}
			.item-content {
				.item-title {
					height: 1.6rem;
					line-height: 1.6rem;
					img{
						  position: relative;
    					top: .2rem;		
					}
				}
			}
		}
	}
}
</style>
