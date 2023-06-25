import React from 'react';
import Header from './header';
import Footer from './footer';

function Layout({ children, ...props }) {
  console.log(children, props);
  return (
    <div className="layout">
      <Header className="" {...props} />
      <main className="">
        <section className="">{children}</section>
      </main>
      {/* TODO: place your footer company */}
      <Footer />
    </div>
  );
}

export default Layout;
