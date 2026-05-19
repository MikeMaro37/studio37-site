import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-bg-light text-fg-light py-[180px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.035em] leading-[1.05] mb-8">
              Ten years of directing <span className="font-serif-italic">pixels</span> into pictures.
            </h2>
            <p className="text-[17px] leading-[1.55] text-muted-light mb-4 max-w-[52ch]">
              Mike Maro is a Belgrade-based art director and CG supervisor. He has led visual direction on commercial films for fashion, sport, retail and lifestyle brands across Europe.
            </p>
            <p className="text-[17px] leading-[1.55] text-muted-light mb-4 max-w-[52ch]">
              He is the founder and creative director of <a href="https://studio37.team" target="_blank" rel="noopener noreferrer" className="underline decoration-fg-light/30 underline-offset-4 hover:decoration-fg-light transition-colors">Studio 37</a>, where he built a team and a body of work spanning campaigns, product films and brand identities for clients including Avito, Yandex and VK.
            </p>
            <p className="text-[17px] leading-[1.55] text-muted-light mb-4 max-w-[52ch]">
              His practice combines traditional CG craft with AI-native production pipelines, a hybrid approach that shortens timelines without softening the work.
            </p>
            <p className="text-[17px] leading-[1.55] text-muted-light max-w-[52ch]">
              Currently available for freelance art direction across Europe: campaigns, product films, title sequences and brand identity work.
            </p>
          </div>

          <div className="reveal relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
            <Image
              src="/portrait.jpg"
              alt="Mike Maro"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}