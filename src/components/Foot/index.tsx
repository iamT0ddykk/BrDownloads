import "./Foot.css";
export function Foot() {
  const data = new Date();
  const year = data.getFullYear();
  return (
    <>
      <footer>
        <p>© {year} BRDownloads • Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
