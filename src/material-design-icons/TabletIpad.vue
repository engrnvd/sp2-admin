<template functional>
  <span :aria-hidden="props.decorative"
        :aria-label="props.title"
        :class="[data.class, data.staticClass]"
        class="material-design-icon tablet-ipad-icon"
        role="img"
        v-bind="data.attrs"
        v-on="listeners">
    <svg :fill="props.fillColor"
         class="material-design-icon__svg"
         :width="props.size"
         :height="props.size"
         viewBox="0 0 24 24">
      <path d="M19,19H4V3H19M11.5,23A1.5,1.5 0 0,1 10,21.5A1.5,1.5 0 0,1 11.5,20A1.5,1.5 0 0,1 13,21.5A1.5,1.5 0 0,1 11.5,23M18.5,0H4.5A2.5,2.5 0 0,0 2,2.5V21.5A2.5,2.5 0 0,0 4.5,24H18.5A2.5,2.5 0 0,0 21,21.5V2.5A2.5,2.5 0 0,0 18.5,0Z">
        <title>{{ props.title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TabletIpadIcon",
  props: {
    title: {
      type: String,
      default: "Tablet Ipad icon"
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
