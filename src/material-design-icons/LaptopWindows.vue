<template functional>
  <span :aria-hidden="props.decorative"
        :aria-label="props.title"
        :class="[data.class, data.staticClass]"
        class="material-design-icon laptop-windows-icon"
        role="img"
        v-bind="data.attrs"
        v-on="listeners">
    <svg :fill="props.fillColor"
         class="material-design-icon__svg"
         :width="props.size"
         :height="props.size"
         viewBox="0 0 24 24">
      <path d="M3,4H21A1,1 0 0,1 22,5V16A1,1 0 0,1 21,17H22L24,20V21H0V20L2,17H3A1,1 0 0,1 2,16V5A1,1 0 0,1 3,4M4,6V15H20V6H4Z">
        <title>{{ props.title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LaptopWindowsIcon",
  props: {
    title: {
      type: String,
      default: "Laptop Windows icon"
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
