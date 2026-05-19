const capabilities = [
    {
      num: "01",
      title: "Art Direction",
      desc: "Concept through final frame. Mood, palette, pacing and production design for brand films and campaigns.",
    },
    {
      num: "02",
      title: "CG Supervision",
      desc: "Look development, shader and lighting direction, integration with live action. Shot-level oversight end to end.",
    },
    {
      num: "03",
      title: "AI Video Production",
      desc: "Prompt craft and model direction across Seedance, Kling and Higgsfield. Character consistency, continuity, grade.",
    },
    {
      num: "04",
      title: "Motion & VFX",
      desc: "Compositing, finishing, integration. Nuke and After Effects for broadcast and campaign work.",
    },
    {
      num: "05",
      title: "Team Leadership",
      desc: "Building and running production teams. Brief translation, vendor direction, deadline ownership.",
    },
  ];
  
  export function Capabilities() {
    return (
      <section id="capabilities" className="bg-black text-white py-[160px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal">
            <div className="text-xs tracking-[0.15em] uppercase text-muted-dark font-medium mb-6">
              Craft
            </div>
            <h2 className="text-[clamp(40px,6.5vw,88px)] font-semibold tracking-[-0.04em] leading-[1.02] mb-24 max-w-[14ch]">
              Five disciplines.<br />
              <span className="font-serif-italic">One direction.</span>
            </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {capabilities.map((cap) => (
              <div key={cap.num} className="reveal border-t border-hairline-dark pt-7">
                <div className="text-xs text-muted-dark font-medium mb-4 tabular-nums">
                  {cap.num}
                </div>
                <div className="text-[22px] font-medium tracking-[-0.01em] mb-3.5">
                  {cap.title}
                </div>
                <div className="text-sm leading-[1.5] text-muted-dark font-normal">
                  {cap.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }