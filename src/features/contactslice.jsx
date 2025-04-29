import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    entries: []
  },
  reducers: {
    addContact: (state, action) => {
      state.entries.push(action.payload)
    },
    updateContact:(state,action) =>{
        const {id , updatedContact} = action.payload
        state.entries[id]= updatedContact
    },
    deleteContact:(state,action)=>{
        const index = action.payload
        state.entries = state.entries.filter(contact => contact.id === index)
    }
  }
})

export const { addContact ,updateContact,deleteContact} = contactSlice.actions
export default contactSlice.reducer