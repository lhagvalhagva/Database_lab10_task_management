import { query } from "../database/db";

export default function Home({ data }) {
  return (
    <div>
      <h1>MySQL Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const data = await query("SELECT * FROM tasks");
  return {
    props: { data },
  };
}
