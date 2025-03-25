import styles from "./lancamentos.module.css";

const Lancamentos = () => {
  const newReleases = [
    {
      id: 1,
      title: "O Futuro da Humanidade",
      author: "Augusto Cury",
      price: 59.9,
      coverImage:
        "https://via.placeholder.com/150x200/3498db/ffffff?text=Futuro",
      rating: 4.6,
      tags: ["Filosofia", "Autoajuda"],
    },
    {
      id: 2,
      title: "A Jornada do Programador",
      author: "Carlos Silva",
      price: 45.9,
      coverImage:
        "https://via.placeholder.com/150x200/e74c3c/ffffff?text=Jornada",
      rating: 4.8,
      tags: ["Tecnologia", "Carreira"],
    },
    {
      id: 3,
      title: "Segredos do Sucesso",
      author: "Maria Oliveira",
      price: 39.9,
      coverImage:
        "https://via.placeholder.com/150x200/2ecc71/ffffff?text=Segredos",
      rating: 4.5,
      tags: ["Negócios", "Motivação"],
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className={styles.star}>
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className={styles.starHalf}>
          ★
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-star-${i}`} className={styles.starEmpty}>
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <section className={`${styles.bookSection} ${styles.newReleases}`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeading}>Lançamentos</h2>
        <a href="/lancamentos" className={styles.viewAll}>
          Ver todos
        </a>
      </div>

      <div className={styles.booksGrid}>
        {newReleases.map((book) => (
          <div key={book.id} className={styles.bookCard}>
            <div className={styles.bookCover}>
              <img
                src={book.coverImage}
                alt={book.title}
                className={styles.coverImage}
              />
              <button className={styles.quickViewButton}>Visualizar</button>
            </div>
            <div className={styles.bookInfo}>
              <span className={styles.newBadge}>Novo</span>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookAuthor}>por {book.author}</p>
              <div className={styles.bookRating}>
                {renderStars(book.rating)}
                <span className={styles.ratingValue}>({book.rating})</span>
              </div>
              <div className={styles.bookTags}>
                {book.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.bookPriceActions}>
                <span className={styles.bookPrice}>
                  R$ {book.price.toFixed(2)}
                </span>
                <div className={styles.bookActions}>
                  <button className={styles.iconButton}>❤️</button>
                  <button className={styles.iconButton}>🛒</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lancamentos;