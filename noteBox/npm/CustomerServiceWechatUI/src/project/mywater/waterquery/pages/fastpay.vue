<template>
	 <div class="fast-pay">
      <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>返回</header-link>
      <header-title>快速缴费</header-title>
    </page-header>
    <page-content>
    	<div class="header-pic">
    		<img :src="fastpay" alt="" width="100%"/>
    	</div>
    	<div class="content-padded">
	        <div class="row">
	          <div class="col-100">
	          	<div class="fastpay-form">
		    		<div class="form-input">
		    		<img src="../../../assets/images/home/home.png" alt="" >
		    		<select>
              <option>肇高</option>
              <option>常平</option>
            </select>
		    		</div>
		    		<div class="form-input">
			    		<img src="../../../assets/images/home/contacts.png" alt="" >
			    		<div class="item-input">
	              <input type="text" placeholder="用户编号">
	            </div>
		    		</div>
		    		<p class="form-button"><m-button size="large" :round="true">查 询 欠 费</m-button></p>
		    	    <div class="bottom-link">
				     	<router-link :to="{ path: '' }">
						    前往绑定
				      </router-link>
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
				fastpay:require('@/project/assets/img/fastpay.png'),
		}
	},
	}
</script>

<style scoped lang="less">
.fast-pay{
	background-color: #000;
	.fastpay-form{
		position:relative;
		padding-bottom:30%;
		.form-input{
			border:1px solid #E7E7E7;
			border-radius: 800px;
			height: 2.5rem;
			line-height: 2.5rem;
			width: 90%;
			margin: auto;
			margin-top: .5rem;
			img{
				height: 65%;
				float: left;
				margin-left: .5rem;
				margin-top: .4rem;
			}
			input,select{
				float: left;
				margin-left: 1rem;
				margin-top: .4rem;
				border:none;
				outline: none;
				height: 1.7rem;
				width: 75%;
				
			}
			select{
				background: url("../../../assets/images/form/i-list-chevron-right.png") no-repeat;
				background-size: 10%;
				background-position: right center;
				  appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
			}
			
		}
		p{
			width: 90%;
			margin: auto;
			margin-top: .5rem;
			
		}
	}
	.bottom-link{
		position: absolute;
		width: 100%;
		bottom: 2%;
		text-align: center;
		a{
			display: inline-block;
			text-decoration: underline;
			color:#3193F6
		}
	}
	
}
</style>