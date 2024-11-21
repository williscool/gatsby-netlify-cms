import React from "react";
import Layout from "../components/Layout";
import "../styles/contact.scss";


/**
 * Note: this page could be named redirect. as taht is all it will do 
 * redirect to the contact page 
 *
 * 
 */

const ContactPage = () => (
  <Layout>
    <div className="contactRedirect  container">
      <h1 className="contactRedirect-title">Redirecting...</h1>
      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3d4eWZ2dThuaWdnM3ZqdHdseWx1cGpxaGRjbndsMmFmcW0yMjl1eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1kkxWqT5nvLXupUTwK/giphy.webp" alt="Computer Doggo"></img>
      <a style={{marginTop: 40}} href='#'> Computer Doggo taking you there! </a>
      <p className="contactRedirect-description">{`
    (___________________________()6 \`-,
    (   ______________________   /''"\`
    //\\                      //\\
    "" ""                     "" ""
      `}</p>

    </div>
  </Layout>
);

export function Head() {
  return (
    <title>Contact Redirect</title>
  )
}

export default ContactPage;
