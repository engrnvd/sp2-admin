<script setup lang="ts">
import { useUsersStore } from '@/views/users/store'
import CloudDownloadIcon from '@/material-design-icons/CloudDownload.vue'
import ReloadIcon from '@/material-design-icons/Reload.vue'
import PlusIcon from '@/material-design-icons/Plus.vue'
import UIconBtn from '@/U/components/UIconBtn.vue'
import ApmFilter from '@/components/common/crud/ApmFilter.vue'
import ApmEditable from '@/components/common/crud/ApmEditable.vue'
import NotFoundRow from '@/components/common/crud/NotFoundRow.vue'
import ApmDeleteBtn from '@/components/common/crud/ApmDeleteBtn.vue'
import ApmPagination from '@/components/common/crud/ApmPagination.vue'
import MainLoader from '@/components/common/MainLoader.vue'
import { onMounted, watch } from 'vue'

const users = useUsersStore()

onMounted(() => {
    users.load()
})

watch(() => users.req.params, () => {
    users.load()
}, { deep: true })
</script>

<template>
    <div>
        <div class="d-flex align-items-center gap-2 px-4">
            <div class="flex-grow-1">
                <h2>Users</h2>
            </div>
            <UIconBtn tooltip="Create a new User">
                <PlusIcon/>
            </UIconBtn>
            <UIconBtn tooltip="Download CSV" @click.prevent="users.load()">
                <CloudDownloadIcon/>
            </UIconBtn>
            <UIconBtn
                :loading="users.req.loading"
                tooltip="Reload"
                @click.prevent="users.load()">
                <ReloadIcon/>
            </UIconBtn>
        </div>

        <!--        <create-user-modal/>-->

        <div class="card mb-4" style="min-height: 30em">
            <table class="w100 table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>
                        <ApmFilter
                            field-name="name"
                            field-label="Name"
                            v-model="users.req.params"
                        />
                    </th>
                    <th>
                        <ApmFilter
                            field-name="email"
                            field-label="Email"
                            v-model="users.req.params"
                        />
                    </th>
                    <th>
                        <ApmFilter
                            field-name="is_admin"
                            field-label="Is Admin"
                            v-model="users.req.params"
                        />
                    </th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users.req.data.data" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>
                        <ApmEditable
                            type="text"
                            field="name"
                            :url="`/users/${user.id}`"
                            v-model="user.name"
                        ></ApmEditable>
                    </td>
                    <td>
                        <ApmEditable
                            type="text"
                            field="email"
                            :url="`/users/${user.id}`"
                            v-model="user.email"
                        ></ApmEditable>
                    </td>
                    <td>
                        <ApmEditable
                            type="text"
                            field="is_admin"
                            :url="`/users/${user.id}`"
                            v-model="user.is_admin"
                        ></ApmEditable>
                    </td>
                    <td class="table-actions">
                        <ApmDeleteBtn :req="users.req" :id="user.id"/>
                    </td>
                </tr>
                <NotFoundRow :req="users.req"/>
                </tbody>
            </table>
            <MainLoader v-if="users.req.loading"/>
        </div>
        <ApmPagination :req="users.req"/>
    </div>
</template>
