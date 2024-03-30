import { TabGroup } from '../../ui/tab-group';
import React from 'react';

const title = 'Error Handling';

export const metadata = {
  title,
  openGraph: {
    title,
    images: "../../../public/flame.png",
  },
};

export default function Layout({
  children,
}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/error-handling"
          items={[
            {
              text: 'Home',
            },
          ]}
        />
      </div>

      <div>{children}</div>
    </div>
  );
}
