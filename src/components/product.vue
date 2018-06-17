<template>
  <div class="product">
    <h4>商品作息</h4>
    <table class="table table-hover table-borderd">
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(shop,index) in shoplist'>
          <td>{{shop.id}}</td>
          <td>{{shop.name}}</td>
          <td>{{shop.price}}</td>
          <td>
            <div @click='addToCart(shop)' class="btn btn-info">购物车</div>
          </td>


        </tr>
      </tbody>
    </table>

  </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex';
export default{
  name: 'product',
  data() {
    return {}
  },
  methods: {
    ...mapActions(['addToCart'])
  },
  computed: {
    ...mapGetters(['shoplist'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-shop > th {
  text-align: center
}
.item-wrapper {
  display:flex;
  background:#dfdfdf;
  align-items:center;
}
.item {
  flex: 1;
}
</style>
