<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon numeric9-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M13,17A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11A2,2 0 0,0 9,9V11A2,2 0 0,0 11,13H13V15H9V17H13M13,11H11V9H13V11Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric9Icon",
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
