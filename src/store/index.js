import { createStore } from 'vuex'
const dataURL = ("https://amypieterse.github.io/eCommerce-json-repo/data.json")

export default createStore({
  state: {
    products:null,
  },
  getters: {
    getProductById:(state)=>(id)=>{
      return state.products.find(
        (product)=>product.id===id
        );
    }
  },
  mutations: {
    setProduct(state,products){
      state.products = products;
    },
    addProduct(state,products){
      state.products.push(product);
    },
    editProduct(state,editedProduct){
      let index = state.products.findIndex(
        product =>product.id===editedProduct.id
      );
      if (index!==-1){
        state.products[index]=editedProduct;
      }
    },
    deleteProduct(state,productId){
      state.products=state.products.filter(
        (product)=>product.id!==productId
      );
    }
  },
  actions: {
    async fetchProducts({commit}){
        try {
          const response = await fetch(dataURL);
          const {products} = await response.json();
          commit('setProducts', products)
        } catch (error) {
          console.error('Error fetching products:', error)
        }
    },
    async addProduct({commit,state}, product){
        try {
          const response = await fetch(dataURL,{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify(product)
          });
          const newProduct = await response.json();
          commit ('addProduct','newProduct');
        } catch (error) {
          console.error('Error adding product:',error);
        }
    },
    async editProduct({commit,state},editedProduct){
      try {
        const response = await fetch(`${dataURL}/${editedProduct.id}`,{
          method:'PATCH',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify(editedProduct),
        });
        const editedProductData = await response.json();
        commit('editedProduct',editedProductData)
      } catch (error) {
        console.error('Error editing product',error)
      }
    },
    async deleteProduct({commit},productId){
      try {
        await fetch(`${dataURL}/${productId}`,{
          methods: 'DELETE',
        });
        commit('deleteProduct',productId);
      } catch (error) {
        console.error('Error deleting product:',error)
      }
    },
  },
  modules: {
  }
})
