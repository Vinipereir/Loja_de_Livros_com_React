import styles from "./featured.module.css"

const Featured = () => {
    const featuredBooks = [
        {
          id: 1,
          title: "O Algoritmo da Imaginação",
          author: "Ana Luz Santos",
          price: 49.9,
          coverImage:
            "https://images-americanas.b2w.io/produtos/1774777227/imagens/livro-algoritmos-e-logica-da-programacao/1774777227_1_large.jpg",
          rating: 4.5,
          tags: ["Ficção Científica", "Tecnologia"],
        },
        {
          id: 2,
          title: "Conexões Invisíveis",
          author: "Marcos Silva",
          price: 39.9,
          coverImage:
            "https://m.media-amazon.com/images/I/71281wQs1+L._UF894,1000_QL80_.jpg",
          rating: 4.8,
          tags: ["Romance", "Tecnologia"],
        },
        {
          id: 3,
          title: "Além do Código",
          author: "Julia Mendes",
          price: 55.9,
          coverImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1_0tAzJaCShh1opxZxYWy3SgdRXBuqWaYQ&s",
          rating: 4.2,
          tags: ["Biografia", "Programação"],
        },
        {
          id: 4,
          title: "Universos Paralelos",
          author: "Lucas Costa",
          price: 47.9,
          coverImage:
            "https://m.media-amazon.com/images/I/61tBlvad-DL.jpg ",
          rating: 4.7,
          tags: ["Ficção Científica", "Filosofia"],
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
        <section className={styles.bookSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Destaques da Semana</h2>
          <a href="/destaques" className={styles.viewAll}>
            Ver todos
          </a>
        </div>

        <div className={styles.booksGrid}>
          {featuredBooks.map((book) => (
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
}

export default Featured;
