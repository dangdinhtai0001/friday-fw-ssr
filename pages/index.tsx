import type { NextPage } from 'next';
import { Button } from 'components';
import { useTheme } from 'next-themes';
import { AppleIcon } from '@components/icons';

const themes = [{ name: 'Light' }, { name: 'Dark' }, { name: 'Emerald' }, { name: 'Pink' }];

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-black">
      <div className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-center  font-bold text-th-accent">
          Next Themes + Tailwind Dark Mode
        </h1>

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

        <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-red-700 rounded hover:bg-red-700 group">
          {/* purple box */}
          <div className="w-0 h-full rounded bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full opacity-50 -z-1"></div>
          <span className="w-full text-black transition-colors duration-300 ease-in-out  z-10">
            hover effect 2
          </span>
        </button>

        <select
          name="theme"
          id="theme-select"
          className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
          onChange={e => setTheme(e.currentTarget.value)}
          value={theme}
        >
          <option value="">Select Theme</option>
          {themes.map(t => (
            <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Home;
