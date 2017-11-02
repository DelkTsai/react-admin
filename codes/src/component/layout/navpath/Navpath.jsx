/**
 * @file 面包屑组件
 * @author Zhang Peng
 * @see https://github.com/facebook/prop-types
 * @see https://ant.design/components/breadcrumb-cn/
 * @see https://ant.design/components/icon-cn/
 */
import { Breadcrumb, Icon } from 'antd';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getPathsAndKeyPath from '../util';
import './Navpath.less';

/**
 * 面包屑组件
 * @class
 */
class Navpath extends React.PureComponent {
  render() {
    const { menu, router } = this.props;
    // 根据选中菜单项的关键 key 数组获取对应组件
    const paths = [];
    const keyPath = [];
    getPathsAndKeyPath(router, menu, paths, keyPath);

    const breadcrumbItems = _.reverse(paths).map((item) => {
      return (
        <Breadcrumb.Item key={item.key}>
          <Icon type={item.icon} />
          <span>{item.title}</span>
        </Breadcrumb.Item>
      );
    });

    return (
      <Breadcrumb>
        {breadcrumbItems}
      </Breadcrumb>
    );
  }
}
function mapStateToProps(state) {
  return {
    menu: state.menu,
    router: state.router
  };
}
export default withRouter(connect(mapStateToProps)(Navpath));
