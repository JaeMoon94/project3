<template>
    <v-main>
         <v-container>
          <v-row>
            <v-col v-for="country in this.$root.$data.countires" :key="country.id" cols="4">
               <v-card class="mx-auto" max-width="344" outlined>

                   <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-1">
                         <p>{{country.CountryName}}</p>
                         <p style="font-size:10px">TimeZone: {{country.TimeZone}}</p>
                        </div>
                        <v-list-item-title class="headline mb-1">
                         <p>Country Code: {{country.CountryCode}}</p>
                        </v-list-item-title>
                        <v-list-item-subtitle>
                        Latitude: {{country.Latitude}}<br>
                        Longitude: {{country.Longitude}}<br>
                    
                  </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                    >
                    <img :src="country.image">
                    </v-list-item-avatar>
                    </v-list-item>

                   
                    <!-- <p>Country Code: {{country.CountryCode}}</p>
                    <p>Latitude: {{country.Latitude}}</p>
                    <p>Longitude: {{country.Longitude}}</p>
                    <p>TimeZone: {{country.TimeZone}}</p> -->
                </v-card>
          </v-col>
        </v-row>
      </v-container>

                
                
            <!-- </div>
                <img :src="'project3/images/'+country.image">
            </div> -->

    </v-main>

</template>

<script>
export default {
  name: 'CountryList',
  props: {
    countires: Array
  },
}


</script>

<style>
/* 
.v-main {
    padding: 0px 0px 0px 140px !important;
} */
</style>