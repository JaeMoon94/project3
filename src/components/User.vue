<template>
  <div class="blue lighten-3 pa-3">
    <h1>User Info Manager</h1>
    <p>Current User Name: {{name}}</p>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail 
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @child="parents"
        ></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "../components/UserDetail.vue"
import UserEdit from "../components/UserEdit.vue"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data(){
    return{
      name: "User Name",
      address: 'Salt Lake City',
      phone: '385-123-4567',
      hasDog: false,
    }
  },
  methods: {
    parents(user){
      this.name = user.name
      this.address = user.address
      this.phone = user.phone
      this.hasDog = user.hasDog
      console.log('got it!')
    }
  }
}
</script>