<template>
    <main id="settings">
        <h1>Settings</h1>
        
        <div class="settings-container">
            <div class="avatar-section">
                <img :src="form.avatar" alt="User Avatar" class="avatar-img">
                <input type="file" @change="handleAvatarChange" accept="image/*">
            </div>
            
            <form @submit.prevent="saveChanges" class="settings-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input id="name" v-model="form.name" type="text">
                </div>
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" v-model="form.email" type="email">
                </div>
                
                <div class="form-group">
                    <label for="username">Username</label>
                    <input id="username" v-model="form.username" type="text" disabled>
                </div>
                
                <div class="form-group">
                    <label for="balance">Balance</label>
                    <input id="balance" v-model.number="form.balance" type="number">
                </div>
                
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" v-model="form.description"></textarea>
                </div>
                
                <button type="submit" class="save-btn">Save Changes</button>
            </form>
        </div>
    </main>
</template>

<script>
import { useUserStore } from '@/stores/userStore'
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
    setup() {
        const userStore = useUserStore()
        const form = ref({
            name: '',
            email: '',
            username: '',
            description: '',
            balance: 0,
            avatar: ''
        })

        // Inisialisasi form dengan data dari store
        onMounted(() => {
            form.value = { ...userStore.user }
        })

        const handleAvatarChange = (event) => {
            const file = event.target.files[0]
            if (file) {
                const reader = new FileReader()
                reader.onload = (e) => {
                    form.value.avatar = e.target.result
                }
                reader.readAsDataURL(file)
            }
        }

        const saveChanges = async () => {
            const success = await userStore.updateUser(form.value)
            if (success) {
                alert('Profile updated successfully!')
            } else {
                alert('Failed to update profile')
            }
        }

        return {
            form,
            handleAvatarChange,
            saveChanges
        }
    }
}
</script>

<style scoped>
.settings-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.avatar-section {
    text-align: center;
    margin-bottom: 20px;
}

.avatar-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.settings-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.form-group textarea {
    min-height: 100px;
    resize: vertical;
}

.save-btn {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.save-btn:hover {
    background-color: #0056b3;
}
</style>