<template>
  <div>
    <Header />
    <Contacts :list_item ='USERS' />
  </div>
</template>

<script>
import Contacts from '@/components/Contact/Contacts.vue';
import Header from '@/components/Header/Header.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'HomePage',
  props: {
    
  },
  data(){
    return{
      element:{}
    }
  },
  components:{
    Contacts,
    Header,
  },
  computed:{
    ...mapGetters([
      'USERS'
    ])
  },
  methods:{
    ...mapActions([
      'GET_START_USERS'
    ])
  },
  watch:{
   USERS(){
     
   }
  },
  mounted(){
    this.GET_START_USERS(); // Action to load start users
  }
  
}
</script>


