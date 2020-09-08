
<template>
  <v-footer
    dark
  
    padless
    style="position:relative"
  >
    <v-card
      flat
      tile
      class="teal white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">

        This is a sample VueJS project, in which we try to inegrate many frontend and backend technologies.
        In this project, we use VueJS, Router, Vuex, Bootstrap, Material Design Icons, and VuetiFy frameworks for pages rooting, 
        sharing and managing the information, and styling the pages. In the other side, we use Laravel to control and secure the server and the database. 

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Image Manger</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


 <script>
  export default {
      data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
  </script>