// [FIXED] Link directly to the configured review destination instead of presenting unproven quotations or ratings.
import { restaurant } from "@/config/restaurant";
import styles from "./ReviewsSection.module.css";

// [ADDED] Review actions and a locally hosted QR share the configured Google listing; reviews are completed on Google.
export function ReviewsSection() {
  return (
    <section id="reviews" className="review-section section-space">
      <div className={`editorial-container reveal ${styles.layout}`}>
        <p className={`eyebrow ${styles.label}`}>09 / Around the table</p>
        <div className={styles.copy}>
          <h2 className="section-title">
            A taste worth
            <br />
            <em>talking about.</em>
          </h2>
          <p className="body-copy">
            Read what visitors are saying on Google Maps, or share your experience
            after a meal with us.
          </p>
          <p lang="mr" className="marathi-note">
            तुमचा अनुभव आमच्यासोबत शेअर करा.
          </p>
          <div className={styles.actions}>
            <a
              className="button-primary"
              href={restaurant.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Add a Google review <span aria-hidden="true">↗</span>
            </a>
            <a
              className={styles.readLink}
              href={restaurant.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read reviews <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className={styles.handoff}>
            Choose “Write a review” on Google Maps to share your experience. You
            may need to sign in to your Google account.
          </p>
        </div>
        {/* [ADDED] A real QR asset, with its quiet zone intact, supports scanning from a second device. */}
        <figure className={styles.scanCard}>
          <p className={styles.scanTitle}>Scan to review</p>
          <p lang="mr" className={styles.scanMarathi}>
            अभिप्राय देण्यासाठी स्कॅन करा
          </p>
          <a
            className={styles.qrLink}
            href={restaurant.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Swadam Swadishta reviews on Google Maps"
          >
            <img
              src="/images/google-review-qr.png"
              alt="QR code linking to Swadam Swadishta reviews on Google Maps"
              width={256}
              height={256}
              loading="lazy"
              decoding="async"
            />
          </a>
          <figcaption>
            Point your phone camera at the code, then choose “Write a review” on
            Google.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
