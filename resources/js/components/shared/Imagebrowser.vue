<template>
  <v-carousel 
  style="position: relative;"
   hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>

    
    <v-chip
      class="ma-2"
      :input-value="active"
      filter
    >
      I'm v-chip
    </v-chip>
   
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        active: true,
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>
