<script setup lang="ts">
import UModal from '@/U/components/UModal.vue'
import UInput from '@/U/components/UInput.vue'
import { requiredRule } from '@/Vee/rules/required.rule'
import { useValidator } from '@/Vee/useValidator'
import { useUsersStore } from '@/views/users/store'
import { Validator } from '@/Vee/validator'
import { emailRule } from '@/Vee/rules/email.rule'
import { useRouter } from 'vue-router'

const router = useRouter()
const users = useUsersStore()

const v = useValidator(users.form, (v: Validator) => {
    v.addRule(requiredRule('name'))
    v.addRule(requiredRule('email'))
    v.addRule(requiredRule('password'))
    v.addRule(emailRule('email'))
})

</script>

<template>
    <UModal
        title="Add New User"
        :model-value="true"
        @cancel="router.back()"
        ok-title="Save"
    >
        <form>
            <UInput
                v-model="users.form.name"
                label="Name"
                :errors="v.errors.name"
                class="mb-4"
            />

            <UInput
                v-model="users.form.email"
                label="Email"
                type="email"
                :errors="v.errors.email"
                class="mb-4"
            />

            <UInput
                v-model="users.form.password"
                label="Password"
                :errors="v.errors.password"
                class="mb-4"
            />

            <UInput
                v-model="users.form.is_admin"
                label="Is Admin"
                :errors="v.errors.is_admin"
                class="mb-4"
            />
        </form>
    </UModal>
</template>

<style scoped>

</style>

