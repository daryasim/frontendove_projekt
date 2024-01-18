<template>
	<section id="sponsors" class="parallax-section">
		<div>
			<div class="section-title">
				<h2>Our Sponsors</h2>
				<p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.</p>
			</div>
		</div>
		<div class="d-flex justify-center">
			<v-card v-for="sponsor in sponsors" :key="sponsor.id" class="mx-auto" max-width="350">
				<v-img :src="sponsor.image" height="200px" cover></v-img>

				<v-card-title>
					{{ sponsor.title }}
				</v-card-title>

				<v-card-subtitle>
					{{ sponsor.subtitle }}
				</v-card-subtitle>

				<v-card-actions>
					<v-btn color="orange-lighten-2" variant="text" @click="buttonDetail(sponsor)">
						Learn more
					</v-btn>

					<v-spacer></v-spacer>
				</v-card-actions>

				<v-expand-transition>
					<v-card v-show="sponsor.show" class="v-card--reveal" style="height: 100%;">
						<v-card-text>
							{{ sponsor.description }}
						</v-card-text>
						<v-card-actions class="pt-0">
							<v-btn variant="text" color="teal-accent-4" @click="buttonDetail(sponsor)">
								Close
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-expand-transition>
			</v-card>
		</div>
	</section>
</template>

<script>
import sponsors from '@/assets/sponsors.json';

export default {
	data() {
		return {
			sponsors: sponsors.map(sponsor => ({ ...sponsor, show: false })),
		};
	},
	methods: {
		buttonDetail(sponsor) {
			sponsor.show = !sponsor.show;
		},
	},
};
</script>

<style scoped>
.d-flex {
	display: flex;
}

.justify-center {
	justify-content: center;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
