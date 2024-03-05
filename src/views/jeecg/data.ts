export interface NavItem {
  title: string;
  icon: string;
  color: string;
  route: string;
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca',
    route: '/dashboard/analysis',
  },
  {
    title: '工作台',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
    route: '/dashboard/workbench',
  },
  {
    title: '表单',
    icon: 'ant-design:table-outlined',
    color: '#e18525',
    route: '/online/cgform',
  },
  {
    title: '用户管理',
    icon: 'ant-design:user-outlined',
    color: '#3fb27f',
    route: '/system/user',
  },
  {
    title: '日志管理',
    icon: 'ant-design:interaction-outlined',
    color: '#4daf1bc9',
    route: '/monitor/log',
  },
  {
    title: '图表',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
    route: '/statisticst',
  },
];
