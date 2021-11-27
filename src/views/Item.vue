<template>
    <div>
        <h1>{{products[index].name}}</h1>
        <div>
            <div class="row">
                <div class="flex md6 lg4">
                    <va-image v-bind:src="products[index].img" />
                </div>
            </div>
            <div>
                <h3>PRICE: {{products[index].price}}</h3>
                <h3>QUANTITY: {{products[index].quantity}}</h3>
                <h3>CATEGORY: {{products[index].category}}</h3>
                <h3>DESCRIPTION: {{products[index].description}}</h3>
            </div>
            <div>
                <va-input
                    class="mb-4"
                    v-model="amount"
                    :rules="[(amount) => amount <= this.quantity || `Not Enough Quantity`]"
                    label="Amount"
                    mask="numeral"
                />
                <va-button-group>
                    <va-button icon="remove" @click="subtract()"/>
                    <va-button icon="add" @click="add()"/>
                </va-button-group>
                <va-button @click="addToCart()"> Add to Cart </va-button>
            </div>
        </div>
    </div>
</template>

<script>
// import router from '../router'
export default {
  data () {
    return {
      amount: 0,
      index: this.$route.params.index,
      products: this.$store.state.items,
      payload: null
    //   quantity: this.products[this.index].quantity
    }
  },
  methods: {
    add () {
      if (this.amount < this.quantity) {
        this.amount++
      }
    },
    subtract () {
      if (this.amount > 0) {
        this.amount--
      }
    },
    addToCart () {
      this.payload = this.products[this.index]
      this.payload.quantity = this.amount
      this.$store.dispatch('addToCart', this.payload)
      this.amount = 0
    //   router.go(0)
    //   console.log(this.$store.state.cart)
    }
  },
  computed: {
    quantity () {
      return this.products[this.index].quantity
    }
  }
//   },
//   mounted () {
//     console.log(this.$store.state.cart)
//   }
}
</script>
