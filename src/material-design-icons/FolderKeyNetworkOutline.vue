<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon folder-key-network-outline-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M9 8C7.34 8 6 9.34 6 11S7.34 14 9 14C10.31 14 11.42 13.17 11.83 12H14V14H16V12H17V10H11.83C11.42 8.83 10.31 8 9 8M9 12C8.45 12 8 11.55 8 11S8.45 10 9 10 10 10.45 10 11 9.55 12 9 12M15 20C15 19.45 14.55 19 14 19H13V17H19C20.11 17 21 16.11 21 15V7C21 5.9 20.11 5 19 5H13L11 3H5C3.9 3 3 3.9 3 5V15C3 16.11 3.9 17 5 17H11V19H10C9.45 19 9 19.45 9 20H2V22H9C9 22.55 9.45 23 10 23H14C14.55 23 15 22.55 15 22H22V20H15M5 15V7H19V15H5Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FolderKeyNetworkOutlineIcon",
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {

      default: '1em'
    }
  }
}
</script>
