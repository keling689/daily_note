<template>
  <div class="water-analysis">
   <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>用水分析</header-title>
    </page-header>
    <page-content>
    <div class="content-padded">
        <div class="row">
          <div class="col-100">
          	<div class="user-card">
          			<div class="card-header">
          			<img :src="header" alt="" width="35%"/>
          			  <!--<router-link :to="{ path: 'page' }">
          			  	<b>无需绑定、快速代缴</b>
				        <icon icon="link"></icon>
				       </router-link>-->
          	</div>
          	<div class="card-content">
          		<ul>
          			<li v-for="item in list">
          				<b>{{item.title}}:</b>
          				<span>{{item.content }}</span>
          			</li>
          		</ul>
          		<!--<a href="#">
			          	  <m-button size="small" :round="true" type="white">
		          			  	切换用户
			          	  </m-button>
          			</a>-->
          		<ol>
          			
          			<li v-for="item in buttons">
          					 <router-link :to="{ path: '' }">
			          	  <m-button size="small" :round="true" type="white">
		          			  	{{item.name}}
			          	  </m-button>
	          	   </router-link>
	          	   </li>
          		</ol>
          	</div>
          </div>
        </div>
        </div>
       </div>
        <div class="row">
          <div class="col-100">
          	<div id="myChart" :style="{width: '400px', height: '300px'}"></div>
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
					title:'用户名称',
					content:'*胖子'
				},
					{
					title:'用户地址',
					content:'步埠路39号'
				},
				
					{
					title:'所属水司',
					content:'梧州水司'
				}	
				],
				buttons:[
				{
							name:'切换用户'
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
    mounted(){
        this.drawLine();
    },
	methods:{
		drawLine(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '用水分析图' },
                tooltip: {},
                xAxis: {
                    data: ["2018.1","2018.2","2018.3","2018.4","2018.5","2018.6"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
            }
	}
}
</script>

<style scoped lang="less">
.water-analysis{
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
						    		b{
						    			font-weight: 300;
						    		}
						    		span{
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
						    		padding: 7px;
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