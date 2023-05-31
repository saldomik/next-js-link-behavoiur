import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import Link from 'next/link'
import { useEffect } from 'react';
 
type Repo = {
  name: string;
  stargazers_count: number;
};
 
export const getStaticProps: GetStaticProps<{
  repo: Repo;
}> = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
};

export default function Page1({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  useEffect(() => {
    document.cookie = "my-token=abcd"
  }, []);

  return <div>
    <Link href='/'>Home</Link>
    <h1>{repo.stargazers_count}</h1>
    </div>;
}