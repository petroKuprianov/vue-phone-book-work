<template>
  <div class="popup">
    <div class="popup__header">
        <span>Delete this info about contact</span>
        <span>Are you sure?</span>
        <span>
            <i class="material-icons popup__header-close" @click.prevent="closePopUp">close</i>
        </span>
    </div>
    <div class="popup__main">
        <span>{{checkOutPut(item.key)}}</span>
    </div>
    <div class="popup__footer">
        <div class="popup__footer-btn">
            <button class="popup__footer-add transition" 
                @click.prevent="changeContact(item,item.key)">Yes</button>
        </div>
        <div class="popup__footer-btn">
            <button class="popup__footer-close transition" @click.prevent="closePopUp">No</button>
        </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
    name:"PopUp",
    props:{
        item: {
            type:Object,
            default:()=>{

                }
    }
    },
    data(){
        return {
        };
    },
    methods:{
        ...mapActions([
        'CHANGE_USER_IN_VUEX',
            ]),
        checkOutPut(key){
            if(key === 'id'){
                return "Contact ID"
            }
            else if(key === 'name')
            {
                return "Contact Name"
            }
            else if(key === 'number')
            {
                return "Contact Number"
            }
            else if(key === 'email')
            {
                return "Contact E-mail"
            }
            else
            {
                return key;
            }
        },

        closePopUp(){
            this.$emit('closePopUp');
        },
        changeContact(item,key){ // delete field

                let obj = item.item; // copy object
                delete obj[key]; // delete key
                this.CHANGE_USER_IN_VUEX(obj); // set state
                this.$emit('closePopUp');     // close popUp

        }
    }
}
</script>


