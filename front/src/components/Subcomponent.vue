<template>
  <div class="subcomponent">
    <p>{{ pickedDate}}</p>
    <p>{{ getBrickDate() }}</p>
    <p>{{ getBrickDateFromInstance() }}</p>
    <p>{{ getBrickDateFromProps() }}</p>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';

export default {
  name: 'Subcomponent',
  props: {
    pickedDate: {}
  },
  created() {
    this.updateModel();
  },
  setup(props) {
    const instance = getCurrentInstance();
    let pickedDate = null;

    function updateModel () {
      pickedDate = this.pickedDate
    }

    function getBrickDate() {
      let date = new Date(pickedDate);
      return date.getFullYear() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getDate();
    }

    function getBrickDateFromInstance() {
      let date = new Date(instance.props.pickedDate);
      return date.getFullYear() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getDate();
    }

    function getBrickDateFromProps() {
      let date = new Date(props.pickedDate);
      return date.getFullYear() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getDate();
    }

    return {
      updateModel,
      getBrickDate,
      getBrickDateFromInstance,
      getBrickDateFromProps
    }
  }
}
</script>

<style scoped>
</style>