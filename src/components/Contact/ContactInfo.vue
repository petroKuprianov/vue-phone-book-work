<template>
  <div>
      <Header />

    <router-link :to="{name:'Home'}">
        <i title="Back to main menu" class="material-icons button-back">arrow_back</i>
        <i title="Cansel last change" class="material-icons button-reset" @click="restoreData()">restore</i>
    </router-link>
      <PopUpChange v-if="isPopUp"
                  @closePopUp="closeInfoPop"
                    :item ="change" />    
      <PopUpDelete v-if="isPopUpDel"
                  @closePopUp="closeInfoPopDel"
                  :item="deleteObj" />
      <PopUpAddInfo v-if="isPopUpAdd"
                  @closePopUp ="closeInfoPopAdd"
                    :itemInfo ="item" />

      <div class="info">
          <div class="info__wrapper">
              <div v-for="(value, key) in item"
                   :key="key" >
                <div class="info__wrapper-info transition">
                  <div class="info__wrapper-key"> {{checkOutPut(key)}} </div> 
                  <div class="info__wrapper-value"> {{value}}</div>
                  <button class="info__wrapper-btn" @click.prevent="changeInfo(key,value,item)">Change</button>
                  <button class="info__wrapper-btn" @click.prevent="deleteInfo(key,value,item)">Delete</button>
                </div>
              </div>
          </div>
        <button class="info__btnAdd transition" @click.prevent="addInfo()">Add info about contact</button>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '@/components/Header/Header.vue'
import PopUpChange from '@/components/popUp/popUpChange.vue'
import PopUpDelete from '@/components/popUp/popUpDelete.vue'
import PopUpAddInfo from '@/components/popUp/popUpAddInfo.vue'
export default {
  name: 'InfoContact',
  props: {
      item:{
          type: Object,
          default: ()=>{
            return {}
          }
      }
  },
  data(){
    return{
      key:"",
      value:"",
      change:Object,
      isPopUp:false,
      deleteObj:Object,
      isPopUpDel:false,
      isPopUpAdd:false,
    }
  },
  components:{
      Header,
      PopUpChange,
      PopUpDelete,
      PopUpAddInfo
  },
  computed:{
    ...mapGetters([
            'USERS',
        ])
  },
  methods:{
    ...mapActions([
        'LOAD_FROM_STOREGE',
      ]),
    checkOutPut(key) {    // display start name of fields
      if(key.toLowerCase() === 'id'){ 
        return "Contact ID"
      }
      else if(key.toLowerCase() === 'name')
      {
        return "Contact Name"
      }
      else if(key.toLowerCase() === 'number')
      {
        return "Contact Number"
      }
      else if(key.toLowerCase() === 'email')
      {
        return "Contact E-mail"
      }
      else
      {
        return key;
      }
    },

    changeInfo(key,value,item){ // chenge info about user
      if(key === 'id') // if want to change id - imposible
      {
        return
      }
      else{
        let obj = { // new object to send in props into popUpChange
          key,value,item
        }
        this.change = obj;
        this.isPopUp = true; // show popUp
      }
    },
    closeInfoPop(){
      this.isPopUp = false;
    },
    closeInfoPopDel(){
      this.isPopUpDel = false;
    },
    closeInfoPopAdd(){
      this.isPopUpAdd = false;
    },
    deleteInfo(key,value,item){ // delete field about contact
      if(key === 'id') // delete id - imposible
      {
        return
      }
      else 
      {
        let obj = {// new object to send in props into popUpDelete
          key,value,item
        }
        this.deleteObj = obj;
        this.isPopUpDel = true;
      }
    },
    addInfo(){
      this.isPopUpAdd = true;
    },
    restoreData(){
      this.LOAD_FROM_STOREGE();
    }
  },
  watch:{
    USERS(){
    }
  }

}
</script>


