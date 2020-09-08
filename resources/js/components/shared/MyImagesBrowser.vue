<template>
  <v-card
    elevation="24"
    max-width="3000"
    class="mx-auto"
  >
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      hide-delimiters
      height="450"
      width="1600"
    >
      <img
       :src="iurl"
       class="main-img"
      >
        
     
    </v-carousel>

 <!-- <Pagination class="pt-5"/> -->

<v-container>
<v-row
 fill-width
 class="row1"
 rounded
 >
<v-col class="col-md-3 ml-5">
  <v-text-field 
  label=" "
  class="centered-input text--darken-43 mt-5" 
  ref="iname"
  v-model="iname"
  :value="iname" 
  outlined :readonly="readonly" rounded filled dense
  v-on:blur="save_iname()"
  />
 </v-col>

<v-row  fill-width>
<v-row class="col-md-3 mx-auto">  
<v-btn class="ma-auto"  color="primary" v-on:click="minusSlides()">&#10094;</v-btn>
<v-btn class="ma-auto" color="primary" v-on:click="plusSlides()">&#10095;</v-btn>
</v-row>
</v-row>
</v-row>
</v-container>
<v-container v-if="uploadp" fill-height fluid>
   <v-card
           outlined
          tile
          width="100%"

        >


<v-row>
<v-col class="col-md-2 noborder">
<img :src="image" class="img-up">
</v-col>   

<v-col>
 <v-row  align="center"
      justify="center">

<v-col class="col-md-8">
<v-file-input
    ref="selector"
    class="mt-5"
    label="Image input"
    height="30"
    
    accept="image/*"
    multiple
    v-on:change="onFileChange"
    prepend-icon="mdi-camera"
  ></v-file-input>
</v-col>
<v-col class="col-md-3">
<v-text-field
label="Image Name"
  height="60"
  color="grey" 
  outlined  dense filled
  :value="uiname"
  v-model="uiname"
  />
  </v-col>
</v-row>

 <v-row class="pa-5" align="center" justify="center"> 
<v-btn @click="upload" color="primary" class="mr-5">Upload </v-btn> 
<v-btn  v-on:click="uploadp=false" color="secondary">Cancel </v-btn> 
 </v-row>
</v-col>
</v-row>
 </v-card>
 </v-container>
 <v-bottom-navigation
    v-model="bottomNav"
  >
      <v-btn v-on:click="uploadp=true" value="add">
      <span>Add new picture</span>
      <v-icon>mdi-plus-circle-outline</v-icon>
    </v-btn>

    <v-btn value="delete" v-on:click="delete_image()">
      <span>Delete</span>
      <v-icon>mdi-delete</v-icon>
    </v-btn>

 <v-btn value="rename" v-on:click="modify_iname()">
      <span>Rename</span>
      <v-icon>mdi-form-textbox</v-icon>
    </v-btn>
    
  </v-bottom-navigation>


<v-container fluid>
<v-row fill-width>
<v-col class="col-md-2 mx-auto">
</v-col>
</v-row>
</v-container>








    



    <v-container class="grey lighten-5">
    
    <v-row no-gutters>
      <v-col
        class="pa-5"
        cols="10"
        sm="6"
        md="9"
      >
       <v-card
      class=""
      >
      <v-card-text>
        
        <!-- <div class="text--primary">
        well meaning and kindly.<br>
        "a benevolent smile"
        </div> -->

        <v-textarea
      clearable
      filled
      outlined
      rounded
      no-resize
      persistent-hint
      no-gutters
      clear-icon="cancel"
      label="Comment: "
      value="This is clearable text."
      v-model="comment"
      fill-height
      height="50"
      v-on:click="edit=true"
      v-on:blur="check_comment(ex_comment,comment)"
    ></v-textarea>

      </v-card-text>
      <v-row class="ma-1" v-if="edit">
        <v-spacer></v-spacer>
        <v-btn class="ma-5" v-on:click="recover_comment()" color="primary">Cancel</v-btn>
        <v-btn class="ma-5" v-on:click="save_comment(comment)" color="primary">Save</v-btn>
      </v-row>
      </v-card>

      
      </v-col>
     
     
      <v-col
      class="pa-5"
        cols="1"
        md="3"
       
      >
      <v-card
      class=""
       height="110"
      >
      <v-list class="mx-auto">
      <v-list-item>
        <v-list-item-avatar>
          <v-img v-bind:src="avatarurl"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{fullname}}</v-list-item-title>
          <v-list-item-subtitle>Author</v-list-item-subtitle>
        </v-list-item-content>
       </v-list-item>
    </v-list>
    </v-card>
      </v-col>
    </v-row>
  </v-container>
  
  
  </v-card>

