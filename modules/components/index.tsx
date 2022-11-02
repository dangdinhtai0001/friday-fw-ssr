import { Button } from '@components';
import { AppleIcon } from '@components/icons';

export interface ComponentPageProps {}

const Page = (props: ComponentPageProps) => {
  return (
    <div className="w-full h-screen bg-th-background">
      <div className="w-full flex flex-col px-[20rem] ">
        <div className="mb-5 text-[2rem] font-[400]">Basic Elements</div>
        <div className="mb-4 text-[1.5rem] font-[600] text-th-success">Button</div>
        <div className="mb-3 mt-5 text-[0.8rem] font-[600]">Pick your color</div>

        <div className="button-container flex flex-row gap-[1rem]">
          <Button
            disabled={false}
            type="primary"
            onClick={() => {
              console.log('click');
            }}
          >
            Primary
          </Button>

          <Button
            disabled={false}
            type="success"
            onClick={() => {
              console.log('click');
            }}
          >
            Success
          </Button>
          <Button
            disabled={false}
            type="warning"
            onClick={() => {
              console.log('click');
            }}
          >
            warning
          </Button>
          <Button
            disabled={false}
            type="danger"
            onClick={() => {
              console.log('click');
            }}
          >
            danger
          </Button>
          <Button
            disabled={false}
            type="info"
            onClick={() => {
              console.log('click');
            }}
          >
            info
          </Button>
          <Button
            disabled={false}
            icon={<AppleIcon />}
            color="red-100"
            onClick={() => {
              console.log('click');
            }}
          ></Button>

          <div className="v-10 h-20 bg-th-success">
            <div className="font-roboto"> hello</div>
            <div className=""> hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
