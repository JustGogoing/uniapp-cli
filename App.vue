<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
    onError:function(err){
      console.log(err);
    },
    globalData:{
      API: process.env.NODE_ENV === "development" ? "http://192.168.0.1:8080" : "http://192.168.0.1:8080"
    }
	}
</script>

<style>
	/*每个页面公共css */
</style>
