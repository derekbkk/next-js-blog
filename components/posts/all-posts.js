import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';
import Head from 'next/head';

export default function AllPosts(props) {
  return (
    <>
      <Head>
        <title>All My posts On Web Development</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
      </Head>
      <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={props.posts} />
      </section>
    </>
  );
}
