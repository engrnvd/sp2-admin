<script lang="ts" setup>

import { FetchRequest } from '../../helpers/fetch-request'
import GoogleIcon from '../../material-design-icons/Google.vue'
import { useAuthStore } from '../../stores/auth.store'
import UButton from '../../U/components/UButton.vue'
import UInput from '../../U/components/UInput.vue'
import { emailRule } from '../../Vee/rules/email.rule'
import { minLengthRule } from '../../Vee/rules/minLength.rule'
import { requiredRule } from '../../Vee/rules/required.rule'
import { useValidator } from '../../Vee/useValidator'

const auth = useAuthStore()
const v = useValidator(auth.form, v => {
    v.addRule(requiredRule('email'))
    v.addRule(emailRule('email'))
    v.addRule(requiredRule('password'))
    v.addRule(minLengthRule('password', 6))
})

function submit() {
    v.validate()
    if (v.hasErrors) return

    auth.login().then(data => {
        const req = new FetchRequest('user', 'GET')
        req.send()
    })
}
</script>

<template>
    <div class="all-center flex-grow-1">
        <div class="card">
            <div style="padding: 3em; min-width: 450px">
                <h2 class="m-0 pb-5">Log in</h2>
                <form action="" @submit.prevent="submit">
                    <UInput type="text" v-model="auth.form.email" label="Email" class="mb-4" :errors="v.errors.email"/>
                    <UInput type="password" v-model="auth.form.password" label="Password" class="mb-4"
                            :errors="v.errors.password"/>

                    <div class="d-flex align-items-center justify-content-between">
                        <UButton>Login</UButton>
                        <a href="" class="text-base" @click.prevent="">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.register-btn {
    display: block;
    height: 4em;
    text-transform: none;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
}
</style>
