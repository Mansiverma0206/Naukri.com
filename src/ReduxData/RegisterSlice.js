import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
   name : 'reg',
   initialState : {
      value : {}
   },
   reducers : {
      addPersonalData : (state,action)=>{
         state.value = {...state.value, personal : action.payload}
      },

      addEducationItem : (state,action)=>{
            var oldData = state.value.education==undefined?[]:state.value.education
            state.value = {...state.value, education : [...oldData,action.payload]}
      },
      dltEducatioItem : (state,action)=>{
         state.value = {...state.value,
         education : state.value.education.filter(ob=>ob.id!=action.payload.id)
         }
      },

      addExperinceItem: (state,action)=>{
         var oldData = state.value.experience==undefined?[]:state.value.experience
         state.value = {...state.value,experience : [...oldData,action.payload]}
      },
      dltExperinceItem : (state,action)=>{
         state.value = {...state.value,
         experince : state.value.experience.filter(ob=>ob.id!=action.payload.id)}
      },
   }
})

export const { addPersonalData , addEducationItem , dltEducatioItem , addExperinceItem , dltExperinceItem} = slice.actions
export default slice.reducer;