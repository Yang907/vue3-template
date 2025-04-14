<template>
    <svg :class="svgClass" :style="{ color: color }" aria-hidden="true">
        <use :href="symbolId" />
    </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    prefix: {
        type: String,
        default: 'icon'
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: ''
    }
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);

const svgClass = computed(() => {
    if (props.name) return `svg-icon icon-${props.name}`;
    return 'svg-icon';
});
</script>
<style lang="less" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
}
</style>
