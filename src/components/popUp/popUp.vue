<template>
  <div class="popup">
    <div class="popup__header">
        <span>Add contact</span>
        <span>
            <i class="material-icons popup__header-close" @click.prevent="closePopUp">close</i>
        </span>
    </div>
    <div class="popup__main">
        <span>Name</span>
        <input type="text" class="popup__main-input" v-model="inputName">
        <span>Number</span>
        <input type="text" class="popup__main-input" v-model="inputNumber">
        <span>Email</span>
        <input type="text" class="popup__main-input" v-model="inputEmail">
    </div>
    <div class="popup__footer">
        <div class="popup__footer-btn">
            <button class="popup__footer-add transition" 
                @click.prevent="addContact(inputName,inputNumber,inputEmail)">Add</button>
        </div>
        <div class="popup__footer-btn">
            <button class="popup__footer-close transition" @click.prevent="closePopUp">Close</button>
        </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
    name:"PopUp",
    props:{
        last_num: {
            type:String,
            default:()=>{

                }
    }
    },
    data(){
        return {
            inputName:"",
            inputNumber:"",
            inputEmail:""
        };
    },
    methods:{

        ...mapActions([
        'ADD_CONTACT_TO_VUEX'
            ]),

        closePopUp(){
            this.$emit('closePopUp');
        },
        addContact(inpName,inpNumb,inpEmail){ // add new contact
            let obj = {                       // new object with entered niputs
                id:Number(this.last_num)+1+"", // id = prev+1 ( or 0 if the mass is empty) 
                name: inpName,
                number: inpNumb,
                email:inpEmail
            }
            if(obj.name && obj.number){ //if name and number entered - add to state
                this.ADD_CONTACT_TO_VUEX(obj);
                this.$emit('closePopUp');//cloae popUp
            }
        }
    }
}
</script>


