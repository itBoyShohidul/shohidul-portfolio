import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";

import "../styles/globals.css";
import "../styles/index.css";
import Footer from "@/components/Footer";

function SuperAdmin() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [sourceCode, setSourceCode] = useState("");
  const [adminSecret, setAdminSecret] = useState("");

  const addProjectEnv = process.env.NEXT_PUBLIC_ADD_PROJECT;

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const addProject = async (formData) => {
    try {
      const response = await axios.post(addProjectEnv, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      // Handle the response or perform any necessary actions
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Perform form validation to check if required fields are not empty
    if (
      !name ||
      !type ||
      !description ||
      !liveLink ||
      !sourceCode ||
      !adminSecret ||
      !image
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("liveLink", liveLink);
    formData.append("sourceCode", sourceCode);
    formData.append("adminSecret", adminSecret);
    formData.append("project", image);

    addProject(formData);
  };
  return (
    <>
      <Head>
        <title>itBoyShohidul - Web Developer and SEO Expert Portfolio</title>
      </Head>
      <main className="main">
        <form encType="multipart/form-data" onSubmit={submitHandler}>
          <label htmlFor="name">Project name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter project name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label htmlFor="type">Project type:</label>
          <input
            type="text"
            name="type"
            id="type"
            placeholder="Enter type project"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />

          <label htmlFor="description">Project description:</label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter description of project"
            rows="5"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <label htmlFor="liveLink">Project live link:</label>
          <input
            type="text"
            name="liveLink"
            id="liveLink"
            placeholder="Enter project live link"
            value={liveLink}
            onChange={(e) => {
              setLiveLink(e.target.value);
            }}
          />

          <label htmlFor="sourceCode">Project source code:</label>
          <input
            type="text"
            name="sourceCode"
            id="sourceCode"
            placeholder="Enter project source code link"
            value={sourceCode}
            onChange={(e) => {
              setSourceCode(e.target.value);
            }}
          />

          <label htmlFor="adminSecret">Admin Secret:</label>
          <input
            type="text"
            name="adminSecret"
            id="adminSecret"
            placeholder="Enter admin secret"
            value={adminSecret}
            onChange={(e) => {
              setAdminSecret(e.target.value);
            }}
          />

          <label htmlFor="project">Project image:</label>
          <input
            type="file"
            name="project"
            id="project"
            placeholder="Upload an project image"
            onChange={handleFileChange}
          />

          <button className="menu-btn add-project" type="submit">
            Add Project
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default SuperAdmin;
