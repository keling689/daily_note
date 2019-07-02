
class MyPromise{
	constructor(excutor) {
		let self = this;
	    this.status = "pending"
		this.value = undefined;
		this.reason = undefined;
		this.fulfilledCB = [];
		this.rejectedCb = [];
		
		let resolve = function(data){
			// if (value.then !== null && (typeof value.then === 'object' || typeof value.then === 'function')) 
			// return value.then(resolve, reject)
			
			if(data.then!==null&&(typeof data.then == "object" || typeof data.then == "function"))
			return data.then(resolve, reject)
				
			setTimeout(()=>{
				if(self.status == "pending"){
					self.status = "fulfilled";
					self.value = data;
					self.fulfilledCB.forEach(fn=>{
						fn()
					})
				}
				
			})
			
		}
		let reject = function(err){
			setTimeout(()=>{
				if(self.status=="pending"){
					self.status = "rejected";
					self.reason = err;
					self.rejectedCb.forEach(fn=>{
						fn()
					})
				}
				
			})
		}
		try{
			excutor(resolve,reject)
		}catch(e){
			throw new Error("请传入函数！")
			//TODO handle the exception
		}
		
	}
	then(done =value => value,fail = reson => {
					throw reason
				}){
		let promise2;
		let self = this;
		let isCalled = false;
		let resolvePromise = function(promise2,x,resolve,reject){
			if(promise2 == x) throw new Error("循环调用！");
			if(x instanceof MyPromise){
				if(x.status == "pending"){
					x.then(y=>{
						resolvePromise(promise2,y,resolve,reject)
					})
				}else{
					x.then(resolve,reject)
				}
			}
			if(typeof x == "function" || typeof x == "object" && x!==null){	
					let then = x.then;
				if(typeof then == "function"){
				
					try{
						then.call(x,res=>{
							if(isCalled) return
							isCalled = true
							resolvePromise(promise2,res,resolve,reject)
						},err=>{
							if(isCalled) return
							isCalled = true
							reject(err)
						})
					}catch(e){
						if(isCalled) return
						isCalled = true
						reject(err)
						//TODO handle the exception
					}
				}else{
					resolve(x)
				}
			}else{
				resolve(x)
			}
		}
		if(self.status == "fulfilled"){
		return	(promise2 = new MyPromise((resolve,reject)=>{
				setTimeout(()=>{
						try{
							let x = done(self.value);
							resolvePromise(promise2,x,resolve,reject)
					}catch(e){
						//TODO handle the exception
						throw new Error("成功函数有误!")
					}
				})
			}))
		}
		if(self.status == "rejected"){
		 return	(promise2 = new MyPromise((resolve,reject)=>{				
				setTimeout(()=>{
					try{
							let x = fail(self.value);
							resolvePromise(promise2,x,resolve,reject)	
					}catch(e){
						console.log(e)
						console.dir(e)
						reject(e)
						//TODO handle the exception
						// throw new Error("成功函数有误!")
					}
				})			
			}))
			
		}
		if(self.status == "pending"){
		
			return (promise2 = new MyPromise((resolve,reject)=>{
				self.fulfilledCB.push(()=>{	
						try{
							let x = done(self.value);
							resolvePromise(promise2,x,resolve,reject)
						}catch(e){
							reject(e)
							//TODO handle the exception
							// throw new Error("失败函数有误!")
						}
					
				})
				self.rejectedCb.push(()=>{					
						try{
							let x = fail(self.reason);
							resolvePromise(promise2,x,resolve,reject)
						}catch(e){
							//TODO handle the exception
							throw new Error("错误函数有误!")
						}					
				})
			}))			
		}
	
	}
}
var demo = new MyPromise((resolve,reject)=>{
	// debugger
	if(Math.random()>0.2){
		setTimeout(()=>{
			resolve(100)
		},1000)	
	}else{
		reject(200)
	}
})
// console.dir(demo)

demo.then(res=>{
	console.log(res)
		return new MyPromise((resolve,reject)=>{	
			setTimeout(()=>{
					resolve(res+"第一次成功！")
				},1000)})		
},err=>{
	console.log("error" + err)
}).then(res=>{
	console.log(res)
},err=>{
	console.log(err)
})



