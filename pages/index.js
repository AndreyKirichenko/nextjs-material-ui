import React from 'react';

import { SectionWelcome } from '../components/SectionWelcome'

const IndexPage = () => {
  return (
    <>
      <SectionWelcome />
    </>
  );
};

IndexPage.getInitialProps = () => {
  return {};
};

export default IndexPage;