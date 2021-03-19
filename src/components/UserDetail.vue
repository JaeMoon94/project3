<template>
  <div class="red lighten-3 pa-3">
    <h3>Detail information for User</h3>
      <v-list dense>
      <v-list-item>
        <v-list-item-content>Name :</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ name }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>Address :</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ address }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>Phone :</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ phone }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>Has Dog? :</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ hasDog }}
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>Edited Date :</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ editedDate }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import {eventBus} from "../main"
export default {
  data()
  {   
    return{
      editedDate: null
    }
  },
  props: ['name','address','phone','hasDog'],
  computed:
  {
    // sayHello(){
    //   return this.detailName + ' Hello!'
    // },
  },
  created(){
    eventBus.$on('userWasEdit', date => {
      this.editedDate = date
    })
  },
  methods:{
    // switchName(){
    //   this.detailName = 'test'
    // }
  },
}

</script>
