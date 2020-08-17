import React, { Component } from "react";
import { createBrowserHistory } from "history";
import Router from "./Router";

export default class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    /**
     * 通过 history 的 createBrowserHistory API 创建 History
     *
     * history 对象中包含监听方法 listen、已经路由切换的各种 api：push、replace、goBack 等
     */
    this.history = createBrowserHistory();
  }

  render() {
    const { children } = this.props;
    return <Router history={this.history}>{children}</Router>;
  }
}
