<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon arrow-top-left-bottom-right-bold-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M5.83,8.66L3,11.5V3H11.5L8.66,5.83L18.17,15.34L21,12.5V21H12.5L15.34,18.17L5.83,8.66Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowTopLeftBottomRightBoldIcon",
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
