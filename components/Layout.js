import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const MyLogo = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <Image src="/logo.png"
        alt="logo"
        width={100}
        height={100}/>
      </a>
    )
  })

const Layout = ({ children, title = 'Crypto Currency' }) => {
    return (
      <div className='layout'>
        <Head>
          <title>{title}</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <header className='header'>
            <div className="coin_logo">
            <Link href="/" passHref>
            <MyLogo />
        </Link>
            </div>

        <h3>CRYPTO</h3>
        </header>
        <main>{children}</main>
      </div>
    );
  };
  
  export default Layout;



