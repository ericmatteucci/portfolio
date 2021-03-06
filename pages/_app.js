import React from 'react'
import App from 'next/app'
import withRedux from 'next-redux-wrapper';
import initializeStore from '../src/reducers';
import 'regenerator-runtime/runtime';
import './app.scss';
import '../src/styles/themes.scss';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="theme-dark">
        <Component {...pageProps} />
      </div>
      );
  }
}

export default withRedux(initializeStore)(MyApp);