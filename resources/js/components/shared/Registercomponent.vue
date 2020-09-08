<template>
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
            md="4"
          >
            <v-card class="elevation-12">
                <v-toolbar
                color="teal"
                dark
                flat
              >
                <v-toolbar-title>Register as a new user</v-toolbar-title>
                <v-spacer></v-spacer>
             
              </v-toolbar>
              <v-card-text>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="25"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

 <v-text-field
      v-model="pronoun"
      :counter="25"
      :rules="nameRules"
      label="Pronoun"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>


<v-text-field
      v-model="cemail"
      :rules="emailRules"
      label="Confirm E-mail"
      required
    ></v-text-field>

  <v-text-field
  v-model="password"
   id="password"
  label="Password"
  name="password"
  type="password"
  ></v-text-field>
   
   <v-row>
   <v-btn @click="openAvatarPicker">Choose an avatar: </v-btn>
   <v-spacer></v-spacer>
   <v-avatar size="96" class="mr-4">
    <img :src="'/images/avatar-' + (form.avatar.toLowerCase()) + '.png'" alt="Avatar">
    </v-avatar>
    
    </v-row>

<AvatarPicker v-model="showAvatarPicker"
            :current-avatar="form.avatar"
            @selected="selectAvatar" />



    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <!-- <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn> -->
  </v-form>

</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click="$router.push('/login')" color="secondary">No, I have an account</v-btn>
                <v-btn v-on:click="register()" color="primary">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

</template>


<script>
    import AvatarPicker from '#Components/shared/AvatarPicker.vue'

  export default {
  components:{
    AvatarPicker,
  },
    data: () => ({

      loading: false,
                form: {
                    avatar: '1'
                },
                showAvatarPicker: false,


      valid: true,
      name: '',
      pronoun:'',
      email:'',
      cemail:'',
      password:'',

      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
     
      
    }),

    methods: {
      openAvatarPicker () {
                this.showAvatarPicker = true
            },
      selectAvatar (avatar) {
                this.form.avatar = avatar
            },
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      register(){
        this.$store
        .dispatch('register', {
          name:this.name,
          pronoun:this.pronoun,
          email:this.email,
          cemail:this.cemail,
          password: this.password,
          avatar: this.form.avatar
        })
        .then(() => {
          this.$router.push({ name: 'login' })
        })
        .catch(err => {
          console.log(err)
         // alert(err)
        })
      }
    },
  }
</script>