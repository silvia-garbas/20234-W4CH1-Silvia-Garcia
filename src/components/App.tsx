import { Button } from "./Button";
import { Info } from "./Info";
import { Gentlemen } from "./Gentlemen";

export function App() {
  const title = "Señoros";
  return (
    <>
      <Info title={title}></Info>
      <Button></Button>
      <main className="main">
        <ul className="gentlemen">
          <Gentlemen></Gentlemen>
        </ul>
      </main>
    </>
  );
}
