'use client'

import styles from "./ProductCard.module.scss";

export interface Product {
  name: string;
  description: string;
  price: number;
  portions: number;
  image: string;
  category: 'tortas' | 'tartas' | 'postres' | 'panes';
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({product}: ProductCardProps ) => {

  const { name, description, price, portions, image, category } = product

  return (
    <div className={`${styles.card} ${styles[category]}`}>
      <div className={styles.imageContainer}>  
        <img src={image} alt={name} className={styles.image} />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.footer}>
          <span className={styles.price}>${price.toLocaleString()}</span>
          <span className={styles.portions}>{portions} porciones</span>
        </div>
      </div>
    </div>
  )

}