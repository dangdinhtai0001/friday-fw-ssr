import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const themes = [
  { name: 'Light' },
  { name: 'Dark' },
  { name: 'Emerald' },
  { name: 'Pink' },
];

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-th-background w-full h-screen">
      <div className="py-20 flex flex-col gap-3 items-center justify-center">
        <h1 className="text-5xl text-center  font-bold text-th-primary">
          Next Themes + Tailwind Dark Mode
        </h1>
        <select
          name="theme"
          id="theme-select"
          className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
          onChange={e => setTheme(e.currentTarget.value)}
          value={theme}
        >
          <option value="">Select Theme</option>
          {themes.map(t => (
            <option
              key={t.name.toLowerCase()}
              value={t.name.toLowerCase()}
            >
              {t.name}
            </option>
          ))}
        </select>

        <Link href="/demo">demo</Link>
      </div>
    </div>
  );
};

export default Home;
