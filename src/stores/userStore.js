import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: 'John Doe',
    username: 'johndoe123',
    email: 'john.doe@example.com',
    description: 'Frontend developer and Vue.js enthusiast. Love building interactive web applications.',
    balance: 1250000,
    avatar: 'https://via.placeholder.com/150'
  })

  const updateUser = async (newData) => {
    try {
      // Simpan ke JSON (simulasi API call)
      await axios.put('/api/user.json', newData)
      
      // Update state lokal
      user.value = { ...user.value, ...newData }
      return true
    } catch (error) {
      console.error('Error updating user:', error)
      return false
    }
  }

  return { user, updateUser }
})