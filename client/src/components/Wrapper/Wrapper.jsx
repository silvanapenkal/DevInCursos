import "./Wrapper.css";

function PageWrapper({children}) {
  return (
    <main className="pageWrapper">{children}
    </main>
  );
}

export default PageWrapper;