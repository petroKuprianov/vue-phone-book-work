<template>
  <div>
    <PopUp 
      v-if="isPopUp"
      @closePopUp = "closeInfoPop"
      :last_num = countID()
    />
    <main class="main">
      <div class="main__wrapper">
        <!--To show list of users props = one element from list_data (one {user}) -->
        <ContactItem 
         v-for="element in list_item"
        :key="element.id"
        :list_data = "element"  />
      </div>
      <div class="main__button">
        <button class="main__add transition" @click.prevent="showPopup()">Add contact</button>
      </div>
    </main>
  </div>
</template>

<script>
import ContactItem from '@/components/Contact/contactItem.vue';
import PopUp from '@/components/popUp/popUp.vue'
export default {
  name: 'Contacts',
  props: {
    list_item: {
    type:Array,
    default:()=>{

        }
    }
  },
  data(){
    return{
      element:{
          
      },
      isPopUp:false,
    }
  },
  components:{
    ContactItem,
    PopUp, // popUp to add user
  },
  methods:{
    showPopup(){
      this.isPopUp = true; // show popUp menu
    },
    closeInfoPop(){
      this.isPopUp = false; // close popUp menu
    },
    countID() // Find last ID to assign next user ID+1
    {
      if(this.list_item != 0) 
      {
        return this.list_item[this.list_item.length-1].id
      }
      else
      {
        return '0'; // if no users return 0 (first user will be id - 1)
      }
    }
  }

}
</script>


