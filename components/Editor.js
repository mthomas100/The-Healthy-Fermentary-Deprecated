import React, { useState } from 'react';
import Head from 'next/head';
import { Button } from 'reactstrap';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import Divider from './Divider';
import { JumbotronInput } from './JumbotronEl';

function EditTool({
  editingItem,
  editingIndex,
  content,
  updateComponents,
  pageId,
  mode,
  setIsModifying,
  setIsEditing,
  setIsAdding,
}) {
  const editingKeys = Object.keys(editingItem);
  const formInputs = {};
  editingKeys.map((key) => {
    formInputs[key] = editingItem[key];
  });

  const { inputs, handleChange, resetForm } = useForm(formInputs);

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting

    const contentReplaced = _.cloneDeep(content);

    if (mode === 'edit') contentReplaced[editingIndex] = inputs;
    if (mode === 'add') contentReplaced.splice(editingIndex, 0, inputs);

    const res = await updateComponents({
      variables: {
        pageId,
        content: contentReplaced,
      },
    });
    setIsModifying(false);
    setIsEditing(false);
    setIsAdding(false);
  }
  return (
    <>
      {inputs.__typename === 'ComponentPageComponentsJumbotron' && (
        <JumbotronInput
          inputs={inputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          mode={mode}
        />
      )}
    </>
  );
}

function Editor({
  selectedItemId,
  content,
  updateComponents,
  pageId,
  children,
}) {
  const [isModifying, setIsModifying] = useState(false);
  // future: modifying index to only allow the last clicked one to be the one thats open
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  async function handleDelete() {
    const contentFiltered = content.filter(
      (contentItem) => contentItem.id !== selectedItemId
    );
    const res = await updateComponents({
      variables: {
        pageId,
        content: contentFiltered,
      },
    });
  }

  async function handleEdit(e) {
    const mode = e.target.name;

    const currentEditingItem = _.cloneDeep(content).find(
      (contentItem) => contentItem.id === selectedItemId
    );

    if (mode === 'edit') setIsEditing((prev) => !prev);

    if (mode === 'add') {
      delete currentEditingItem.id;
      Object.keys(currentEditingItem).map((value) => {
        if (value !== '__typename') {
          currentEditingItem[value] = '';
        }
      });
      setIsAdding((prev) => !prev);
      // REMOVE ALL OBJECT PROPERTIES
      // In the future it will be this process
      // 1) "what item do you want to put here?"
      // 2) "ok supply an object with that things properties but no VALS"
      // 3) A different UI will be invoked depending on the type of componet ex) gallery... hero... etd.
    }

    const currentEditingIndex = content.findIndex(
      (contentItem) => contentItem.id === selectedItemId
    );

    setEditingItem(currentEditingItem);
    setEditingIndex(currentEditingIndex);
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
      {isAdding && (
        <>
          <EditTool
            mode="add"
            editingItem={editingItem} // from eventhandler/hook
            editingIndex={editingIndex} // from eventhandler/hook
            content={content}
            updateComponents={updateComponents}
            pageId={pageId}
            setIsModifying={setIsModifying}
            setIsEditing={setIsEditing}
            setIsAdding={setIsAdding}
          />
          <AiOutlineCloseCircle
            className="closeCircle"
            style={{ height: '50px', width: '50px' }}
            onClick={() => {
              setIsAdding(false);
            }}
          />
        </>
      )}
      <Button
        color="success"
        block
        style={{ marginBottom: '20px' }}
        onClick={handleEdit}
        name="add"
      >
        Add an element
      </Button>
      {children}
      <Divider
        isModifying={isModifying}
        setIsModifying={setIsModifying}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        isAdding={isAdding}
        setIsAdding={setIsAdding}
      >
        {isModifying && (
          <>
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
              name="edit"
            >
              Edit the above element
            </Button>
          </>
        )}

        {isEditing && (
          <EditTool
            mode="edit"
            editingItem={editingItem} // from eventhandler/hook
            editingIndex={editingIndex} // from eventhandler/hook
            content={content}
            updateComponents={updateComponents}
            pageId={pageId}
            setIsModifying={setIsModifying}
            setIsEditing={setIsEditing}
            setIsAdding={setIsAdding}
          />
        )}
      </Divider>

      {/* add an extra add bottom here, and only render for the last child */}
    </>
  );
}

export default Editor;
