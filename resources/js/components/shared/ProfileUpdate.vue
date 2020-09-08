<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="6"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="teal"
                dark
                flat
              >
                <v-toolbar-title>Update information</v-toolbar-title>
                <v-spacer></v-spacer>
             
              </v-toolbar>
              <v-card-text>

                <v-form>
                  
                  <v-text-field
                    label="Name"
                    name="Name"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="name"
                  ></v-text-field>


                  <v-text-field
                    label="Pronoun"
                    name="Pronoun"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="pronoun"
                  ></v-text-field>
                  

                  <v-text-field
                    label="Email"
                    name="Email"
                    prepend-icon="mdi-account"
                    type="email"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    label="New Email"
                    name="nemail"
                    prepend-icon="mdi-account"
                    type="email"
                    v-model="nemail"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Current Password"
                    name="cpassword"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>

                    <v-text-field
                    id="password"
                    label="New Password"
                    name="npassword"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="npassword"
                  ></v-text-field>

                    <v-text-field
                    id="password"
                    label="Confirm new password"
                    name="cnpassword"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="cnpassword"
                  ></v-text-field>


                <v-row>
                <v-btn @click="openAvatarPicker">Choose an avatar: </v-btn>
                <v-spacer></v-spacer>
                <v-avatar size="96" class="mr-4">
                <img :src="'/images/avatar-' + (currentAvatar) + '.png'" alt="Avatar">
                </v-avatar>
                </v-row>

                <AvatarPicker v-model="showAvatarPicker"
                :current-avatar="form.avatar"
                @selected="selectAvatar" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click="$router.push('/dashbord')" color="secondary">Cancel</v-btn>
                <v-btn v-on:click="update()"  color="primary">Update</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
    import AvatarPicker from '#Components/shared/AvatarPicker.vue'

  export default {
    
      components:{
          AvatarPicker
      },
    props: {
      source: String,
    },
     data () {
    return {
        name:'',
        pronoun:'',
        email: '',
        nemail:'',
        password: '',
        npassword: '',
        cnpassword: '',
      loading: false,
      form: {
                    avatar: '2'
                },
      currentAvatar:'1',
      showAvatarPicker: false,  
     
    }
  },

watch:{
  cuurentAvatar:function(){
    return this.form.avatar.toLowerCase();
}
},


    created(){
         const data=this.$store.state.user;
         this.form.avatar=data['user']['Avatar'];
         this.currentAvatar=data['user']['Avatar'];
       
       this.$store
        .dispatch('getProfile') 
        .then(() => {
        })
        .catch(err => {
        });
        this.fillProfile();
      
    },
    methods: {
    fillProfile(){
      const data=this.$store.state.user;
      this.name=data['user']['name'];
      this.pronoun=data['user']['pronoun'];
      this.email=data['user']['email'];
    
    },
    
    update(){
         this.$store
        .dispatch('updateProfile',{
          name:this.name,
          email:this.email,
          nemail:this.nemail,
          pronoun:this.pronoun,
          password:this.password,
          npassword:this.npassword,
          avatar:this.currentAvatar
        }).then(() =>{
          alert('profile have been updated.')
        });
        
       

     

    },
    openAvatarPicker () {
                this.showAvatarPicker = true
            },
    selectAvatar (avatar) {
                this.form.avatar = avatar
                this.currentAvatar=avatar
            },   
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    },
  }
</script>