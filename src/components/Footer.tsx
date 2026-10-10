// [REFACTORED] A substantial bilingual footer retains every important route and business detail.
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { restaurant } from "@/config/restaurant";
export function Footer() {
  return (
    <footer className="dark-section site-footer">
      <div className="editorial-container">
        <div className="footer-invitation">
          <div>
            <p className="eyebrow">There’s always a place for you.</p>
            <h2 className="section-title">
              Come for the food.
              <br />
              Stay for the feeling.
            </h2>
            <p lang="mr" className="marathi-note">
              चव महाराष्ट्राची. आपुलकी घरची.
            </p>
          </div>
          <a
            className="button-secondary"
            href={restaurant.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Swadam Swadishta ↗
          </a>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <ResponsiveImage
              src="/images/logo.png"
              width={68}
              height={68}
              sizes="68px"
              alt="Swadam Swadishta logo"
            />
            <h3>{restaurant.name}</h3>
            <p lang="mr">
              {restaurant.brandNameMarathi} · {restaurant.taglineMarathi}
            </p>
            <p>{restaurant.category}</p>
          </div>
          <nav aria-label="Footer menu">
            <p className="eyebrow">Explore</p>
            <a href="#breakfast">Breakfast</a>
            <a href="#thali">Lunch Thali</a>
            <a href="#snacks">Evening Snacks</a>
            <a href="#specialties">Specialities</a>
            <a href="#experience">Our Story</a>
            <a href="#bulk-orders">Bulk Orders</a>
            <a href="#storefront">Our Storefront</a>
            <a href="#reviews">Google Reviews</a>
          </nav>
          <div>
            <p className="eyebrow">Find us</p>
            <address>{restaurant.address.fullFormatted}</address>
            <a className="text-link" href="#location">
              Plan your visit ↗
            </a>
          </div>
          <div>
            <p className="eyebrow">Say namaskar</p>
            <a href={`tel:${restaurant.phoneRaw}`}>{restaurant.phone}</a>
            <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
            <a href="#enquiry">Send an enquiry</a>
            <a
              href={restaurant.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {restaurant.instagramHandle} ↗
            </a>
            <a
              href={`https://wa.me/${restaurant.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>
        <div className="footer-base">
          <span>
            100% Pure Vegetarian · <span lang="mr">१००% शुद्ध शाकाहारी</span> ·{" "}
            {restaurant.fssaiNumber}
          </span>
          <span>
            © {new Date().getFullYear()} {restaurant.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
