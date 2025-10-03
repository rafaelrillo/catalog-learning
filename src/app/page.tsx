'use client'

import { Button } from '@/components/Button';

export default function Home() {

  const handleClick = () => {
    alert('clicked')
  }

  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Button variant='primary' size='small' onClick={handleClick}>Primary Small</Button>
      <Button variant='primary' size='medium' onClick={handleClick}>Primary Medium</Button>
      <Button variant='secondary' size='medium' onClick={handleClick}>Secondary Medium</Button>
      <Button variant='outlined' size='medium' onClick={handleClick}>outlined Medium</Button>
      <Button variant='primary' size='medium' onClick={handleClick} disabled>Disabled</Button>
    </div>
  );
}
