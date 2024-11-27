interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="h-full flex justify-center items-center">{children}</main>
  );
};

export default AuthLayout;
