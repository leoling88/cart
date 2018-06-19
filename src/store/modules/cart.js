//初始化数据
const state = {
	shop_list: [
		{
			id:11,
			name:'鱼香茄子',
			price: 12
		},
		{
			id:22,
			name:'宫保鸡丁',
			price: 14
		},			{
			id:33,
			name:'小龙虾',
			price: 49
		}
	],
	added:[],
	whethersub: '确定要执行此操作吗?'
}
//getters 抛出去的数据
const getters = {
	//商品列表
	shoplist:state => state.shop_list,
	//购物车的列表
	cartProducts: state => {
		return state.added.map(({id, num}) => {
			let product = state.shop_list.find(n=>n.id == id);
			return {
				...product,
				num
			}
		})
	},
	//计算总价
	totalPrice:(state, getters) => {
		let total = 0;
		getters.cartProducts.forEach(n=>{
			total += n.price * n.num
		})
		return total
	},
	//计算总量
	totalNum:(state,getters)=>{
		let total = 0;
		getters.cartProducts.forEach(n=>{
			total += n.num
		})
		return total;
	}


}
//action 异步操作
const actions = {
	//添加到购物车操作
	addToCart({commit},product){
		commit('add', {
			id:product.id
		})
	},
	//清除购物画
	clearAllCart({commit}){
		commit('clearAll')
	},
	//删除购物车的指定商品
	delProduct({commit},product){
		commit('del',product)
	}
}
//mutations
const mutations = {
	//添加到购物车操作
	add(state, {id}){
		let record = state.added.find(n=>n.id == id);
		if(!record){
			state.added.push({
				id,
				num:1
			})
		}else{
			record.num ++ 
		}
	},
	//清除购物车
	clearAll(state){
		if(confirm(state.whethersub)){
			state.added = []
		}
	},
	//删除购物车的指定商品
	del(state,product){   	//提示是否继续删除
			state.added.forEach((n,i)=>{
				if(n.id == product.id){
					if(n.num > 1){
						n.num --
					}else{
						if(confirm(state.whethersub)){
							state.added.splice(i,1)
						};
					}
				}

			})			
	}


}
export default {
	state,
	mutations,
	actions,
	getters,
}