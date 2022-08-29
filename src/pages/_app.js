// ** Next Imports
import Head from 'next/head';
import { Router } from 'next/router';

// ** Loader Import
import NProgress from 'nprogress';

// ** Emotion Imports
import { CacheProvider } from '@emotion/react';

// ** Config Imports
import themeConfig from 'src/configs/themeConfig';

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout';
import ThemeComponent from 'src/@core/theme/ThemeComponent';

// ** Contexts
import {
  SettingsConsumer,
  SettingsProvider,
} from 'src/@core/context/settingsContext';

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'

// ** Global css styles
import '../../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';

const clientSideEmotionCache = createEmotionCache();

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
}

// ** Configure JSS & ClassName
const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // Variables
  const getLayout =
    Component.getLayout ?? ((page) => <UserLayout>{page}</UserLayout>);

  return (
    <CacheProvider value={emotionCache}>
      <SessionProvider>
        <Head>
          <title>SmartAccess</title>
          <meta name="description" content="Smarter way of getting access" />
          <meta name="keywords" content="SmartAccess, SmartGate, LogAccess" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => {
              return (
                <ThemeComponent settings={{ ...settings}}>
                  {getLayout(<Component {...pageProps} />)}
                </ThemeComponent>
              );
            }}
          </SettingsConsumer>
        </SettingsProvider>
        </SWRConfig>
      </SessionProvider>
    </CacheProvider>
  );
};

export default App;
