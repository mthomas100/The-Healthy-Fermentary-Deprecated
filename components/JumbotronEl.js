import Head from 'next/head';
import gql from 'graphql-tag';
import { Jumbotron, Button } from 'reactstrap';
import Form from './styles/Form';

export const FRAGMENT_JUMBOTRON = gql`
  fragment fragmentJumbotron on ComponentPageComponentsJumbotron {
    __typename
    id
    title
    subtitle
    description
  }
`;

function JumbotronEl({ title, subtitle, description }) {
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
      <div>
        <Jumbotron>
          <h1 className="display-3">{title}</h1>
          <p className="lead">{subtitle}</p>
          <hr className="my-2" />
          <p>{description}</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    </>
  );
}

function JumbotronInput({ inputs, handleChange, handleSubmit, mode }) {
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
        <button type="submit">{mode}</button>
      </fieldset>
    </Form>
  );
}

export { JumbotronEl, JumbotronInput };
