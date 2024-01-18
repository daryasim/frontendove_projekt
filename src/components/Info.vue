<template>
    <!-- =========================
    DETAIL SECTION   
    ============================== -->
    <section id="detail" class="parallax-section">
      <div class="container">
        <div class="row">
          <div v-for="item in items" :key="item.id" class="wow fadeIn col-md-4 col-sm-4" data-wow-delay="0.3s">
            <i :class="`fa ${item.icon}`"></i>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import info from '@/assets/info.json';
  
  export default {
    data() {
      return {
        items: info,
      };
    },
  };
  </script>
  