import { Card } from "./components/Card";
import { DUMMY_DATA } from "./data/dummy_data";

export default function App() {
  return (
    <>
      {DUMMY_DATA.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          image={data.image}
        />
      ))}
    </>
  );
}
