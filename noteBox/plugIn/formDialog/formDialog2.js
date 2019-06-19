   function fatmmerTime(ele) {
	   console.log(ele)
            ele.jcDate({
                IcoClass: "jcDateIco",
                Event: "click",
                Speed: 100,
                Left: 0,
                Top: 28,
                format: "-",
                Timeout: 100,
            });
        };

function FormDialog(optionObj){
	this.optionObj = optionObj;
	this.initForm =optionObj.itemArr;
	this.buttonArray = optionObj.buttonArr;
	this.formData = optionObj.formData || null;
	// this.formData={"id":"A48CA55F2A32D324","name":"121","unit":"42134","timeType":"4234","themeId":"1","themeName":"安全"}
	this.themeArr = ["安全","设施","三防","供水","用电"];
	this.init();
	this.bind();
}

FormDialog.prototype={
	init:function(){	
		$(".form-dialog").remove();
		var html = '<div class="form-dialog"><div class="dialog-content"><header><span class="form-close">×</span></header><section><ul>'
		var itemData = this.initForm;
		var buttonData = this.buttonArray;
		for(var i=0;i<itemData.length;i++){
			if(itemData[i].type=="select"){
					html+='<li><label><span>'+itemData[i].name+':</span><select id="'+itemData[i].id+'" class="form-item">'
					for(var j=0;j<itemData[i].option.length;j++){
						html+= '<option value="'+itemData[i].option[j].value+'">'+itemData[i].option[j].name+'</option>'
					}
					html+='</select></label></li>'
			}else if(itemData[i].type=="input"){
				html+='<li><label><span>'+itemData[i].name+':</span><input id="'+itemData[i].id+'" class="form-item" type="text"></label></li>'
			}else if(itemData[i].type=="date"){
				html+='<li><label><span>'+itemData[i].name+':</span><input id="'+itemData[i].id+'" class="jcDateIco form-item" type="text" style="border: 1px solid rgb(204, 204, 204);"></label></li><script>fatmmerTime($("#'+itemData[i].id+'"))</script>'
			}	
		}
		html+='</ul></section><footer>'
		for(var k=0;k<buttonData.length;k++){
			html+='<button class="button" id="'+buttonData[k].id+'">'+buttonData[k].name+'</button>'
		}		
		html+='</footer></div></div>'		
		var $HTML = $(html);		
		// $HTML.append($('<style>.form-dialog{padding:20px;color:#fff;position:fixed;top:0;left:15%;width:85%;height:100%;background:rgba(0,0,0,0.5)}.form-dialog .dialog-content{height:40%;width:30%;background:#fff;padding:10px;margin:auto;margin-top:10%;position:relative}.form-dialog .dialog-content header{height:30px}.form-dialog .dialog-content header .form-close{float:right;color:#909399;height:15px;width:15px;border-radius:50%;font-size:18px;text-align:center;line-height:15px;cursor:pointer}.form-dialog .dialog-content footer{height:40px;position:absolute;bottom:0;right:0;text-align:right;width:100%}.form-dialog .dialog-content footer button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;box-sizing:border-box;outline:0;margin:0;transition:.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:6px 10px;font-size:14px;border-radius:4px;margin-right:10px}.form-dialog .dialog-content footer button:last-child{background:#409eff;color:#fff}.form-dialog .dialog-content section{height:calc(100% - 70px)}.form-dialog .dialog-content section ul{height:100%;width:100%;overflow:auto}.form-dialog .dialog-content section ul li{padding:10px;width:100%}.form-dialog .dialog-content section ul li label{width:100%;display:block}.form-dialog .dialog-content section ul li label span{width:60px;display:inline-block}.form-dialog .dialog-content section ul li label .form-item{background-color:#fff;border-radius:4px;border:1px solid #dcdfe6;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:30px;line-height:30px;outline:0;padding:0 15px;transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:calc(90% - 60px)}</style>'))
		this.HTML = $HTML;
		$('body').append(this.HTML)
	},
	bind:function(){
		var _this = this;
		$('.form-dialog .form-close').on('click',function(){
			_this.close()
		})
		this._bindButton();
		this._bindFormData();
	
	},
	close:function(){
		$('.form-dialog').remove()	
	},
	getFormData:function(){
		var $formItem = $('.form-dialog .form-item');
		var formData = {};
		for(var i=0;i<$formItem.length;i++){			
			formData[$formItem[i].id]=$formItem[i].value
			if($formItem[i].id=="themeId"){
				formData["themeName"]=this.themeArr[$formItem[i].value-1]
			}

		}
		return formData	
	},
	_bindButton(){	
		var buttonData = this.buttonArray;
		for(var i=0;i<buttonData.length;i++){
			console.log($("#"+buttonData[i].id))
			$("#"+buttonData[i].id).on('click',buttonData[i].cb.bind(this))
		}
	},
	_bindFormData(){
		var formData = this.formData;
		for (var i in formData){
			// console.log($("#"+i));
			// console.log(formData[i])
			if($("#"+i)[0]){
				$("#"+i)[0].value = formData[i]
			}
			
			
		}
	}
}



