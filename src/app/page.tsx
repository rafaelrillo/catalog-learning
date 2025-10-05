'use client'

import { useState } from 'react';
import { CategorySection } from '@/components/CategorySection';
import { Product } from '@/components/ProductCard';
import { MainMenu } from '@/components/MainMenu';
import { ProductModal } from '@/components/ProductModal';

export default function Home() {

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  }


  const menuLinks = [
    { label: 'Tortas', href: '#tortas', category: 'tortas' as const },
    { label: 'Tartas', href: '#tartas', category: 'tartas' as const },
    { label: 'Postres', href: '#postres', category: 'postres' as const },
    { label: 'Panes', href: '#panes', category: 'panes' as const },
  ];

  const tortasProducts: Product[] = [
    {
      name: "Torta de Chocolate",
      description: "Deliciosa torta de chocolate con ganache",
      price: 45000,
      portions: 8,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
      category: "tortas"
    },
    {
      name: "Torta Red Velvet",
      description: "Clásica torta red velvet con cream cheese",
      price: 48000,
      portions: 10,
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400",
      category: "tortas"
    },
    {
      name: "Torta de Vainilla",
      description: "Suave torta de vainilla con buttercream",
      price: 42000,
      portions: 8,
      image: "https://images.unsplash.com/photo-1549312284-64ac26e78fcb?w=400",
      category: "tortas"
    }
  ];

  const tartasProducts: Product[] = [
    {
      name: "Tarta de Frutas",
      description: "Tarta fresca con frutas de estación",
      price: 35000,
      portions: 6,
      image: "https://images.unsplash.com/photo-1519340333755-56e9c1d7eb93?w=400",
      category: "tartas"
    },
    {
      name: "Tarta de Limón",
      description: "Tarta de limón con merengue",
      price: 32000,
      portions: 8,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400",
      category: "tartas"
    }
  ];

  const postresProducts: Product[] = [
    {
      name: "Tiramisú",
      description: "Clásico postre italiano",
      price: 25000,
      portions: 4,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
      category: "postres"
    }
  ]

  return (

    <>
      <MainMenu links={menuLinks} />
      <main style={{ padding: '2rem 0' }}>
        <div style={{ padding: '0 2rem', marginBottom: '2rem' }}>
          <h1>Panadería Artesanal</h1>
          <p>Catálogo de productos frescos y deliciosos</p>
        </div>
        <div id='tortas'>
          <CategorySection
            title='Tortas'
            products={tortasProducts}
            categoryType='tortas'
            onProductClick={openModal}
          />
        </div>
        <div id='tartas'>
        <CategorySection
          title='Tartas'
          products={tartasProducts}
          categoryType='tartas'
          onProductClick={openModal}
          />
          </div>
        <div id='postres'>
        <CategorySection
          title='Postres'
          products={postresProducts}
          categoryType='postres'
          onProductClick={openModal}
          />
          </div>
      </main>

      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
        />

    </>
  );
}
