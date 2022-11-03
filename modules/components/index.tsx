import { Button } from '@components';
import { AppleIcon } from '@components/icons';

export interface ComponentPageProps { }

const Page = (props: ComponentPageProps) => {
  return (
    <div className="w-full h-screen bg-th-background">
      <div className="w-full flex flex-col px-[20rem] ">
        <div className="mb-5 text-[2rem] font-[400]">Basic Elements</div>
        <div className="mb-4 text-[1.5rem] font-[600] text-th-success">Button</div>

        {/* ---------------------------------------------------------- */}
        <div className="mb-3 mt-5 text-[0.8rem] font-[600]">Pick your color</div>
        <div className="button-container flex flex-row items-center justify-start gap-[1rem]">
          {['primary', 'success', 'danger', 'warning', 'info'].map((item, index) => {
            return <Button
              key={index}
              type={item}
              onClick={() => {
                console.log('click');
              }}
            >
              {item}
            </Button>
          })}

        </div>
        {/* ---------------------------------------------------------- */}

        {/* ---------------------------------------------------------- */}
        <div className="mb-3 mt-5 text-[0.8rem] font-[600]">Rounded</div>
        <div className="button-container flex flex-row items-center justify-start gap-[1rem]">
          {['primary', 'success', 'danger', 'warning', 'info'].map((item, index) => {
            return <Button
              key={index}
              rounded={true}
              type={item}
              onClick={() => {
                console.log('click');
              }}
            >
              {item}
            </Button>
          })}
        </div>
        {/* ---------------------------------------------------------- */}
        <div className="mb-3 mt-5 text-[0.8rem] font-[600]">OUTLINE</div>
        <div className="button-container flex flex-row items-center justify-start gap-[1rem]">
          {['primary', 'success', 'danger', 'warning', 'info'].map((item, index) => {
            return <Button
              key={index}
              outline={true}
              type={item}
              onClick={() => {
                console.log('click');
              }}
            >
              {item}
            </Button>
          })}

        </div>
        {/* ---------------------------------------------------------- */}
        {/* ---------------------------------------------------------- */}
        <div className="mb-3 mt-5 text-[0.8rem] font-[600]">OUTLINE ROUNDED</div>
        <div className="button-container flex flex-row items-center justify-start gap-[1rem]"></div>
        {/* ---------------------------------------------------------- */}
        {/* ---------------------------------------------------------- */}
        <div className="mb-3 mt-5 text-[0.8rem] font-[600]">LINKS</div>
        <div className="button-container flex flex-row items-center justify-start gap-[1rem]"></div>
        {/* ---------------------------------------------------------- */}
        {/* ---------------------------------------------------------- */}
        <div className="mb-3 mt-5 text-[0.8rem] font-[600]">ICON</div>
        <div className="button-container flex flex-row items-center justify-start gap-[1rem]"></div>
        {/* ---------------------------------------------------------- */}
        {/* ---------------------------------------------------------- */}
        <div className="mb-3 mt-5 text-[0.8rem] font-[600]">ACTIVE & DISABLED & LOADING</div>
        <div className="button-container flex flex-row items-center justify-start gap-[1rem]"></div>
        {/* ---------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Page;
