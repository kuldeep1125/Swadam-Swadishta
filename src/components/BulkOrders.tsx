// [REFACTORED] A spacious gathering invitation retains the original bulk-order contact information.
// [FIXED] Shared menu photography keeps bulk-order imagery consistent.
import { restaurant } from "@/config/restaurant";
import { ResponsiveImage } from "@/components/ResponsiveImage";
export function BulkOrders() {
  const b = restaurant.bulkOrders;
  if (!b.enabled) return null;
  return (
    <section id="bulk-orders" className="section-space editorial-container">
      <div className="bulk-grid reveal">
        <figure className="image-frame bulk-photo">
          <ResponsiveImage
            src={restaurant.menu.lunch[1].image}
            alt="Maharashtrian lunch thali with sweet for a shared occasion"
            sizes="(max-width: 767px) 100vw, 45vw"
          />
        </figure>
        <div>
          <p className="eyebrow">08 / Good food brings us together</p>
          <h2 className="section-title">
            More people.
            <br />
            <em>More swad.</em>
          </h2>
          <p lang="mr" className="marathi-note">
            {b.headlineMarathi}
          </p>
          <h3>{b.subheadline}</h3>
          <p className="body-copy">{b.description}</p>
          <p lang="mr" className="marathi-note">
            {b.subheadlineMarathi}
          </p>
          <div className="action-row">
            <a
              className="button-primary"
              href={`https://wa.me/${b.whatsappNumber}?text=${encodeURIComponent("Namaskar! I would like to enquire about a bulk order.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss a bulk order ↗
            </a>
            <a className="text-link" href={`tel:${restaurant.phoneRaw}`}>
              {b.phone}
            </a>
          </div>
          <p className="small-note">{b.minNotice}</p>
        </div>
      </div>
    </section>
  );
}
