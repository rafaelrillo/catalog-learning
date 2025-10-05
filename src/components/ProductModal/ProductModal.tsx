'use client'

import { Product } from "@/components/ProductCard";
import { Button } from '@/components/Button';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({product, isOpen, onClose}: ProductModalProps) => {
  
  if(!isOpen || !product) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if(e.target === e.currentTarget) {
      onClose();
    }
  }

  const handleContactClick = () => {
    const message = `Hola! Me interesa la ${product.name} ($${product.price.toLocaleString()})`
    const whatsappUrl = `https://wa.me/5491234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  return(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img 
              src={product.image} 
              alt={product.name}
              className={styles.image}
            />
          </div>
          
          <div className={styles.details}>
            <span className={`${styles.categoryBadge} ${styles[product.category]}`}>
              {product.category}
            </span>
            
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.description}>{product.description}</p>
            
            <div className={styles.priceInfo}>
              <span className={styles.price}>
                ${product.price.toLocaleString()}
              </span>
              <span className={styles.portions}>
                {product.portions} porciones
              </span>
            </div>
            
            <div className={styles.actions}>
              <Button variant="primary" onClick={handleContactClick}>
                Contactar por WhatsApp
              </Button>
              <Button variant="outlined" onClick={onClose}>
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


}