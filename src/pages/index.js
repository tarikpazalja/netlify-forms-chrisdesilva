import React, { useState } from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"

const IndexPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: ""
  })

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value

    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }
  return (
    <Layout>
      <form method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="contact" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={formState.name}
          placeholder="enter your name"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          value={formState.email}
          placeholder="enter your email"
        />
        <button type="submit">Submit</button>
      </form>

    </Layout>
  )

}


export default IndexPage
