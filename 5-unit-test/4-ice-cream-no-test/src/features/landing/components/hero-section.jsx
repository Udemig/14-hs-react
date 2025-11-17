import {
  CalendarDays,
  MessageSquareQuote,
  SendHorizontal,
  Star,
} from "lucide-react";

const HeroSection = ({ hero, testimonial }) => {
  if (!hero) {
    return null;
  }

  const handlePrimary = () => {};
  const handleSecondary = () => {};

  return (
    <section className="relative grid gap-10 overflow-hidden rounded-[32px] bg-gradient-to-br from-[rgba(255,255,255,0.08)] via-[rgba(255,255,255,0.04)] to-transparent px-6 py-10 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg md:grid-cols-2 md:gap-14 md:px-10 md:py-14">
      <div className="flex flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold text-white/80">
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          {hero.highlight}
        </span>
        <div>
          <p className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            <span>{hero.titlePrimary}</span>
            <br />
            <span className="text-rose-200">{hero.titleSecondary}</span>
          </p>
        </div>
        <p className="text-lg text-white/80 md:text-xl">{hero.description}</p>
        <p className="text-base text-white/70">{hero.supportingText}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            type="button"
            tabIndex="0"
            aria-label={`${hero.primaryCta} butonu`}
            onClick={handlePrimary}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-rose-600 shadow-lg shadow-rose-900/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
          >
            <SendHorizontal className="h-5 w-5" aria-hidden="true" />
            {hero.primaryCta}
          </button>
          <button
            type="button"
            tabIndex="0"
            aria-label={`${hero.secondaryCta} butonu`}
            onClick={handleSecondary}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <CalendarDays className="h-5 w-5" aria-hidden="true" />
            {hero.secondaryCta}
          </button>
        </div>
      </div>

      {testimonial && (
        <article className="relative flex flex-col gap-6 rounded-3xl bg-white/10 p-6 text-white shadow-xl ring-1 ring-white/20 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <img
              src={testimonial.avatarUrl}
              alt={`${testimonial.name} avatarı`}
              className="h-14 w-14 rounded-2xl object-cover ring-2 ring-white/60"
            />
            <div>
              <p className="text-xl font-semibold">{testimonial.name}</p>
              <p className="text-sm text-white/70">{testimonial.role}</p>
            </div>
            <MessageSquareQuote
              className="ml-auto h-6 w-6 text-white/60"
              aria-hidden="true"
            />
          </div>
          <p className="text-base leading-relaxed text-white/90">
            “{testimonial.quote}”
          </p>
          <div className="flex items-center gap-1">
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <Star
                key={`star-${index + 1}`}
                className="h-5 w-5 fill-amber-300 text-amber-300"
                aria-hidden="true"
              />
            ))}
          </div>
        </article>
      )}

      <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-rose-500/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 -bottom-16 h-64 w-64 rounded-full bg-amber-400/30 blur-3xl" />
    </section>
  );
};

export default HeroSection;
