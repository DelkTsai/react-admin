/**
 * @file Sider-Header-Content-Footer 式页面级整体布局
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Layout } from 'antd';
import React from 'react';
import Content from './content/Content';
import Footer from './footer/Footer';
import Header from './header/Header';
import './Layout.less';
import Sider from './sider/Sider';

class CustomLayout extends React.PureComponent {
  render() {
    return (
      <Layout className="ant-layout-has-sider">
        <Sider />
        <Layout>
          <Header />
          <Content type="SHCF">
            {this.props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
export default CustomLayout;
