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
  </Card>
</template>

<script lang="ts" setup>
import {Card} from 'ant-design-vue';
import {navItems} from './data';
import {Icon} from '/@/components/Icon';

const CardGrid = Card.Grid;

// 点击快捷方式打开网页
function click() {

}
</script>
