import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams(); //pega o ID passado na URL

  return (
    <div className="container">
      <h1>Detalhes do Filme: {id}</h1>
      <p>Aqui você pode ver os detalhes do filme selecionado.</p>
    </div>
  );
}