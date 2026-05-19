export function Capabilities() {
  return (
    <section id="capabilities" className="bg-black text-white py-[160px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal mb-24">
          <div className="text-xs tracking-[0.15em] uppercase text-muted-dark font-medium mb-6">
            Craft
          </div>
          <h2 className="text-[clamp(40px,6.5vw,88px)] font-semibold tracking-[-0.04em] leading-[1.02] max-w-[14ch]">
            Four disciplines.<br />
            <span className="font-serif-italic">One vision.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          <div className="reveal border-t border-hairline-dark pt-7">
            <div className="text-xs text-muted-dark font-medium mb-4">01</div>
            <div className="text-[22px] font-medium tracking-[-0.01em] mb-3.5">CGI</div>
            <div className="text-[14px] leading-[1.5] text-muted-dark font-normal">
              Modelling, texturing, lookdev and rendering. Photoreal product, environment and character work for fashion and lifestyle.
            </div>
          </div>

          <div className="reveal border-t border-hairline-dark pt-7">
            <div className="text-xs text-muted-dark font-medium mb-4">02</div>
            <div className="text-[22px] font-medium tracking-[-0.01em] mb-3.5">VFX</div>
            <div className="text-[14px] leading-[1.5] text-muted-dark font-normal">
              Tracking, compositing, cleanup and integration. Invisible craft that holds the frame together.
            </div>
          </div>

          <div className="reveal border-t border-hairline-dark pt-7">
            <div className="text-xs text-muted-dark font-medium mb-4">03</div>
            <div className="text-[22px] font-medium tracking-[-0.01em] mb-3.5">Motion Design</div>
            <div className="text-[14px] leading-[1.5] text-muted-dark font-normal">
              2D and 3D animation, title sequences, brand identity in motion. From single spots to full campaign systems.
            </div>
          </div>

          <div className="reveal border-t border-hairline-dark pt-7">
            <div className="text-xs text-muted-dark font-medium mb-4">04</div>
            <div className="text-[22px] font-medium tracking-[-0.01em] mb-3.5">AI Video</div>
            <div className="text-[14px] leading-[1.5] text-muted-dark font-normal">
              AI-native production across Seedance, Kling and Higgsfield. Character consistency, continuity, grade.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}