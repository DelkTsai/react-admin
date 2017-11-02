import React from 'react';
import { Link } from 'react-router-dom';
import img from './404.png';
import './NotFoundView.less';

export default () => (
  <div className="not-found">
    <img src={img} alt="404" />
    <p>您访问的页面不存在！ <Link to={'/'}>请回到首页</Link></p>
  </div>
);
