<template>


<v-app>

<Header />


<Logincomponent />
<NavigationDrawer></NavigationDrawer>
 
 
 

  <Footer/>

</v-app>
</template>

<script>
import Footer from '#Components/shared/Footer.vue';
import Header from '#Components/shared/Header2.vue';
import NavigationDrawer from '#Components/shared/NavigationDrawer2.vue';
import Imagebrowser from '#Components/shared/Imagebrowser.vue';
import Logincomponent from '#Components/shared/Logincomponent.vue';

import BeforeFooter from '#Components/shared/BeforeFooter.vue';
import AppNavigation from '#Components/AppNavigation.vue';

export default { 
  name: 'App',

  components: {
  NavigationDrawer,
    Footer,
    Header,
    Imagebrowser,
    BeforeFooter,
    AppNavigation,
    Logincomponent,
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
