// [REFACTORED] Visit details pair a clean address/timing layout with a lazy-loaded real map.
import { restaurant } from "@/config/restaurant";
export function LocationSection() {
  return (
    <section id="location" className="location-section section-space">
      <div className="editorial-container">
        <header className="section-heading reveal">
          <div>
            <p className="eyebrow">11 / Meet us in Baner</p>
            <h2 className="section-title">
              Your next meal
              <br />
              <em>is close to home.</em>
            </h2>
          </div>
          <p lang="mr" className="marathi-note">
            बाणेर, पुणे येथे भेट द्या.
          </p>
        </header>
        <div className="location-grid reveal">
          <div className="visit-details">
            <h3>{restaurant.name}</h3>
            <address>{restaurant.address.fullFormatted}</address>
            <dl className="visit-times">
              <div>
                <dt>Breakfast</dt>
                <dd>{restaurant.timings.breakfast}</dd>
              </div>
              <div>
                <dt>Lunch</dt>
                <dd>{restaurant.timings.lunch}</dd>
              </div>
              <div>
                <dt>Evening</dt>
                <dd>{restaurant.timings.evening}</dd>
              </div>
            </dl>
            <p className="small-note">{restaurant.timings.allDays}</p>
            <div className="action-row">
              <a
                className="button-primary"
                href={restaurant.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions ↗
              </a>
              <a className="text-link" href={`tel:${restaurant.phoneRaw}`}>
                {restaurant.phone}
              </a>
            </div>
          </div>
          <iframe
            title="Swadam Swadishta location in Baner Pune"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(`${restaurant.name}, ${restaurant.address.fullFormatted}`)}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
