//Для проверки находимся мы на server side rendering или нет
//Wrapper для каждого компонента для защиты от ошибки hydration
'use client';

import React, { useState, useEffect } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

//В момент когда этот компонент загрузится, то он закончит sever side renderind и он может быть mounted

const ClientOnly: React.FC<ClientOnlyProps> = ({ 
  children
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
      setHasMounted(true);
  }, [])

  if (!hasMounted) return null;

  return (
    <>
      {children}
    </>
  );
};

export default ClientOnly;
