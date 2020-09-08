<template>
  <v-container fluid >
    <v-row>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
          class="pb-16"
        >
         
      <Imagecomponent
      v-for="n in 3"
            :key="n"
            class="ma-3 pa-6"
            outlined
            tile> 
       </Imagecomponent> 

        </v-row>
      </v-col>
     
    </v-row>
   
  </v-container>
</template>




<script>
    import Imagecomponent from './Imagecomponent';

  export default {

data () {
      return {
        alignmentsAvailable: [
          'start',
          'center',
          'end',
          'baseline',
          'stretch',
        ],
        alignment: 'center',
        dense: false,
        justifyAvailable: [
          'start',
          'center',
          'end',
          'space-around',
          'space-between',
        ],
        justify: 'center',
      }
    },
    
    components:{
          Imagecomponent,
      },
  }
</script>
