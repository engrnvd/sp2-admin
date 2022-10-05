<template>
    <b-modal id="createUserModal"
             ref="createUserModal"
             title="Add New User"
             hide-footer
             modal-class="modal-right">
        <apm-form action="/users" v-model="form">
            <apm-form-element field="name" label="Name" :model="form">
                <b-form-input v-model="form.name"/>
            </apm-form-element>
            <apm-form-element field="email" label="Email" :model="form">
                <b-form-input v-model="form.email"/>
            </apm-form-element>
            <apm-form-element field="password" label="Password" :model="form">
                <b-form-input v-model="form.password"/>
            </apm-form-element>
            <apm-form-element field="is_admin" label="Is Admin" :model="form">
                <switches v-model="form.is_admin" theme="custom" color="primary"></switches>
            </apm-form-element>
            <b-button variant="outline-secondary" @click="$refs.createUserModal.hide()" class="mr-2">Cancel</b-button>
            <b-button variant="primary" type="submit" class="mr-1">Save</b-button>
        </apm-form>
    </b-modal>
</template>

<script>
    export default {
        name: "CreateUserModal",
        props: {},
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    is_admin: '',
                }
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>

