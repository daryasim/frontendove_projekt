
<template>
 <Header></Header>
<!-- =========================
    INTRO SECTION   
============================== -->
<section id="intro" class="parallax-section">
	<div class="container">
		<div class="row">

			<div class="col-md-12 col-sm-12">
				<h3 class="wow bounceIn" data-wow-delay="0.9s">July 22 - 26 in San Francisco, CA</h3>
				<h1 class="wow fadeInUp" data-wow-delay="1.6s">IT Conference</h1>
				<a href="#overview" class="btn btn-lg btn-default smoothScroll wow fadeInUp hidden-xs" data-wow-delay="2.3s">LEARN MORE</a>
				<router-link to="/register" class="btn btn-lg btn-danger smoothScroll wow fadeInUp" data-wow-delay="2.3s">
      REGISTER NOW
    </router-link>
			</div>


		</div>
	</div>
</section>
<!-- =========================
    OVERVIEW SECTION   
============================== -->
<section id="overview" class="parallax-section">
	<div class="container">
		<div class="row">

			<div class="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="0.6s">
				<h3>FutureTech Summit 2024 - Unleashing Innovation in the Digital Era</h3>
				<p>Join us at the FutureTech Summit 2024, where groundbreaking ideas, cutting-edge technologies, and visionary thought leaders converge to shape the future of IT. </p>
				<p>Quisque facilisis scelerisque venenatis. Nam vulputate ultricies luctus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
			</div>
					
			<div class="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="0.9s">
				<img :src="overviewimg" class="img-responsive" alt="Overview">
			</div>

		</div>
	</div>
</section>

<Sponsors></Sponsors>
<Footer></Footer>

<!-- Back top -->
<a href="#back-top" class="go-top"><i class="fa fa-angle-up"></i></a>


</template>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Sponsors from '../components/Sponsors.vue';
export default {
  components: {Header,Footer,Sponsors,},
  data() {
    return {
      overviewimg: 'images/overview-img.jpg'
    }
  }
}
</script>

