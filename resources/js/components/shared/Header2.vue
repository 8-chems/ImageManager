<template>
   <v-card>  
      <!--class="overflow-hidden"> -->
    <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon  @click.stop="iinverseDrawer()"></v-app-bar-nav-icon>

      <v-toolbar-title>Image Manager</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        v-if="loggedin"
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        width="50px"
        align="center"
        justify="center"
        class="mt-4"
      ></v-text-field>

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->

      
    </v-app-bar>
  
  </v-card>
</template>

<script>

  export default {

    data: () => ({
    //  drawer: false,
      group: null,
    }),
    methods:{
        iinverseDrawer(){
        var drawer=this.$store.state.drawer;    
      //  alert(drawer);
      
        this.$store.commit('inverseDrawer');   
        },
    },
    computed: {
    loggedin: {
        get(){
             return this.$store.state.loggedin;
        },
        
    }
  },
    watch: {
      group () {
        
         this.$store.commit('inverseDrawer')
      },
    },
    
  }
  </script>

      <!-- 
        <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="600"
    >
    <v-container style="height: 1500px;"></v-container>
    </v-sheet> -->
