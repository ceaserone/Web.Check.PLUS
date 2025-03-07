import { Route, Routes } from 'react-router-dom';
import Styled from 'styled-components';
import * as Sentry from '@sentry/react';

import Home from 'pages/Home';
import Results from 'pages/Results';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import colors from 'styles/colors';

const Container = Styled.main`
  background: ${colors.background};
  color: ${colors.textColor};
  width: 100vw;
  margin: 0;
`;

Sentry.init({
  dsn: 'https://e0f25608476642b7456b5b25798c8f99@o4508886807609344.ingest.us.sentry.io/4508886859579392',
  beforeSend(event) { // Check if error logging is disabled
    const ignoredHosts = ['localhost', '127.0.0.1'];
    const disableErrors = process.env.REACT_APP_DISABLE_ERROR_LOGGING;
    if (disableErrors || ignoredHosts.includes(window.location.hostname)) {
        return null;
    }
    return event;
  }
});

function App() {
  return (
    <Container>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/results/:address" element={<Results />} />
      </Routes>
    </Container>
  );
}

export default App;
