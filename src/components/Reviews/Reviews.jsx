import styles from "./Reviews.module.css";

export default function Reviews() {
  const reviews = [
    {
      name: "Steph Marziano",
      review:
        "Sam was super easy to work with. He was fast, understanding and creative. I’m really happy with my website now. Would definitely recommend him.",
      stars: 5,
    },
    {
      name: "Emma Townsend",
      review:
        "I couldn't be happier with the website that Dead Culture created for my business. From the very beginning, Sam was professional, responsive, creative, and genuinely invested in bringing my vision to life... I've received countless compliments on the website, and it has already made a significant positive impact on my business",
      stars: 5,
    },
    {
      name: "Rhys Lewis",
      review:
        "Sam was super easy to work with. He was fast, understanding and creative. I’m really happy with my website now. Would definitely recommend him.",
      stars: 5,
    },
    {
      name: "Emma Townsend",
      review:
        "I couldn't be happier with the website that Dead Culture created for my business. From the very beginning, Sam was professional, responsive, creative, and genuinely invested in bringing my vision to life... I've received countless compliments on the website, and it has already made a significant positive impact on my business",
      stars: 5,
    },

    {
      name: "PMA",
      review:
        "I couldn't be happier with the website that Dead Culture created for my business. From the very beginning, Sam was professional, responsive, creative, and genuinely invested in bringing my vision to life... I've received countless compliments on the website, and it has already made a significant positive impact on my business",
      stars: 5,
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className={styles.reviews}>
      <div className={styles.grainOverlay} />
      {/* <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>Reviews</h1>
        <p className={styles.reviewIntro}>
          Feedback from past clients and collaborators.
        </p>
      </div> */}

      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>Reviews</h1>
        <p className={styles.reviewIntro}>
          Feedback from past clients and collaborators.
        </p>
      </div>
      {/* 
      <div className={styles.reviewsContainer}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.review}>
            <h3 className={styles.reviewName}>{review.name}</h3>
            <p className={styles.reviewText}>{review.review}</p>
            <div className={styles.stars}>
              {[...Array(review.stars)].map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
          </div>
        ))}
      </div> */}

      <div className={styles.marquee}>
        <div className={styles.track}>
          {duplicatedReviews.map((review, index) => (
            <div key={index} className={styles.review}>
              <div className={styles.stars}>
                {[...Array(review.stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className={styles.reviewText}>{review.review}</p>

              <h3 className={styles.reviewName}>— {review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
