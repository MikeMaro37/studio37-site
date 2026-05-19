export function About() {
  return (
    <section id="about" className="bg-[var(--color-bg-light)] text-[var(--color-fg-light)] py-[180px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal max-w-[800px] mx-auto text-center mb-24">
          <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.035em] leading-[1.05] mb-8">
            We are <span className="font-serif-italic">Studio 37.</span>
          </h2>
          <p className="text-[17px] leading-[1.55] text-muted-light mb-4 max-w-[52ch] mx-auto">
          An independent CGI, VFX and motion design studio based in Belgrade. With over a decade of industry experience, we work with fashion and lifestyle brands across Europe, the Americas, MENA and Asia.          </p>
          <p className="text-[17px] leading-[1.55] text-muted-light max-w-[52ch] mx-auto">
            We combine traditional CG craft with AI-native production pipelines, a hybrid approach that shortens timelines without softening the work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[800px] mx-auto">
          <div className="reveal flex flex-col items-center text-center">
            <div className="w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-black/5 mb-5">
              <img src="/portrait-mikhail.jpg" alt="Mikhail Maro" className="w-full h-full object-cover" />
            </div>
            <div className="text-[18px] font-medium tracking-[-0.01em]">Mikhail Maro</div>
            <div className="text-[13px] tracking-[0.05em] uppercase text-muted-light font-medium mt-1">Creative director</div>
          </div>

          <div className="reveal flex flex-col items-center text-center">
            <div className="w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-black/5 mb-5">
              <img src="/portrait-gennadii.jpg" alt="Gennadii Barmakov" className="w-full h-full object-cover" />
            </div>
            <div className="text-[18px] font-medium tracking-[-0.01em]">Gennadii Barmakov</div>
            <div className="text-[13px] tracking-[0.05em] uppercase text-muted-light font-medium mt-1">Executive producer</div>
          </div>
        </div>
      </div>
    </section>
  );
}