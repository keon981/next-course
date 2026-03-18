export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full md:max-w-125 mx-auto py-10 px-4">
      {children}
    </div>
  );
};
