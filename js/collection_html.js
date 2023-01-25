document.write('<div id="root"><div class="container"><!-- 一个ani是一部作品 --><li class="ani" v-for="a in collection_data" :key="a.id"><div class="img_d"><img class="animation_img" :src="a.img_src"></div><div class="ani_info"><!-- {{a.name}} --><p class="ani_p" v-text="a.name"></p><p class="ani_p" v-text="a.author"></p><p class="ani_p" v-text="a.element"></p><p class="ani_p" v-text="a.lines"></p><p class="ani_p" v-text="a.time"></p><p class="ani_p" v-text="a.score"></p></div></li></div></div>');

//展开格式：
// <div id="root">
// 	<div class="container">
// 		<!-- 一个ani是一部作品 -->
// 		<li class="ani" v-for="a in animation_data" :key="a.id">
// 			<div class="img_d">
// 				<img class="animation_img" :src="a.img_src">
// 			</div>
// 			<div class="ani_info">
// 			<!-- {{a.name}} -->
// 				<p class="ani_p" v-text="a.name"></p>
// 				<p class="ani_p" v-text="a.author"></p>
// 				<p class="ani_p" v-text="a.element"></p>
// 				<p class="ani_p" v-text="a.lines"></p>
// 				<p class="ani_p" v-text="a.time"></p>
// 				<p class="ani_p" v-text="a.score"></p>
// 			</div>
// 		</li>
// 	</div>
// </div>