'use client'

import { Button } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {

  const sampleProduct = {
    name: 'Torta Matilda',
    description: 'Torta hecha con una cantidad insana de chocolate',
    price: 25000,
    portions: 8,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    category: 'tortas' as const
  }

  const handleClick = () => {
    alert('clicked')
  }

  return (

     <main style={{ padding: '2rem' }}>
      <h1>Catalog Prototype - Día 3</h1>


    <div style={{ marginTop: '2rem', maxWidth: '300px' }}>
      <ProductCard product={sampleProduct} />
    </div>

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
    </main>
  );
}
