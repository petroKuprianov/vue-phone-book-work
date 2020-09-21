<template>
  <div class="popup">
      <PopUpConfirmCansel
            v-if="isConfirmPopUP"
            @closeOne="closeConfPop"
            @closeBoth="closePopUp"
       />
    <div class="popup__header">
        <span>Change contact</span>
        <span>
            <i class="material-icons popup__header-close" @click.prevent="openPopUp">close</i>
        </span>
    </div>
    <div class="popup__main">
        <span>{{checkOutPut(item.key)}}</span>
        <input type="text" class="popup__main-input" v-model="inputValue">
        
    </div>
    <div class="popup__footer">
        <div class="popup__footer-btn">
            <button class="popup__footer-add transition" 
                @click.prevent="changeContact(inputValue,item)">Change</button>
        </div>
        <div class="popup__footer-btn">
            <button class="popup__footer-close transition" @click.prevent="openPopUp">Close</button>
        </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import PopUpConfirmCansel from '@/components/popUp/popUpConfirmCansel.vue'
export default{
    name:"PopUp",
    props:{
        item: {
            type:Object,
            default:()=>{

                }
    }
    },
    components:{
        PopUpConfirmCansel
    },
    data(){
        return {
            inputValue:"",
            isConfirmPopUP: false,
        };
    },
    methods:{

        ...mapActions([
        'CHANGE_USER_IN_VUEX',
        'LOAD_TO_STOREGE'
            ]),
        checkOutPut(key){
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

        openPopUp(){
            this.isConfirmPopUP = true;
        },
        closePopUp(){
            this.$emit('closePopUp');
        },
        closeConfPop(){
            this.isConfirmPopUP = false;
        },
        changeContact(inpName,item){ // change value of field
            if(inpName){ // if input is not empty
                this.LOAD_TO_STOREGE(); // set locat storage with current state
                let obj = Object();
                obj  = item.item; // copy object
                obj[item.key] = inpName; // change value by key
                this.CHANGE_USER_IN_VUEX(obj); // set state
                this.$emit('closePopUp');    // close popUp
            }
        }
    }
}
</script>


