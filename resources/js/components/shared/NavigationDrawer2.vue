<template>
<v-sheet
    height="45px"
    class="overflow-hidden"
    style="position: abstract;"
  >
    <v-container class="fill-height">
      <!-- <v-row
        align="center"
        justify="center"
      >
        <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn>
      </v-row> -->
    </v-container>

    <v-navigation-drawer
      v-model="getDrawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img     :src="'/images/avatar-' + (user_avatar) + '.png'" alt="Avatar" ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{fullname}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
        
          v-for="item in items"
          :key="item.title"
        
        
         v-on:click="check_link(item)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
  </template>

<script>
  export default {
    name:"NavigationDrawer",
    data () {
      return {
        fullname:"Guest User",
        loggedin:false,
        user_avatar: "",
        user:null,
        items:[],
        homeitems: [
        { title: 'Home', icon: 'mdi-home-account',link:'/' },
        { title: 'Login', icon: 'login',link:'/login' },
        { title: 'Register', icon: 'mdi-account-plus-outline',link:'/register' },
        { title: 'About', icon: 'mdi-handshake-outline',link:'/about' },
         // { title: 'Logout', icon: 'logout',link:'/' },
          
],
      loginitems:[
          { title: 'My Profile', icon: 'mdi-account-edit',link:'/profile' },
          { title: 'Dashboard', icon: 'dashboard',link:'/dashboard' },
          { title: 'About', icon: 'mdi-handshake-outline',link:'/about' },
          { title: 'Logout', icon: 'logout',link:'/' },
        ],
       
        links:[],
         links_homeitems:['Home','Login', 'Register','Dashboard','About'],//'Logout'],
         links_loginitems:['Profile','Dashboard','About','Logout'],
        mini: true,
      }
    },

    methods:{
      check_link: function(item){
      this.$store.state.drawer=false;
       
        if(item.icon=='logout'){ 
        //  alert('log out');
           this.$store.dispatch('logout');
        // $router.push('/')
        }
            this.$router.push(item.link);
        
},

     loaduser_data: function(){
       this.fullname=this.$store.getters.getUserName;
       this.user_avatar=this.$store.getters.getUserAvatar;
     },
},
    watch: {
    fullname: function (val) {
      // if loggedin ...
      // https://randomuser.me/api/portraits/men/78.jpg load avatar too
    
    },
    user: function(){
     
     if(this.user){
         this.items=this.loginitems;
         this.links=this.links_loginitems;
         this.loaduser_data();
      } 
    this.$forceUpdate();
 
    },

    },

    created(){
      
      this.user=this.$store.state.user;
      if((this.user==null))  {
       this.items=this.homeitems;
       this.links=this.links_homeitems;
       this.loaduser_data();
    }
    //alert(this.user);
    },

    computed: {
    
    getDrawer: {
        get(){
             return this.$store.state.drawer;
        },
        set(){
           
        },
        
    }
  }
  }
</script>