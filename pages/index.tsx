import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>this is next app</div>
      <Link href="/theme"> Theme Page </Link>
      <br />
      <Link href="/components"> Components Page </Link>
    </>
  );
}
