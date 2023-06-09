import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link'

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

export default function Home({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <main>
        <h1>{repo.name}</h1>
        <nav style={{display: 'flex'}}>
          <Link style={{marginRight: '10px'}} href="/">Home</Link>
          <Link href="/page1">Page1</Link>
        </nav>
      </main>
    </>
  )
}
