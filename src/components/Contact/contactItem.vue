<template>
  <div class="contact transition">

    <PopUpConfirm v-if="isPopUp"
                  @closePopUp ="closeInfoPop"
                  :item ="list_data" />

    <router-link class="contact__link" title="To contact info" :to="{name: 'ContactInfo', params:{item: list_data}}">
      <div class="contact__icon"></div>
      <div class="contact__name">{{ list_data.name }}</div>
      <div class="contact__number">{{ list_data.number }}</div>
    </router-link>
    <div class="contact__button">
        <button class="contact__delete transition" @click.prevent="deleteItem()">Delete</button>
    </div>
  </div>
</template>

<script>
import PopUpConfirm from '@/components/popUp/popUpConfirm.vue'
export default {
  name: 'ContactItem',
  props: {
      list_data:{
          type: Object,
          default: ()=>{
              return {};
          }
      }
  },
  data(){
    return{
      isPopUp:false,
    }
  },

  components:{
    PopUpConfirm
  },

  mounted(){

  },
  methods:{
    deleteItem(){
     this.isPopUp = true; // show popUp to confirm delete of user from book
    },
    closeInfoPop(){
      this.isPopUp = false; // close popUp when $emit from the component
    },
  },


}
</script>


