<template>
	<div>
		<Header></Header>

		<section id="program" class="parallax-section">
			<div class="container">
				<div class="row">
					<div class="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="0.6s">
						<div class="section-title">
							<h2>Our Programs</h2>
							<p>
								Quisque ut libero sapien. Integer tellus nisl, efficitur sed
								dolor at, vehicula finibus massa. Sed tincidunt metus sed
								eleifend suscipit.
							</p>
						</div>
					</div>
					<div class="wow fadeInUp col-md-10 col-sm-10" data-wow-delay="0.9s">
						<ul class="nav nav-tabs" role="tablist">
							<li v-for="day in days" :key="day.id" :class="{ 'active': activeDay === day.slug }">
								<router-link
								:to="{ name: 'detail', params: { slug: day.slug } }" role="tab" data-toggle="tab"
								:aria-controls="day.slug" >
								{{ day.name }}
							</router-link>
							</li>
						</ul>
					</div>
					<ProgramDetail :selectedDay="selectedDay"></ProgramDetail>
				</div>
			</div>
		</section>


		<Footer></Footer>
	</div>
</template>
  
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ProgramDetail from '../components/Programs.vue';
import dataDays from '../assets/programs.json';

export default {
	components: {Header,Footer,ProgramDetail,},
	data() {
		return {
			days: dataDays.days,
			activeDay: null,
			selectedDay: null,
		};
	},
	watch: {
		$route(to, from) {
			this.activeDay = to.params.slug;
			this.selectedDay = this.days.find((day) => day.slug === to.params.slug);
		},
	},
	created() {
		this.activeDay = this.$route.params.slug;
		this.selectedDay = this.days.find((day) => day.slug === this.$route.params.slug);
	},
};
</script>
