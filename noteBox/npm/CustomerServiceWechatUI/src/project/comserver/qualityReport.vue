
<template>
	<div class="quality-report">
      <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>水质报告</header-title>
    </page-header>
    <page-content>
    	<div class="header-pic">
    		<img :src="fastpay" alt="" width="100%"/>
    	</div>
    	<div class="content-padded">
	        <div class="row">
	          <div class="col-100">
	          	<form-list>
	          		<form-item>
			          <div class="item-media">
			            <img :src="comp" alt="" width="30" />
			          </div>
			          <div class="item-content">
			            <div class="item-title label">所属水司：</div>
			            <div class="item-input">
			              <select>
			                <option>梧州</option>
			                <option>儋州</option>
			              </select>
			            </div>
			          </div>
			          <!-- Date -->
			        </form-item>
	          	</form-list>
	          </div>
	          <div class="col-100">
	          	<list>
			        <list-item :link="true">
			          <div class="item-media"><img :src="notePic" width="44"></div>
			          <div class="item-content">
			          	<div class="item-subtitle">
			      2018年9月水质报告
			            </div>
			            <div class="item-title-row">
			              <div class="item-title">报告报告报告报告...</div>
			              <!--<div class="item-after">After</div>-->
			            </div>
			            
			          </div>
			        </list-item>
			           <list-item :link="true">
			          <div class="item-media"><img :src="notePic" width="44"></div>
			          <div class="item-content">
			          	<div class="item-subtitle">
			      2018年9月水质报告
			            </div>
			            <div class="item-title-row">
			              <div class="item-title">报告报告报告报告...</div>
			              <!--<div class="item-after">After</div>-->
			            </div>
			            
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
				fastpay:require('@/project/assets/img/banner-pic.png'),
				comp:require('@/project/assets/images/form/i-form-name.png'),
				notePic:require('@/project/assets/images/home/modal.png'),
		}
	},
	}
</script>

<style scoped lang="less">
.quality-report{
	.content-padded{
		margin:0;
		.list{
			margin: 0;
		}
	}
	
}
</style>