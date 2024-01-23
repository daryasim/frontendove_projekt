<template>
	<div>
		<Header></Header>
		<!-- REVIEW SECTION -->
		<section id="contact" class="parallax-section">
			<div class="container">
				<div class="row">
					<div class=" fadeInUp col-md-offset-1 col-md-5 col-sm-6" data-wow-delay="0.6s">
						<div class="contact_des">
							<h3>Let us know what you thought!</h3>
							<Review v-for="review in ReviewStore.reviews" :key="review.id" :review="review"> </Review>
						</div>
					</div>

					<div class=" fadeInUp col-md-5 col-sm-6" data-wow-delay="0.9s">
						<div class="contact_detail">
							<div class="section-title">
								<h2>Leave review</h2>
							</div>
							<v-form @submit.prevent="submitForm" ref="form" v-model="valid" lazy-validation>
								<v-container>
									<v-row>
										<v-col cols="12" sm="6">
											<v-text-field v-model="name" label="Name" :rules="rules"></v-text-field>
										</v-col>
										<v-col cols="12" sm="6">
											<v-text-field v-model="rating" label="Rating" type="number" min="1" max="5"
												:rules="rules"></v-text-field>
										</v-col>
									</v-row>
									<v-row>
										<v-col cols="12">
											<v-textarea clearable v-model="text" label="Message" rows="5"
												></v-textarea>
										</v-col>
									</v-row>
									<v-row>
										<v-col cols="12">
											<v-btn type="submit" color="primary" :disabled="!valid">SEND</v-btn>
										</v-col>
									</v-row>
								</v-container>
							</v-form>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Review from '../components/Review.vue';
import { useReviewStore } from "@/stores/reviews.js";

export default {
	components: { Header, Footer, Review },
	data: () => ({
		valid: true,
		ReviewStore: useReviewStore(),
		name: '',
		text: '',
		rating: '',
		rules: [ v => !!v || 'Field is required',
        ],
	}),
	methods: {
		submitForm() {
			
				this.ReviewStore.addReview(this.name, this.text, this.rating);
				this.name = '';
				this.text = '';
				this.rating = '';
			
		},
	},
};
</script>
