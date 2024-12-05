document.write(`
<div id="root">
	<div class="container">
	<!-- 一个ani是一部作品 -->
		<li class="ani" v-for="a in collection_data" :key="a.id">
			<div class="img_d">
				<img class="animation_img" :src="a.img_src">
			</div>
			<div class="ani_info">
				<!-- {{a.name}} -->
				<p class="ani_p" v-text="a.name"></p>
				<p class="ani_p" v-text="a.author"></p>
				<p class="ani_p" v-text="a.element"></p>
				<p class="ani_p p_line" v-html="a.lines"></p>
				<p class="ani_p" v-text="a.time"></p>
				<p class="ani_p" v-text="a.score"></p>
			</div>
			<div class="ani_comment">
				<p style="margin-bottom:0;text-decoration:underline;" v-text="a.comment==null?'':'简评：'"></p>
				<p style="margin-left:20px;" v-text="a.comment"></p>
			</div>
		</li>
	</div>
</div>`);
//document.write('<div id="root"><div class="coll-buttons"><button id="coll-year-all" class="coll-year" v-on:click="collButtonClick(e)">ALL</button><button id="coll-year-2022" class="coll-year" v-on:click="collButtonClick(e)">2022</button><button id="coll-year-2023" class="coll-year" v-on:click="collButtonClick(e)">2023</button></div><div class="container"><!-- 一个ani是一部作品 --><li class="ani" v-for="a in collection_data" :key="a.id" v-show="a.isShow"><div class="img_d"><img class="animation_img" :src="a.img_src"></div><div class="ani_info"><!-- {{a.name}} --><p class="ani_p" v-text="a.name"></p><p class="ani_p" v-text="a.author"></p><p class="ani_p" v-text="a.element"></p><p class="ani_p" v-text="a.lines"></p><p class="ani_p" v-text="a.time"></p><p class="ani_p" v-text="a.score"></p></div></li></div></div>');


// function collButtonClick(e){
// 	console.log(e.value)
// }

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