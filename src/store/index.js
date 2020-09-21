import Vue from 'vue'
import Vuex from 'vuex'

let usersMass = [//Start users in phone book ()

  {
    id:"1",
    name:"Vasya",
    number:"+380993747271",
    email:"asd@asd.com"
  },
  {
    id:"2",
    name:"Alex",
    number:"+380232342300",
    home:"street 123"
  },
  {
    id:"3",
    name: "Katya",
    number:"+380834563400"
  }
];

Vue.use(Vuex)

const createStore = () =>{

return new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    SET_USERS_TO_VUEX: (state, users) => { //Set start users (now usersMass)
      state.users = users;
    },
    DELETE_ELEMENT:(state,id) =>{
      let arr =  state.users.findIndex(item => item.id === id); // Delete contact from state
        state.users.splice(arr,1);
    },
    ADD_ITEM:(state,user) => { // Add new contact to state
      state.users.push(user);
    },
    CHANGE_USER:(state,user) =>{ // If some fields in contact changed - call this action CHANGE_USER_IN_VUEX
      for(let i=0;i<state.users.length;i++)
      {
        if(state.users[i].id === user.id){
          state.users[i] = user;
        }
      }
    },
    UPDATE_FROM_STORAGE:(state) =>{ // STEP BACK uploading previous state from local storage
      let parseJson = JSON.parse(window.localStorage.getItem('prevData'));
      console.log(parseJson);
        for(let i =0; i<state.users.length;i++)
        {
          if(state.users[i].id === parseJson[i].id){
            state.users[i] = parseJson[i];
          }
        }
    },
    SET_STORAGE:(state)=>{ // STEP BACK set value to local storage (call when make changes)
      let data = JSON.stringify(state.users);
      window.localStorage.setItem('prevData', data);
    }

  },
  actions: {
    GET_START_USERS ({ commit }) 
    {
      commit('SET_USERS_TO_VUEX',usersMass);
    },
    DELETE_ELEM_FROM_VUEX({commit},id)
    {
      commit('DELETE_ELEMENT',id);
    },
    ADD_CONTACT_TO_VUEX({commit},user)
    {
      console.log("worked");
      if(user){
        commit('ADD_ITEM',user);
      }
    },
    CHANGE_USER_IN_VUEX({commit},user)
    {
      if(user){
        commit('CHANGE_USER',user);
      }
    },
    LOAD_TO_STOREGE({commit}){
      
      commit('SET_STORAGE');
 
    },
    LOAD_FROM_STOREGE({commit}){
        commit('UPDATE_FROM_STORAGE');
    }


  },
  modules: {
  },
  getters:{
    USERS(state){
      return state.users;
    },
  }
})

}
export default createStore
