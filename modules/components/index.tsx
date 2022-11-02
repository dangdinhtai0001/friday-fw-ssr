import { Button } from '@components';
import { AppleIcon } from '@components/icons';

export interface ComponentPageProps { }

const Page = (props: ComponentPageProps) => {
    return (
        <div className='w-full h-screen bg-th-background'>
            <div className="w-full flex flex-col px-[10rem] ">
                <div className='mb-5 text-[2rem] font-[400]'>Basic Elements</div>
                <div className='mb-4 text-[1.5rem] font-[600]'>Button</div>
                <div className='mb-3 mt-5 text-[0.8rem] font-[600]'>Pick your color</div>

                <div className="button-container flex flex-row ">
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
                </div>
            </div>
        </div>
    );
}

export default Page;
