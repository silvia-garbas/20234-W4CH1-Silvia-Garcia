type Title = {
  title: string;
};

export function Info({ title }: Title) {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">{title.toUpperCase()}</h1>
      </header>
    </>
  );
}
