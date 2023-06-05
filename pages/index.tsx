import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>this is next app</div>
      <Link href="/theme"> Theme Page </Link>
      <br />
      <Link href="/search"> Search Page </Link>
      <br />
      <Link href="/manipulation"> Manipulation Page </Link>
    </>
  );
}
