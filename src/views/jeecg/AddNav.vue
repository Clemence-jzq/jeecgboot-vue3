<script lang="ts" setup>
import {Card} from "ant-design-vue";
import {BasicForm, useForm} from "@/components/Form/index";
import {formSchema} from './nav.data';

const emit = defineEmits(['send-data']);
//表单配置
let [registerForm, {resetFields, setFieldsValue, validate}] = useForm({
  schemas: formSchema,
  labelCol: {style: {width: '18%'}},
  showActionButtonGroup: true,
  actionColOptions: {span: 17},
  submitButtonOptions: {text: '确认', preIcon: '',},
  resetButtonOptions: {preIcon: '',}
});

function handleSubmit (values: any)  {
  if (values.color == undefined) {
    values.color = '#000000';
  }

  emit('send-data', values);
}
</script>

<template>
  <Card title="添加快捷方式">
    <BasicForm @register="registerForm" @submit="handleSubmit"/>
  </Card>
</template>

<style lang="less" scoped>

</style>
