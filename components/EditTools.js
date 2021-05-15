import Head from 'next/head';
import { useState } from 'react';
// import gql from 'graphql-tag';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import _ from 'lodash';
import useForm from '../lib/useForm';
import Form from './styles/Form';

function Editor({
  editingItem,
  editingIndex,
  content,
  updateComponents,
  pageId,
}) {
  const { title, description, subtitle, id, __typename } = editingItem;
  const { inputs, handleChange, resetForm } = useForm({
    title,
    description,
    subtitle,
    id,
    __typename,
  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    // console.log(inputs);
    console.log(content);
    // console.log(editingIndex);

    const contentReplaced = _.cloneDeep(content);
    contentReplaced[editingIndex] = inputs;
    console.log(contentReplaced);

    const res = await updateComponents({
      variables: {
        pageId,
        content: contentReplaced,
      },
    });
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Edit above Jumbotron Component</h2>
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
  );
}

function EditTools({ selectedItemId, content, updateComponents, pageId }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  async function handleDelete() {
    const contentFiltered = content.filter(
      (contentItem) => contentItem.id !== selectedItemId
    );
    console.log(contentFiltered);
    const res = await updateComponents({
      variables: {
        pageId,
        content: contentFiltered,
      },
    });
  }

  async function handleEdit() {
    // toggle editing on
    // pass the editing information to the form and populate it
    // only show up one editing form (not on each editTools)

    const currentEditingItem = content.find(
      (contentItem) => contentItem.id === selectedItemId
    );

    const currentEditingIndex = content.findIndex(
      (contentItem) => contentItem.id === selectedItemId
    );

    setEditingItem(currentEditingItem);
    setEditingIndex(currentEditingIndex);
    setIsEditing((prev) => !prev);
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
        color="danger"
        block
        style={{ marginBottom: '20px' }}
        onClick={handleDelete}
      >
        Delete above element
      </Button>

      <Button
        color="warning"
        block
        style={{ marginBottom: '20px' }}
        onClick={handleEdit}
      >
        Edit the above element
      </Button>

      {isEditing && (
        <Editor
          editingItem={editingItem}
          editingIndex={editingIndex}
          content={content}
          updateComponents={updateComponents}
          pageId={pageId}
        />
      )}
    </>
  );
}

export default EditTools;
