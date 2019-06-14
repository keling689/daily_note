<template>
	<div class="pay">
      <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>充值</header-title>
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
          	<ul class="money-select">
          			<li>30元</li>
          			<li>50元</li>
          			<li>80元</li>
          			<li>100元</li>
          			<li>150元</li>
          			<li>200元</li>
          			<li>300元</li>
          			<li>500元</li>
          			<li>1000元</li>
          			<li>自定义</li>
          	</ul>
          	<p>注意:重置后如有欠费将自动扣除</p>
          	<h3>充值金额: <b>500元</b></h3>
          </div>
        </div>
           <div class="row">
          <div class="col-100"><m-button size="large">充值</m-button></div>
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
					content:'0.00元'
				},
					{
					title:'欠费应缴',
					content:'0元'
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
.pay{
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
	.money-select{
		margin: 0.5rem;
		&:after{
			 content: "020"; 
			  display: block; 
			  height: 0; 
			  clear: both; 
			  visibility: hidden;  
		}
		li{
			float: left;
			width: 27%;
			height: 2rem;
			line-height: 2rem;
			text-align: center;
			margin: 3%;
			background: #E7E7E7;
			border-radius: 6px;
		}
	}
	p{
		text-align: center;
		margin: .5rem;
	}
	h3{
		padding: .5rem;
	}	
	}
	
}
</style>