import EN_US_framework_lang from './en-us/framework.language.js'
import ZH_CN_framework_lang from './zh-cn/framework.language.js'

let en_us_lang = {
	framework:EN_US_framework_lang,
}
let zh_cn_lang = {
	framework:ZH_CN_framework_lang,
}

let locale;
let langFile;//国际化文件
let i18nPlugin = {};//导出的国际化插件
document.cookie.split('; ').forEach((coo,index) => {
	if(coo.split('=')[0] === 'locale'){
		locale = coo.split('=')[1];
	}
});

if(locale){
	langFile = eval(`${locale.replace('-','_')}_lang`);
}else{
	//默认导出中文
	langFile = zh_cn_lang;
}

i18nPlugin.install = function(Vue){
	Vue.prototype.$i18n = langFile;
}

export default i18nPlugin;
