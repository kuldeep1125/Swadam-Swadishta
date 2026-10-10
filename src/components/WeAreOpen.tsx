// [REFACTORED] Clear opening information uses the configured daily service windows.
import { restaurant } from "@/config/restaurant";
export function WeAreOpen() {
  const t = restaurant.timings;
  return (
    <section id="open" className="opening-section section-space">
      <div className="editorial-container opening-grid reveal">
        <div>
          <p className="eyebrow">Come hungry. Leave happy.</p>
          <h2 className="section-title">
            A good day
            <br />
            starts here.
          </h2>
          <p lang="mr" className="marathi-note">
            {t.allDaysMarathi}
          </p>
          <p>{t.allDays}</p>
        </div>
        <dl className="service-times">
          {[
            ["Breakfast", t.breakfast, t.breakfastMarathi],
            ["Lunch", t.lunch, t.lunchMarathi],
            ["Evening", t.evening, t.eveningMarathi],
          ].map(([name, time, mr]) => (
            <div key={name}>
              <dt>
                {name}
                <small lang="mr">{mr}</small>
              </dt>
              <dd>{time}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
