<template>


<v-app>

<Header />

  <v-main>
 <v-container >
<MyImagebrowser></MyImagebrowser>
</v-container>
  </v-main>

<NavigationDrawer></NavigationDrawer>



 

  <Footer/>

</v-app>
</template>

<script>
import Footer from '#Components/shared/Footer.vue';
import Header from '#Components/shared/Header2.vue';
import NavigationDrawer from '#Components/shared/NavigationDrawer2.vue';
import MyImagebrowser from '#Components/shared/MyImagesBrowser.vue';


import AppNavigation from '#Components/AppNavigation.vue';

export default {
  name: 'App',

  components: {
  NavigationDrawer,
    Footer,
    Header,
    MyImagebrowser,
    
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
