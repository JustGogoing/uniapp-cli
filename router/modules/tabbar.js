const whitelist = {     //声明了一个tab的白名单
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
            const name = whitelist[to.path];
            return name ? name : {name:'404'}
		}
	}
];

export default tabbar;