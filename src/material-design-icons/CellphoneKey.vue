<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon cellphone-key-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M7,1A2,2 0 0,0 5,3V7H7V4H17V20H7V17H5V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1H7M6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C7.31,15 8.42,14.17 8.83,13H11V15H13V13H14V11H8.83C8.42,9.83 7.31,9 6,9M6,11A1,1 0 0,1 7,12A1,1 0 0,1 6,13A1,1 0 0,1 5,12A1,1 0 0,1 6,11Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CellphoneKeyIcon",
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
