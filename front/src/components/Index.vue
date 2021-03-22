<template>
  <div><datepicker v-model="pickedDate" /></div>
  <Subcomponent
      :picked-date="pickedDate"
  />

</template>

<script>
import Datepicker from 'vue3-datepicker';
import Subcomponent from "@/components/Subcomponent";
import { ref } from 'vue';

export default {
  name: 'Index',
  props: {
    title: String
  },
  components: {
    Subcomponent,
    Datepicker
  },
  setup(){
    let pickedDate = ref(new Date());

    return {
      pickedDate
    }
  }
}
</script>

<style>
#dashboard {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
}
.table-header {
  width: 11.11%;
  color: #5e6c84;
  text-transform: uppercase;
  margin: 0 5px 0 0;
  font-size: 12px;
}
</style>
