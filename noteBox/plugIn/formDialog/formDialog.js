function FormDialog(optionObj){
	var initForm =[
		{
			name:'类别',
			type:'select',
			id:'themeId',
			option:[
				{
					value:1,
					name:'安全'
				},
				{
					value:2,
					name:'设施'
				}
			]
		},
		{
			name:'运营指标',
			type:'input',
			id:'id',
			
		},
		{
			name:'单位',
			type:'input',
			id:'unit',
			
		},
		{
			name:'周期',
			type:'input',
			id:'timeType',
			
		},
	];
	var buttonArray = [
		{
			name:'取消',
			cb:function(){
				console.log(this)
			}
		},
		{
			name:'确定',
			cb:function(){
				console.log(this)
			}
		}
	];
	this.optionObj = optionObj;
	this.HTML = '';
	this.formData = {};
	this.init();
	this.bind();
}

FormDialog.prototype={
	init:function(){	
		$(".form-dialog").remove();
		var $HTML = $('<div class="form-dialog"><div class="dialog-content"><header><span class="form-close">×</span></header><section><ul><li><label><span>类别：</span><select id="themeId" class="form-item"><option value="1">安全</option><option value="2">设施</option></select></label></li><li><label><span>运营指标：</span><input id="name" class="form-item" type="text"></label></li><li><label><span>单位：</span><input id="unit" class="form-item" type="text"></label></li><li><label><span>周期：</span><input id="timeType" class="form-item" type="text"></label></li></ul></section><footer><button class="cancel">取消</button><button class="confirm">确认</button></footer></div></div>');
		
		$HTML.append($('<style>.form-dialog{padding:20px;color:#fff;position:fixed;top:0;left:15%;width:85%;height:100%;background:rgba(0,0,0,0.5)}.form-dialog .dialog-content{height:40%;width:30%;background:#fff;padding:10px;margin:auto;margin-top:10%;position:relative}.form-dialog .dialog-content header{height:30px}.form-dialog .dialog-content header .form-close{float:right;color:#909399;height:15px;width:15px;border-radius:50%;font-size:18px;text-align:center;line-height:15px;cursor:pointer}.form-dialog .dialog-content footer{height:40px;position:absolute;bottom:0;right:0;text-align:right;width:100%}.form-dialog .dialog-content footer button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;box-sizing:border-box;outline:0;margin:0;transition:.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:6px 10px;font-size:14px;border-radius:4px;margin-right:10px}.form-dialog .dialog-content footer button:last-child{background:#409eff;color:#fff}.form-dialog .dialog-content section{height:calc(100% - 70px)}.form-dialog .dialog-content section ul{height:100%;width:100%;overflow:auto}.form-dialog .dialog-content section ul li{padding:10px;width:100%}.form-dialog .dialog-content section ul li label{width:100%;display:block}.form-dialog .dialog-content section ul li label span{width:60px;display:inline-block}.form-dialog .dialog-content section ul li label .form-item{background-color:#fff;background-image:none;border-radius:4px;border:1px solid #dcdfe6;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:30px;line-height:30px;outline:0;padding:0 15px;transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:calc(90% - 60px)}</style>'))
		this.HTML = $HTML;
		$('body').append(this.HTML)
	},
	bind:function(){
		var _this = this;
		$('.form-dialog .form-close').on('click',function(){
			_this._close()
		})
		$('.form-dialog .cancel').on('click',function(){
			_this._close()
		})
		$('.form-dialog .confirm').on('click',function(){
			var params = _this._getFormData();
			_this._submit(params)
		})
	},
	_close:function(){
		$('.form-dialog').remove()	
	},
	_getFormData:function(){
		console.log($('.form-dialog .form-item'))
		var $formItem = $('.form-dialog .form-item');
		var formData = {};
		for(var i=0;i<$formItem.length;i++){			
			formData[$formItem[i].id]=$formItem[i].value
			// $formItem[i].value = 1
		}
		console.log(formData);
		return formData	
	},
	_submit:function(params){
		   $.ajax({
		    type: "post",
		    url: "/saveOperateIndex.htm",
		    contentType: 'application/json;charset=utf-8',
		    dataType: 'json',
		    data: JSON.stringify(params),
		    success: function (res) {
				console.log(res)
			},
		    error: function (jqXHR) {
		        alert("发生错误：" + jqXHR.status);
		    }
		
		});
	}
}