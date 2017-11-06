/**
 * 供非真实环境使用的菜单项仿真数据。
 * 进入应用后，菜单栏会查询 /menu/list 接口获取菜单项数据。
 * 被 axios-mock-adapter 拦截请求，将返回以下的模拟应答数据。
 * @type {{code: number, message: string, data: [*]}}
 */

module.exports = {
  code: 0,
  message: '成功',
  data: [{
    key: 'home',
    title: '首页',
    icon: 'home',
    type: 'Item',
    url: '/home',
    children: []
  }, {
    key: 'ui',
    title: '组件',
    icon: 'scan',
    type: 'SubMenu',
    children: [{
      key: '/ui/general',
      title: 'General',
      type: 'ItemGroup',
      parent: 'ui',
      children: [
        { key: '/ui/general/button', title: '按钮', type: 'Item', url: '/ui/general/button', parent: '/ui/general' },
        { key: '/ui/general/icon', title: '图标', type: 'Item', url: '/ui/general/icon', parent: '/ui/general' }
      ]
    }, {
      key: '/ui/data',
      title: 'Data',
      type: 'ItemGroup',
      parent: 'ui',
      children: [
        { key: '/ui/data/table', title: '表格', type: 'Item', url: '/ui/data/table', parent: '/ui/data' }
      ]
    }, {
      key: '/ui/feedback',
      title: 'Feedback',
      type: 'ItemGroup',
      parent: 'ui',
      children: [
        { key: '/ui/feedback/alert', title: '警告提示', type: 'Item', url: '/ui/feedback/alert', parent: '/ui/feedback' },
        { key: '/ui/feedback/modal', title: '对话框', type: 'Item', url: '/ui/feedback/modal', parent: '/ui/feedback' }
      ]
    }]
  }, {
    key: 'error',
    title: '错误',
    icon: 'close-circle-o',
    type: 'SubMenu',
    children: [
      { key: '/error/403', title: '403', type: 'Item', url: '/error/403', parent: 'error' },
      { key: '/error/404', title: '404', type: 'Item', url: '/error/404', parent: 'error' },
      { key: '/error/500', title: '500', type: 'Item', url: '/error/500', parent: 'error' }
    ]
  }]
};
