const whitelist = {     //声明了一个白名单
	'/pages/home/index': 'home',
	'/pages/mine/index': 'mine',
}
const tabbar = [
	{
		aliasPath:'/',
		path: "/pages/home/index",
		name:'home'
	},
	{
		aliasPath:'/mine',
		path: "/pages/mine/index",
		name:'mine'
	},
	{
		aliasPath:'/404',
		path: '/pages/test/404',
		name:'404'
	},
	{
		path: '*',
		name: 'middle',
		redirect:to=>{
			if(name){
				return {name}
			};
			return {name:'404'}
		}
	}
];

export default tabbar;