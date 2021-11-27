import { createStore } from 'vuex'
export default createStore({
  state: {
    cartItems: [],
    items: [
      { id: 1, name: 'Bacon', description: 'honey cured and smoked bacon', price: 250, quantity: 32, category: ['Meat'], img: 'https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg' },
      { id: 2, name: 'Fish', description: 'fish straight from the ocean', price: 150, quantity: 8, category: ['Seafood', 'Fresh'], img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg' },
      { id: 3, name: 'Chicken', description: 'free range organic chicken', price: 200, quantity: 9, category: ['Poultry', 'Fresh'], img: 'https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg' },
      { id: 4, name: 'Beef', description: 'grass fed and free range beef', price: 300, quantity: 0, category: ['Meat'], img: 'https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg' },
      { id: 5, name: 'Soy Sauce', description: 'sweet and salty soy sauce', price: 50, quantity: 42, category: ['Sauce', 'Seasoning'], img: 'https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024' },
      { id: 9, name: 'Egg', description: 'organic eggs', price: 10, quantity: 22, category: ['Dairy'], img: 'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg' },
      { id: 11, name: 'Pork', description: 'balanced lean and fatty pork', price: 200, quantity: 4, category: ['Meat'], img: 'https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg' }
    ]
  },
  mutations: {
    addToCart (state, payload) {
      const product = payload
      console.log(product)
      if (state.cartItems.length > 0) {
        console.log('cart is not empty')
        // if (state.cartItems.some(i => i.id === product.id)) {
        //   const index = state.cartItems.findIndex(el => el.id === product.id)
        //   state.cartItems[index].quantity += product.quantity
        // } else {
        //   state.cartItems.push(product)
        // }
      } else {
        console.log('cart is empty')
      }
      console.log(state.items)
      console.log(state.cartItems)
    }
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit('addToCart', payload)
    }
  },
  modules: {
  }
})
