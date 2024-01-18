<template>
	<!-- =========================
	  SPONSORS SECTION   
	============================== -->
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
			<v-btn color="orange-lighten-2" variant="text">
			  Learn more
			</v-btn>
  
			<v-spacer></v-spacer>
  
			<v-btn :icon="sponsor.show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="showDetal(sponsor.id)"></v-btn>
		  </v-card-actions>
  
		  <v-expand-transition>
			<div v-show="sponsor.show">
			  <v-divider></v-divider>
			  <v-card-text>
				{{ sponsor.description }}
			  </v-card-text>
			</div>
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
	  showDetal(sponsorId) {
		const sponsor = this.sponsors.find(s => s.id === sponsorId);
      if (sponsor) {
        sponsor.show = !sponsor.show;
      }
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
  </style>
  