<script setup lang="ts">
import {Timeline} from 'vis-timeline/esnext'
import type {DataGroup, DataItem, TimelineOptions, TimelineEventPropertiesResult} from "vis-timeline/types";
import {events, type VisTimelineEvent} from './events';

const root = ref<HTMLDivElement | null>(null);
const timeline = ref<Timeline | null>(null);

interface Props {
  groups?: DataGroup[];
  items?: DataItem[];
  options?: TimelineOptions;
}

const props = defineProps<Props>();

const emit = defineEmits<VisTimelineEvent>();

const itemsRef = ref(props.items);
const groupsRef = ref(props.groups);

onMounted(() => {
  nextTick(() => {
    timeline.value = new Timeline(
      root.value,
      itemsRef.value,
      groupsRef.value,
      {}
    );

    for (const event of events) {
      timeline.value?.on(event, (props: any) => {
        emit(event as any, props);
      });
    }
  });
});

watch(props.items, (newItems: any) => {
  if (timeline.value) {
    timeline.value.setItems(newItems);
  }
});
watch(props.items, (newItems: any) => {
  if (timeline.value) {
    timeline.value.setItems(newItems);
  }
});
watch(props.items, (newItems: any) => {
  if (timeline.value) {
    timeline.value.setItems(newItems);
  }
});
</script>

<template>
  <div ref="root"></div>
</template>
