<template>
  <div class="yellow lighten-3 pa-3">
    <h3>Edit User Information</h3>
    <v-text-field
      v-model="user.name"
      label="Name"
      ></v-text-field>
    <v-text-field
      v-model="user.address"
      label="Address"
      ></v-text-field>
    <v-text-field
      v-model="user.phone"
      label="Phone Number"
      ></v-text-field>
    <v-radio-group
      v-model="user.hasDog"
      row
    >
      <v-radio
        label="Has Dog"
        value="true"
      ></v-radio>
      <v-radio
        label="No Dog"
        value="false"
      ></v-radio>
    </v-radio-group>
    <v-btn @click="saveChange">Save Changes</v-btn>
  </div>
</template>

<script>
import{eventBus} from "../main"


  export default {
    props: ['name','address','phone','hasDog'],
    data()
    {
      return{
        user:{}
      }
    },
    created()
    {
      this.user.name = this.name
      this.user.address = this.address
      this.user.phone = this.phone
      this.user.hasDog = this.hasDog
    },
    methods: {
      saveChange(){
        console.log(this.user)
        this.$emit('child',this.user)
        eventBus.$emit("userWasEdit", new Date())
      }
    }
  }

</script>
