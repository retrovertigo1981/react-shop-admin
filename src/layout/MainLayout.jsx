import Header from '@components/Header';
import Nav from '@common/Nav';
import { useAuth } from '@hooks/useAuth';

const MainLayout = ({ children }) => {
  const auth = useAuth();
  const user = auth.user;
  return (
    <>
      <div className="max-h-full">
        {user && (
          <>
            <Header />
            <Nav />
          </>
        )}
        <main>
          <div className=" max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
