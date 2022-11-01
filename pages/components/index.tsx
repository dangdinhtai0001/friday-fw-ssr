import type { NextPage } from 'next';
import { Button } from '@components';
import { AppleIcon } from '@components/icons';

const Page: NextPage = () => {
  return (
    <>
      <Button
        disabled={false}
        icon={<AppleIcon />}
        type="primary"
        onClick={() => {
          console.log('click');
        }}
      >
        Button
      </Button>
      <Button
        disabled={false}
        icon={<AppleIcon />}
        color="red-100"
        onClick={() => {
          console.log('click');
        }}
      ></Button>
    </>
  );
};

export default Page;
