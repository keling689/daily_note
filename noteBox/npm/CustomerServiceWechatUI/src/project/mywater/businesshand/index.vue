<template>
	<div class="business-hand">
      <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>业务办理</header-title>
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
          				</h4>
          				<p><span>积分：</span>520</p>
          			</div>
          		</div>
          	</div>
          </div>
        </div>
         <div class="row">
          <div class="col-100">
           <div class="grid-demo">
	        <div class="grids">
	          <a href="#/peopleApply" class="grid">
	            <div class="grid_icon">
	              <img src="../../../assets/images/home/person.png" alt="">
	            </div>
	            <p class="grid_label">
	              居民用水申请
	            </p>
	          </a>
	          <a href="#/compApply" class="grid">
	            <div class="grid_icon">
	              <img src="../../assets/images/home/home.png" alt="">
	            </div>
	            <p class="grid_label">
	              企业用水申请
	            </p>
	          </a>
	          <a href="#/progressQuery" class="grid">
	            <div class="grid_icon">
	              <img src="../../assets/images/home/calendar.png" alt="">
	            </div>
	            <p class="grid_label">
	             进度查询
	            </p>
	          </a>
	          <!--<a href="javascript:;" class="grid">
	            <div class="grid_icon">
	              <img src="../../assets/images/home/button.png" alt="">
	            </div>
	            <p class="grid_label">
	              Button
	            </p>
	          </a>
	          <a href="javascript:;" class="grid">
	            <div class="grid_icon">
	              <img src="../../assets/images/home/button.png" alt="">
	            </div>
	            <p class="grid_label">
	              Button
	            </p>
	          </a>
	          <a href="javascript:;" class="grid">
	            <div class="grid_icon">
	              <img src="../../assets/images/home/button.png" alt="">
	            </div>
	            <p class="grid_label">
	              Button
	            </p>
	          </a>
	          <a href="javascript:;" class="grid">
	            <div class="grid_icon">
	              <img src="../../assets/images/home/button.png" alt="">
	            </div>
	            <p class="grid_label">
	              Button
	            </p>
	          </a>
	          <a href="javascript:;" class="grid">
	            <div class="grid_icon">
	              <img src="../../assets/images/home/button.png" alt="">
	            </div>
	            <p class="grid_label">
	              Button
	            </p>
	          </a>
	          <a href="javascript:;" class="grid">
	            <div class="grid_icon">
	              <img src="../../assets/images/home/button.png" alt="">
	            </div>
	            <p class="grid_label">
	              Button
	            </p>
	          </a>-->
	        </div>
	      </div>
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
	components:{

	},
	methods:{

	}
}
</script>

<style scoped lang="less">
.business-hand{
	.col-100{
		/*font-size: 14px;*/
/*		color: red;*/
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
	}
}
</style>
