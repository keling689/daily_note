import klUpload from './components/kl-upload'

const components = {
	install(Vue){
		Vue.component('kl-upload',klUpload)
	}
}
if(typeof window!=="undefined"&&window.Vue){
	window.Vue.use(components)
}

export default components