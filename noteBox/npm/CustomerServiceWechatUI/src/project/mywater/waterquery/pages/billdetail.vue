<template>
	<div class="bill-detail">
      <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>账单详情</header-title>
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
          		</ul>
          	</div>
          </div>
        </div>
       </div>
       <div class="row">
          <div class="col-100">
     		<img :src="billDetail" alt="" width="100%"/>
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
				billDetail:require('@/project/assets/img/billDetail.png'),
				list:[
				{
					title:'用户编号',
					content:'1001111'
				},
					{
					title:'用户地址',
					content:'步埠路39号'
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
.bill-detail{
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