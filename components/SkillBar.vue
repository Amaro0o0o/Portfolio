<template>
  <div class="mb-4 last:mb-0">
    <div class="flex justify-between text-xs text-gray-400 mb-1">
      <span>{{ label }}</span>
      <span>{{ value }}%</span>
    </div>
    <div class="h-2 rounded-full bg-slate-800 overflow-hidden">
      <div
        class="h-full rounded-full bg-gradient-to-r transition-all duration-700"
        :class="color"
        :style="{ width: value + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  color: { type: String, required: true }, // Tailwind gradient classes
});
</script>
