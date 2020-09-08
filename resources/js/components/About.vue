<template>

<v-app>

<Header />
<v-main>
     <NavigationDrawer></NavigationDrawer> 
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
        class="ma-mt-12"
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="8"
          >
            <v-card class="elevation-12">
                <v-toolbar
                color="teal"
                dark
                flat
              >
               <v-spacer></v-spacer>
                <v-toolbar-title>About Image Manager </v-toolbar-title>
                <v-spacer></v-spacer>
             
              </v-toolbar>
              <v-card-text>
                 Image manager is a simple image managing application fully based on VueJS for the Frontend side, and Laravel for the Backend side. The aplpication allows the users to subscribe, login, browse and/or upload own images, update images' names, comments, and also the own profile information.
                 The application still needs to fix many bugs and presents just a partially core for further improvments in the future.

             </v-card-text>
              
            </v-card>
          </v-col>
        </v-row>
       
      </v-container>
    </v-main>

 <Footer />    
</v-app>
</template>

<script>
import Footer from '#Components/shared/Footer.vue';
import Header from '#Components/shared/Header2.vue';
import NavigationDrawer from '#Components/shared/NavigationDrawer2.vue';

import AppNavigation from '#Components/AppNavigation.vue';

export default {
  name: 'App',

  components: {
  NavigationDrawer,
    Footer,
    Header,
   
    AppNavigation,
  },

  data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ],
        links: ['Home', 'Contacts', 'Settings'],
        mini: true,
      }
    },
};
</script>
