import type { NextPage } from 'next';
import ComponentPage, { ComponentPageProps } from '@modules/components';

const Page: NextPage = (props: ComponentPageProps) => {
  return (
    <ComponentPage  {...props} />
  );
};

export default Page;
