import Card from "../components/card";
import Banner from "../components/banner";

function Home() {
  return (
    <main>
      <Banner />
      <div className="card-list">
        <Card titulo="Card 1" texto="Conteúdo do Card 1" />
        <Card titulo="Card 2" texto="Conteúdo do Card 2" />
        <Card titulo="Card 3" texto="Conteúdo do Card 3" />
      </div>
    </main>
  );
}

export default Home;
