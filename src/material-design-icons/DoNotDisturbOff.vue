<template functional>
  <span :aria-hidden="props.decorative"
        :aria-label="props.title"
        :class="[data.class, data.staticClass]"
        class="material-design-icon do-not-disturb-off-icon"
        role="img"
        v-bind="data.attrs"
        v-on="listeners">
    <svg :fill="props.fillColor"
         class="material-design-icon__svg"
         :width="props.size"
         :height="props.size"
         viewBox="0 0 24 24">
      <path d="M17,11V13H15.54L20.22,17.68C21.34,16.07 22,14.11 22,12A10,10 0 0,0 12,2C9.89,2 7.93,2.66 6.32,3.78L13.54,11H17M2.27,2.27L1,3.54L3.78,6.32C2.66,7.93 2,9.89 2,12A10,10 0 0,0 12,22C14.11,22 16.07,21.34 17.68,20.22L20.46,23L21.73,21.73L2.27,2.27M7,13V11H8.46L10.46,13H7Z">
        <title>{{ props.title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DoNotDisturbOffIcon",
  props: {
    title: {
      type: String,
      default: "Do Not Disturb Off icon"
    },
    decorative: {
      type: Boolean,
      default: false
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
