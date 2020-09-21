<template>
  <div class="popup cansel">
    <div class="popup__header">
        <span>Cansel changed</span>
        <span>Are you sure?</span>
        <span>
            <i class="material-icons popup__header-close" @click.prevent="closeOne">close</i>
        </span>
    </div>
   
    <div class="popup__footer">
        <div class="popup__footer-btn">
            <button class="popup__footer-add transition" 
                @click.prevent="closePopUps">Yes</button>
        </div>
        <div class="popup__footer-btn">
            <button class="popup__footer-close transition" @click.prevent="closeOne">No</button>
        </div>
    </div>
  </div>
</template>

<script>
export default{
    name:"PopUp",
    props:{
    },
    data(){
        return {
        };
    },
    methods:{
        closeOne(){
            this.$emit('closeOne'); // close inly this popUp
        },
        closePopUps(){
            this.$emit('closeOne'); // close two popUp
            this.$emit('closeBoth');
        }

    }
}
</script>


