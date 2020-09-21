<template>
  <div class="popup">
    <div class="popup__header">
        <span>Add info to contact</span>
        <span>
            <i class="material-icons popup__header-close" @click.prevent="closePopUp">close</i>
        </span>
    </div>
    <div class="popup__main">
        <span>Name of field </span>
        <input type="text" class="popup__main-input" v-model="inputValueKey">
        <span>Value of field</span>
        <input type="text" class="popup__main-input" v-model="inputValue">
        
    </div>
    <div class="popup__footer">
        <div class="popup__footer-btn">
            <button class="popup__footer-add transition" 
                @click.prevent="changeContact(inputValue,inputValueKey,itemInfo)">Add</button>
        </div>
        <span v-if="isError" class="popup__footer-text">Field with this name already exist</span>
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
        itemInfo: {
            type:Object,
            default:()=>{

                }
    }
    },
    data(){
        return {
            inputValue:"",
            inputValueKey:'',
            isError:false,
        };
    },
    methods:{

        ...mapActions([
        'CHANGE_USER_IN_VUEX',
            ]),

        closePopUp(){
            this.$emit('closePopUp');
        },
        changeContact(inpName,inpValue,item){ // add field
            if(inpName != "" && inpValue != ""){ // if inputs are not empty
                this.isError = false;
                let check = true;
                for(var i in item)
                {
                    if(i == inpValue.toLowerCase()){ // find if we have the same field
                        check = false;
                    }
                }
                if(check === true){ // if it`s no field with input meaning - add to state
                    item[inpValue] = inpName;
                    this.CHANGE_USER_IN_VUEX(item);
                    this.$emit('closePopUp');    
                }
                else
                { 
                    this.isError = true; // if we have - show error message
                }
            }
        }
    }
}
</script>


