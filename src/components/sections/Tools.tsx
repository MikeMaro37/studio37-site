const tools = [
    "Houdini",
    "Nuke",
    "Cinema 4D",
    "Blender",
    "Seedance 2.0",
    "Kling 3.0",
    "Higgsfield",
    "After Effects",
    "DaVinci Resolve",
    "Photoshop",
    "Lightroom",
  ];
  
  export function Tools() {
    return (
      <section className="bg-black text-white py-20 px-6 border-t border-b border-hairline-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs tracking-[0.15em] uppercase text-muted-dark font-medium mb-7 text-center">
            A working toolkit
          </div>
          <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center items-center">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-[17px] text-white opacity-70 hover:opacity-100 transition-opacity font-normal tracking-tight cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }