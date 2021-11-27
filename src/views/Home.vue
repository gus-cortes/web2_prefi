<template>
  <div class="about">
    <h1>ITEMS MENU</h1>
  </div>
  <div class="row">
    <div class="flex md6 lg4" v-bind:key="item.id" v-for="(item, index) in items">
      <va-card>
        <va-image
          v-bind:src="item.img"
          style="height: 200px;"
        />
        <va-card-content id="title">{{item.name}}</va-card-content>
        <va-card-content>{{item.price}}</va-card-content>
        <va-card-actions align="stretch" vertical>
          <va-button @click="details(index)">DETAILS</va-button>
        </va-card-actions>
      </va-card>
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  data () {
    return {
      items: this.$store.state.items
    }
  },
  methods: {
    details (itemIndex) {
      router.push({ name: 'Item', params: { index: itemIndex } })
    }
  }
}
</script>

<style>

#title {
  font-weight: bold;
}

</style>
