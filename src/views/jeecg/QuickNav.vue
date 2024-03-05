<template>
  <Card title="快捷导航" v-bind="$attrs">
    <template v-for="item in navItems" :key="item">
      <CardGrid>
        <router-link :to="item.route">
        <span class="flex flex-col items-center">
          <Icon :color="item.color" :icon="item.icon" size="20"/>
          <span class="text-md mt-2">{{ item.title }}</span>
        </span>
        </router-link>
      </CardGrid>
    </template>
    <p class="hidden">{{ dataFromAddNav }}</p>
  </Card>
</template>

<script lang="ts" setup>
import {Card} from 'ant-design-vue';
import {NavItem, navItems} from './data';
import {Icon} from '/@/components/Icon';
import {toRefs, watch} from "vue";

const CardGrid = Card.Grid;
const props = defineProps({
  dataFromAddNav: {
    type: Object,
    default: {}
  },
});

const {dataFromAddNav} = toRefs(props);
watch(dataFromAddNav, (newValue: any, oldValue: any) => {
  const newItem: NavItem = {...dataFromAddNav.value};
  navItems.push(newItem);
});

</script>
