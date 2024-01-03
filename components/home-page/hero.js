import Image from 'next/image';
import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/derek_lee.jpg"
          alt="An image showing Derek"
          height={300}
          width={300}
          priority={true}
        />
      </div>
      <h1>Hi, I'm Derek</h1>
      <p>
        I blog about web development — especially frontend frameworks like
        Angular and React.
      </p>
    </section>
  );
}
