<template>
	<div class="water-price-info">
      <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>水价信息</header-title>
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
		    		<img :src="waterprice" alt="" width="100%"/>
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
				waterprice:require('@/project/assets/img/shuijia.png'),
		}
	},
	}
</script>

<style scoped lang="less">
.water-price-info{
	.content-padded{
		margin:0;
		.list{
			margin: 0;
		}
	}
	
}
</style>