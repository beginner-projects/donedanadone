const title = 'Staking';

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function Layout({
  children
}) {
  return (
    <div className="w-full">
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
