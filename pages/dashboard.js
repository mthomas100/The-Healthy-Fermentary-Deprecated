import Sites from '../components/Sites';

export default function dashboard(props) {
  return (
    <>
      <h1 className="center">DASHBOARD</h1>
      <Sites {...props} />
    </>
  );
}

// list of sites belongs here
// localhost:7777/dashboard

// add crud to make a new site
