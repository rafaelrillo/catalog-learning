'use client'

import styles from './MainMenu.module.scss';

export interface MenuLink {
  label: string;
  href: string;
  category: 'tortas' | 'tartas' | 'postres' | 'panes' ,
}

interface MainMenuProps {
  links: MenuLink[],
}

export const MainMenu = ({links}: MainMenuProps) => {

  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if(element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>Panadería</h1>
          <span className={styles.logoSubtext}>Artesanal</span>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <button
                  className={`${styles.navLink} ${styles[link.category]}`}
                  onClick={() => handleScrollToSection(link.href)}
                >{link.label}</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )

}