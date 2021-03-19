<template>
<div class="wrapper">
    <CountryList/>
</div>
</template>

<script>
import CountryList from "../components/CountryList.vue"
export default {
  name: 'Country',
  components:
  {
    CountryList
  }
}
</script>
