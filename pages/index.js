import Layout from "../Components/Layout";
import EventItem from "../Components/EventItem";
import {API_URL} from "../config/index";

export default function Homepage(props) {
  // console.log(props.events);
  // props.event is the whole item
  return (
    <div>
      <Layout>
        <h1>Music Events</h1>
    {props.events.map((event)=>{
      return <EventItem key={event.id} eventData={event} />

      // return <h3 key={event.id}>{event.name}</h3>
    })}
      </Layout>
      {/* <h1>Lakehub</h1>
      <Link href="/About">About Page</Link> */}
    </div>
  );
}

export async function getStaticProps(){
  const res =await fetch (`${API_URL}/api/events`);
  const events = await res.json();
   return {
     props: {events},
   };
}