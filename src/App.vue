<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >

        <div>Welcome to Creative Project 3</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item @click="$router.push({name: 'Home'})">
          Home
        </v-list-item>

        <v-list-item @click="$router.push({name: 'User'})">
          User Manager
        </v-list-item>

        <v-list-item @click="$router.push({name: 'Country'})">
          Country Mock Data
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
       <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Seungjae Moon All right reserved</strong><br>
      <a href="">Github</a>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>