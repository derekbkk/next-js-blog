import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import Head from 'next/head';

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>All My posts On Web Development</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
        </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
