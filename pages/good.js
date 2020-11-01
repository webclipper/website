import React from 'react';
import './good.scss';

const Home = () => {
  return (
    <React.Fragment>
      <div className="box-border h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200">
        <div className="h-full w-full bg-gray-400"></div>
      </div>
    </React.Fragment>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Home;
