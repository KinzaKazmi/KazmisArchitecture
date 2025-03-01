import Head from 'next/head';
import cls from 'classnames';
import styles from '../styles/Contact.module.css';
import { TitleWrap } from '../components/title-wrap/title-wrap.component';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kazmis Site | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={cls('main mx-auto max-w-7xl pl-10 pr-10')}>
        <TitleWrap title="Contact" subtitle="Get in touch" />

        <div className={cls('grid md:grid-cols-3 xs:grid-cols-1')}>
          <div className={cls(styles.contactSingleItem)}>
            <div className={cls(styles.contactIcon)}>
              <i class="las la-phone"></i>
            </div>
            <div className={cls(styles.contactTitle)}>
              <h3>Phone</h3>
            </div>           
            <div className={cls(styles.contactDivider)}></div>            
            <div className={cls(styles.contactText)}>
              <a href='tel:+923085736457'>+92308-5736457</a>
            </div>
          </div>

          <div className={cls(styles.contactSingleItem)}>
            <div className={cls(styles.contactIcon)}>
              <i class="las la-envelope"></i>
            </div>
            <div className={cls(styles.contactTitle)}>
              <h3>Email</h3>
            </div>
            <div className={cls(styles.contactDivider)}></div>            
            <div className={cls(styles.contactText)}>
            <a href="mailto:kazmis@kazmis.com">kazmis@kazmis.com</a>
            </div>
          </div>

          <div className={cls(styles.contactSingleItem)}>
            <div className={cls(styles.contactIcon)}>
              <i class="las la-location-arrow"></i>
            </div>
            <div className={cls(styles.contactTitle)}>
              <h3>Location</h3>
            </div>            
            <div className={cls(styles.contactDivider)}></div>            
            <div className={cls(styles.contactText)}>
              <a href="#">View on Google Map</a>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  )
}