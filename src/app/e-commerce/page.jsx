import React from 'react';
import { Metamask } from '../../ui/metamask';

export default function Page() {
  return (
    <div>
      <div className="store">
        <h1 className="store-title">
          <span className="text-orange-400 font-semibold">MRAB</span>{' '}
          <span className="font-semibold text-gray-500">Store</span>
        </h1>
        <Metamask />
      </div>
    </div>
  );
}
