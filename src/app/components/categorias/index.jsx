import styles from "./categorias.module.css";

const Categorias = () => {
    const categories = [
        { id: 1, name: "Ficção Científica", icon: "🚀" },
        { id: 2, name: "Romance", icon: "❤️" },
        { id: 3, name: "Biografia", icon: "👤" },
        { id: 4, name: "Tecnologia", icon: "💻" },
        { id: 5, name: "Fantasia", icon: "🔮" },
        { id: 6, name: "História", icon: "📜" },
        { id: 7, name: "Autoajuda", icon: "🌱" },
        { id: 8, name: "Mistério", icon: "🔍" },
      ];

    return (
        <section className={styles.categoriesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Categorias Populares</h2>
          <a href="/categorias" className={styles.viewAll}>
            Ver todas
          </a>
        </div>

        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/categoria/${category.id}`}
              className={styles.categoryCard}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryName}>{category.name}</span>
            </a>
          ))}
        </div>
      </section>
    );
}

export default Categorias;