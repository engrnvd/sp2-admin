<template functional>
  <span :aria-hidden="props.decorative"
        :aria-label="props.title"
        :class="[data.class, data.staticClass]"
        class="material-design-icon microsoft-edge-legacy-icon"
        role="img"
        v-bind="data.attrs"
        v-on="listeners">
    <svg :fill="props.fillColor"
         class="material-design-icon__svg"
         :width="props.size"
         :height="props.size"
         viewBox="0 0 24 24">
      <path d="M 2.73675,10.8077C 3.8293,-1.36109 22.5157,-1.36109 21.1971,13.5579L 8.61392,13.5579C 8.61392,17.8527 14.4157,19.209 19.5394,16.3081L 19.5394,20.5276C 13.2478,23.8806 4.9972,21.4318 4.9972,14.0853C 4.9972,8.58476 9.97019,6.8142 9.97019,6.8142C 9.97019,6.8142 8.57624,8.58489 8.53857,10.0542L 15.6967,10.0542C 15.6967,2.93376 5.90137,5.57095 2.73675,10.8077 Z">
        <title>{{ props.title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MicrosoftEdgeLegacyIcon",
  props: {
    title: {
      type: String,
      default: "Microsoft Edge Legacy icon"
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
