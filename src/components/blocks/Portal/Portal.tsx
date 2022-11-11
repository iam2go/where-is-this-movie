import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
}

function Portal({ children }: Props) {
  const $body = document.querySelector('body');
  const [mountNode, setMountNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const portal = document.createElement('div');
    $body?.appendChild(portal);
    portal.setAttribute('style', 'position:fixed; top:0; bottom:0; left:0; right:0; z-index:888');
    setMountNode(portal);

    return () => {
      $body?.removeChild(portal);
    };
  }, [$body]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
}

export default Portal;
