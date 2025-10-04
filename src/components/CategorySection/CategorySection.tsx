'use client'

import { ProductCard, Product} from '@/components/ProductCard';
import styles from './CategorySection.module.scss';

interface CategorySection {
  title: string;
  products: Product[];
  categoryType: 'tortas' | 'tartas' | 'postres' | 'panes';
}

export const CategorySection = ({
  title,
  products,
  categoryType
}: CategorySection) => {
  return (
    <section className={`${styles.section} ${styles[categoryType]}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.count}>{products.length} productos</span>
      </div>

    <div className={styles.productsContainer}>
        <div className={styles.productsScroll}>
          {products.map((product, index) => (
            <div key={index} className={styles.productWrapper}>
              <ProductCard product={product} />
            </div>
          )
          )}
        </div>
      </div>

    </section>
  )
}