'use client';

import { usePathname } from 'next/navigation';
import HeaderHomeThree from '@modules/layout/templates/header-home-three/HeaderHomeThree';
import HeaderInicio from '@modules/layout/templates/header-inicio/HeaderInicio';

const ConditionalHeader = () => {
  const pathname = usePathname();

  // Check if we're on pages that should use HeaderInicio (with or without country code)
  const isInicioPage = pathname.includes('/inicio');
  const isProdutoExemplo = pathname.includes('/produto-exemplo');
  const isBuscaPage = pathname.includes('/busca');

  return (isInicioPage || isProdutoExemplo || isBuscaPage) ? <HeaderInicio /> : <HeaderHomeThree />;
};

export default ConditionalHeader;