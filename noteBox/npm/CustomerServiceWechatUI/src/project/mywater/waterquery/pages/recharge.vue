<template>
	<div class="recharge">
      <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>缴费</header-title>
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
      <list>
        <div slot="title">Checkbox List</div>
        <list-item :checkbox="true">
          <input type="checkbox" name="name" value="A">
          <div class="item-media">
          	<b style="display: inline;height: 44px;width: 44px;">
          		2018年9月        	</b>
          	<!--<img src="../../../assets/images/icon-list.png" width="44">-->
          </div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">本期水量：42</div>
            
            </div>
           <div class="item-title-row">
              <div class="item-title">小计金额：116.7元</div>
            
            </div>
          </div>
        </list-item>
        <list-item :checkbox="true">
          <input type="checkbox" name="name" value="B">
          <div class="item-media">
          	<b style="display: inline;height: 44px;width: 44px;">
          		2018年7月        	</b>
          	<!--<img src="../../../assets/images/icon-list.png" width="44">-->
          </div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">本期水量：49</div>
              
            </div>
            <div class="item-subtitle">
              小计金额：133.15元
            </div>
          </div>
        </list-item>
      </list>
          	<h3>合计应缴: <b>249.85元</b></h3>
          </div>
        </div>
           <div class="row">
          <div class="col-100"><m-button size="large">缴费</m-button></div>
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
.recharge{
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