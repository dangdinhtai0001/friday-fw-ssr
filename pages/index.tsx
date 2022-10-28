import type { NextPage } from 'next';
import { Button } from 'components';
import { useTheme } from 'next-themes';
import { AppleIcon } from '@components/icons';

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-black">
      <div className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-center text-gray-800 dark:text-gray-100 font-bold">
          Next Themes + Tailwind Dark Mode
        </h1>

        <Button disabled={false} icon={<AppleIcon />} onClick={() => { console.log("click") }}>Button</Button>
        <Button disabled={false} icon={<AppleIcon />} onClick={() => { console.log("click") }}></Button>

        <button
          className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
          onClick={() => {
            setTheme(theme === 'light' ? 'black' : 'light')
          }}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default Home;
