<template>
	<Header></Header>
	<!-- =========================
   REVIEW SECTION   
============================== -->
	<section id="contact" class="parallax-section">
		<div class="container">
			<div class="row">

				<div class="wow fadeInUp col-md-offset-1 col-md-5 col-sm-6" data-wow-delay="0.6s">
					<div class="contact_des">
						<h3>Let us know what you thought!</h3>
						<Review v-for="review in ReviewStore.reviews"
							:key="review.id"
							:review="review"> </Review>
					</div>
				</div>

				<div class="wow fadeInUp col-md-5 col-sm-6" data-wow-delay="0.9s">
					<div class="contact_detail">
						<div class="section-title">
							<h2>Leave review</h2>
						</div>
						<form @submit.prevent="ReviewStore.addReview(name, text); name = ''; text = ''" action="#" method="post">
							<input v-model="name" name="name" type="text" class="form-control" id="name" placeholder="Name">
							<textarea v-model="text" name="message" rows="5" class="form-control" id="message"
								placeholder="Message"></textarea>
							<div class="col-md-6 col-sm-10">
								<input type="submit" class="form-control" id="submit" value="SEND">
							</div>
						</form>
					</div>
				</div>

			</div>
		</div>
	</section>
	<Footer></Footer>
</template>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Review from '../components/Review.vue';
import { useReviewStore } from "@/stores/reviews.js";
export default {
	components: { Header, Footer, Review },
	data: () => ({
		ReviewStore: useReviewStore(),
		name: '',
		text: '',
	}),
}
</script>