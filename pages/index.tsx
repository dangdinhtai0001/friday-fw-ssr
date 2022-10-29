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
        <h1 className="text-5xl text-center  font-bold text-th-accent-medium">
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

        <div className="v-[100px] h-[100px] border-2 border-red-50 bg-th-background">1</div>

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
