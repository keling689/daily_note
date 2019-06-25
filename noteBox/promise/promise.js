;
var a=0;
console.log(a)
class MyPromise{
	constructor(excutor) {
		let self = this;
	    this.status = "pending"
		this.value = undefined;
		this.reason = undefined;
		this.fulfilledCB = [];
		this.rejectedCb = [];
		
		let resolve = function(data){
			if(data.then!==null&&(typeof data.then == "object" || typeof data.then == "function")){
				return data.then()
			}
			
			self.status = "fulfilled";
			self.value = data;
			setTimeout(()=>{
				self.fulfilledCB.forEach(fn=>{
					fn()
				})
			})
			
		}
		let reject = function(err){
			self.status = "rejected";
			self.reason = err;
			setTimeout(()=>{
				self.rejectedCb.forEach(fn=>{
					fn()
				})
			})
		}
		try{
			excutor(resolve,reject)
		}catch(e){
			throw new Error("请传入函数！")
			//TODO handle the exception
		}
		
	}
	then(done,fail){
		let promise2;
		let resolvePromise = function(promise2,x,resolve,reject){
			if(promise2 == x) throw new Error("循环调用！")
			if(typeof x == "function" || typeof x == "object" && x!==null){
				let then = x.then;
				if(typeof then == "function"){
					try{
						then.call(x,res=>{
							resolveMyPromise(promise2,res,resolve,reject)
						},err=>{
							reject(err)
						})
					}catch(e){
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
			try{
				let x = done(self.value);
				promise2 = new MyPromise((resolve,reject)=>{
					resolvePromise(promise2,x,resolve,reject)
				})
			}catch(e){
				//TODO handle the exception
				throw new Error("成功函数有误!")
			}
		}
	}
}
var demo = new MyPromise((resolve,reject)=>{
	resolve(100)
})

console.dir(demo)
// module.exports.MyPromise = MyPromise;