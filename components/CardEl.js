import Head from 'next/head';
import gql from 'graphql-tag';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

export const FRAGMENT_CARD = gql`
  fragment fragmentCard on ComponentPageComponentsCard {
    __typename
    id
    title
    subtitle
    text
  }
`;

export default function CardEl({ title, subtitle, text }) {
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
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {subtitle}
            </CardSubtitle>
            <CardText>{text}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
