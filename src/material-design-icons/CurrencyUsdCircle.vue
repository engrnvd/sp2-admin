<template functional>
  <span :aria-hidden="props.decorative"
        :aria-label="props.title"
        :class="[data.class, data.staticClass]"
        class="material-design-icon currency-usd-circle-icon"
        role="img"
        v-bind="data.attrs"
        v-on="listeners">
    <svg :fill="props.fillColor"
         class="material-design-icon__svg"
         :width="props.size"
         :height="props.size"
         viewBox="0 0 24 24">
      <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2M15 10H11V11H14A1 1 0 0 1 15 12V15A1 1 0 0 1 14 16H13V17H11V16H9V14H13V13H10A1 1 0 0 1 9 12V9A1 1 0 0 1 10 8H11V7H13V8H15Z">
        <title>{{ props.title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CurrencyUsdCircleIcon",
  props: {
    title: {
      type: String,
      default: "Currency Usd Circle icon"
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