</template>


<style scoped>
    .centered-input >>> input {
      text-align: center
    }
.row1 {
    background: linear-gradient(to bottom left, #660066 0%, #99ff99 50%);
}

.main-img{
width:100%;
height:100%;
}    
.img-up{
        width:100%;
        height:100%;
       
    }

.noborder {
 border:0px;
}    

</style>

<script>
import Pagination from '#Components/shared/Pagination.vue';

  export default {

 components: {
  
    Pagination,
  },


    data () {
      return {
        image:null,
        imagefile:null,
        uploadp:false,
        readonly:true,
        uiname:"Name of image to upload",
        iname:"Image: Hello PIPO",
        iurl:null,
        iid:"",
        bottomNav: 'recent',
        edit: false,
        canceling:false,
        comment:"helloo",
        ex_comment:"",
        fullname:"John Leider",
        avatarurl:"https://cdn.vuetifyjs.com/images/john.png",
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        cycle: false,
        slides: ['First'],
        images:[],
      }
    },


    watch:{
      fullname: function(){

      },
    },

    methods:{
          onFileChange(files) {
            files.forEach((file, index) => {
              const reader = new FileReader();
              reader.addEventListener('load', e => this.image = e.target.result);
              reader.readAsDataURL(file);  
            }); 
            },
        
        plusSlides(){
         this.$store
        .dispatch('plusImage')
        .then(() => {
          this.imagefile=this.$store.getters.getCurrentImageData;
          this.comment=this.imagefile['image']['comment']; // in real i need to load the comment from the DB
          
          this.ex_comment=this.comment;
          this.iname=this.imagefile['image']['name'];  
          this.iurl=this.imagefile['image']['url'];
        })
        .catch(err => {
          console.log(err)
        });
        },
      
       minusSlides(){
        this.$store
        .dispatch('minusImage')
        .then(() => {
         this.imagefile=this.$store.getters.getCurrentImageData;
          this.comment=this.imagefile['image']['comment']; // in real i need to load the comment from the DB
          this.ex_comment=this.comment;
          this.iname=this.imagefile['image']['name'];  
          this.iurl=this.imagefile['image']['url'];
        })
        .catch(err => {
          console.log(err)
        });
       },
     
        upload: function(){

           this.$store
        .dispatch('upload', {
                    image: this.image,
                    comment: ' ',
                    name: this.uiname,
                
        })
        .then(() => {
          alert('Image has been successfully uploaded ...')
        })
        .catch(err => {
          console.log(err)
         // alert(err)
        })



        },

      

      check_comment: function(ex,cur){
        if((ex==cur)&&!this.canceling) this.edit=false;
        else if(!this.canceling) alert("Please, check your comment !");
             else this.canceling=false;
      },
      recover_comment(){
        this.canceling=true;
        this.comment=this.ex_comment;
        this.edit=false;
      },
      save_comment(){
        // save to db
        this.ex_comment=this.comment;
        this.$store.dispatch('save_comment',this.comment).then(()=>{alert('Comment has been modified.')});
        this.edit=false;
      },
      save_iname(){
        if(!this.readonly){
        this.readonly=true;
        this.$store.dispatch('save_name',this.iname).then(()=>{alert('Name has been modified.')});
       
      } else{

      }
      },
      modify_iname(){
        this.$refs.iname.focus();
        this.readonly=false;
      },
      delete_image(){
        this.$store.dispatch('deleteImage').then(()=>{
          this.imagefile=this.$store.getters.getCurrentImageData;
          this.comment=this.imagefile['image']['comment']; // in real i need to load the comment from the DB
          this.ex_comment=this.comment;
          this.iname=this.imagefile['image']['name'];  
          this.iurl=this.imagefile['image']['url'];
        });
        alert("The image has been deleleted from your profile ...")
      },
    },

  created () {

     this.$store
        .dispatch('getImages')
        .then(() => {
          this.imagefile=this.$store.getters.getCurrentImageData;
          this.comment=this.imagefile['image']['comment']; // in real i need to load the comment from the DB
          this.ex_comment=this.comment;
          this.iname=this.imagefile['image']['name'];  
          this.iurl=this.imagefile['image']['url'];//'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg';
       //   alert(this.iurl);
          // alert('after function: '+this.imagefile) 
        })
        .catch(err => {
          console.log(err)
        });

                
          
        
},



    
  }
</script>