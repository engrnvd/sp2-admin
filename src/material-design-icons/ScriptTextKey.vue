<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon script-text-key-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M19 2H8C6.3 2 5 3.3 5 5V16H13C13.8 15.4 14.9 15 16 15C16.7 15 17.4 15.2 18 15.4V5C18 4.4 18.4 4 19 4S20 4.4 20 5V6H22V5C22 3.3 20.7 2 19 2M14 12H8V10H14V12M15 8H8V6H15V8M11.4 22H5C3.3 22 2 20.7 2 19V18H11.4C11.1 18.6 11 19.3 11 20S11.1 21.4 11.4 22M18.8 19C18.4 17.8 17.3 17 16 17C14.3 17 13 18.3 13 20S14.3 23 16 23C17.3 23 18.4 22.2 18.8 21H20V23H22V21H23V19H18.8M16 21.3C15.3 21.3 14.7 20.7 14.7 20S15.3 18.7 16 18.7C16.7 18.7 17.3 19.3 17.3 20S16.7 21.3 16 21.3Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ScriptTextKeyIcon",
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
