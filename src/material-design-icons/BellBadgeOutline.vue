<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon bell-badge-outline-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21 6.5C21 8.43 19.43 10 17.5 10S14 8.43 14 6.5 15.57 3 17.5 3 21 4.57 21 6.5M11.5 22C12.61 22 13.5 21.11 13.5 20H9.5C9.5 21.11 10.4 22 11.5 22M18 12C17.84 12 17.67 12 17.5 12C17 12 16.5 11.92 16 11.79V17H7V10.5C7 8 9 6 11.5 6C11.68 6 11.85 6.03 12 6.05C12.1 5.06 12.45 4.14 13 3.37C12.92 2.6 12.28 2 11.5 2C10.67 2 10 2.67 10 3.5V4.18C7.13 4.86 5 7.43 5 10.5V16L3 18V19H20V18L18 16V12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BellBadgeOutlineIcon",
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
