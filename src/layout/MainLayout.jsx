import Header from '@components/Header';
import Nav from '@common/Nav';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="max-h-full">
        <Header />
        <Nav />
        <main>
          <div className=" max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
