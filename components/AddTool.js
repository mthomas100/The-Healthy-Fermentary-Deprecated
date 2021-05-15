import React, { useState } from 'react';
import Head from 'next/head';
import { Button } from 'reactstrap';
import useForm from '../lib/useForm';
import Form from './styles/Form';
// import useForm from '../../lib/useForm';

export default function AddTool({ content, pageId, updateComponents }) {
  const [isAdding, setIsAdding] = useState(false);

  const { inputs, handleChange, resetForm } = useForm({
    title: '',
    description: '',
    subtitle: '',
    __typename: 'ComponentPageComponentsJumbotron',
  });

  let contentExtended;

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    contentExtended = content.concat(inputs);
    const res = await updateComponents({
      variables: {
        pageId,
        // ...inputs,
        content: contentExtended,
      },
    });
    resetForm();
    // Send the email and password to the graphqlAPI
  }

  async function handleEdit() {
    setIsAdding((prev) => !prev);
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>

      <Button
        color="success"
        block
        style={{ marginBottom: '20px' }}
        onClick={handleEdit}
      >
        Add an element
      </Button>

      {isAdding && (
        <Form method="POST" onSubmit={handleSubmit}>
          <h2>Add a new Jumbotron Component</h2>
          {/* <Error error={error} /> */}
          <fieldset>
            <label htmlFor="Title">
              Title
              <input
                type="text"
                name="title"
                placeholder="Title"
                // autoComplete="email"
                value={inputs.title}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="Subtitle">
              Subtitle
              <input
                type="text"
                name="subtitle"
                placeholder="Subtitle"
                autoComplete="Subtitle"
                value={inputs.subtitle}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="Description">
              Description
              <input
                type="text"
                name="description"
                placeholder="Description"
                autoComplete="Description"
                value={inputs.description}
                onChange={handleChange}
              />
            </label>
            <button type="submit">ADD!</button>
          </fieldset>
        </Form>
      )}
    </>
  );
}
