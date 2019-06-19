<template>
	<div class="kl-upload" v-if="uploadShow">
		<div class="upload-mask">
			<div class="upload-form">
				<div class="form-info">
					<div class="form-info-item">
						<span>文件集合名:</span>
						<input type="text" v-model="formData.name">
					</div>	
				</div>
				<p>
					<input type="file" id="kl-upload">
					<button>添加</button>
				</p>
				<table>
					<tr>
						<th>名称</th>
						<th>操作</th>
					</tr>
					<tr>
						<td>name1.jpg</td>
						<td><button>删除</button></td>
					</tr>
				</table>
				<div>
					<button>上传</button>
					<button>取消</button>
				</div>
			</div>	
		</div>	
	</div>
</template>

<script>
	export default{
		name:"kl-upload",
		data(){
			return {
				formData:{
					name:''
				},
				uploadShow:true
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.kl-upload{
		height: 600px;
		background: ghostwhite;
		.upload-mask{
			position: fixed;
			top:0;
			left: 0;
			height: 100vh;
			width: 100vw;
			background: rgba(0,0,0,0.5);
			padding:40px;
			box-sizing: border-box;
			.upload-form{
				width: 50%;
				background: #fff;
				height: 30%;
				margin-top: 15vh;
				margin: auto;
			}
		}
	}
</style>
