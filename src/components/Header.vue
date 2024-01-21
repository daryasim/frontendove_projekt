<template>
    <div class="navbar navbar-fixed-top custom-navbar" role="navigation">
	<div class="container">

		<!-- navbar header -->
		<div class="navbar-header">
			<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="icon icon-bar"></span>
				<span class="icon icon-bar"></span>
				<span class="icon icon-bar"></span>
			</button>
			<a href="#" class="navbar-brand">&#128187; FutureTech</a>
		</div>

		<div class="collapse navbar-collapse">

			<ul class="nav navbar-nav navbar-right">
                <li v-for="link in links" :key="link.path">
                    <router-link :to="link.path" class="link">
                        {{ link.name }}
                    </router-link>
                </li>
			</ul>

		</div>

	</div>
</div>
</template>
<script>
export default {
    data() {
        return {
            links: [
                { name: 'Home', path: '/' },
                { name: 'Overview', path: '/overview' },
                { name: 'Programs', path: '/programs/first-day' },
                { name: 'Reviews', path: '/register' },
            ],
        };
    },
};
</script>