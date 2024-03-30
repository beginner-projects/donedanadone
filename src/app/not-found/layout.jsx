import { TabGroup } from '../../ui/tab-group';
import React from 'react';

const title = 'Not Found';

export const metadata = {
  title,
  openGraph: {
    title,
    images: '../../../public/flame.png',
  },
};

export default function Layout({
  children,
}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/not-found"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Category That Does Not Exist',
              slug: 'does-not-exist',
            },
          ]}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
