<template>
  <div class="popup">
    <div class="popup__header">
        <span>Delete this contact</span>
        <span>Are you sure?</span>
        <span>
            <i class="material-icons popup__header-close" @click.prevent="closePopUp">close</i>
        </span>
    </div>
    <div class="popup__main">
        <span>{{item.name}}</span>
    </div>
    <div class="popup__footer">
        <div class="popup__footer-btn">
            <button class="popup__footer-add transition" 
                @click.prevent="deleteContact(item.id)">Yes</button>
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
      'DELETE_ELEM_FROM_VUEX'
        ]),

        closePopUp(){
            this.$emit('closePopUp');// $emit to close popUp if pressed No
        },

        deleteContact(id){

                this.DELETE_ELEM_FROM_VUEX(id);// action to delete item, when pressed button Yes
                this.$emit('closePopUp');    // $emit to close popUp

        }
    }
}
</script>


