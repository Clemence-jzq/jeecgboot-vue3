import {FormSchema} from "@/components/Table";
export const formSchema: FormSchema[] = [
    {
        field: 'title',
        label: '名称',
        component: 'Input',
        required: true
    },
    {
        field: 'icon',
        label: '菜单图标',
        component: 'IconPicker',
        required: true,
    },
    {
        field: 'color',
        label: '颜色',
        component: 'Input',
    },
    {
        field: 'route',
        label: '跳转地址',
        component: 'Input',
        required: true,
    },
]
