<template>
<v-row>
<v-spacer></v-spacer>
  <div class="text-center pr-5">
    <v-pagination
      v-model="page"
      :length="10"
      circle
    ></v-pagination>
  </div>
  </v-row>

</template>

<script>
  export default {
    data () {
      return {
        page: 2,
      }
    },
  }
</script>