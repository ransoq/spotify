import { Button } from '@material-ui/core';

import MainLayout from '../layouts/MainLayout';

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className='center'>
          <h1>Welcome</h1>
          <h3>Here are the best songs!</h3>
        </div>
      </MainLayout>
      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-flow: nowrap column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default Index;