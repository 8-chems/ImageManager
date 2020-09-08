<template>


<v-app>

<Header />
<NavigationDrawer></NavigationDrawer>
  <v-main>
<v-container >


<ProfileUpdate />
</v-container>
  </v-main>

<v-spacer></v-spacer>

 

  <Footer/>

</v-app>
</template>

<script>
import Footer from '#Components/shared/Footer.vue';
import Header from '#Components/shared/Header2.vue';
import NavigationDrawer from '#Components/shared/NavigationDrawer2.vue';
//import AppNavigation from '#Components/AppNavigation.vue';
import ProfileUpdate from '#Components/shared/ProfileUpdate.vue';

export default {
  name: 'App',

  components: {
  NavigationDrawer,
    Footer,
    Header,
    ProfileUpdate,
   // AppNavigation,
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
