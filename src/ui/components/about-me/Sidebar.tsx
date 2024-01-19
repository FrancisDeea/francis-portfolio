"use client";

/* eslint-disable @next/next/no-img-element */
export default function Sidebar() {
  const handlePrint = () => {
    const iframe = document.getElementById("iframe") as HTMLIFrameElement;
    const iwindow = iframe?.contentWindow;
    iwindow?.print();
  };

  return (
    <aside className="section rounded-md border-2 bg-background1 p-4 flex-1 max-[896px]:hidden h-min sticky top-4">
      <div className="flex flex-col justify-between gap-2">
        <div className="ct-flex-col gap-2">
          <img
            src="/profile-cv.jpg"
            alt=""
            className="w-full max-w-[200px] m-auto object-cover aspect-square rounded-full border-2 border-medium"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-text2 text-center">
              ¡Hola, soy Francis!
            </span>
            <span className="font-bold text-2xl text-alert text-center">
              JS FullStack Dev
            </span>
          </div>
          <div className="ct-flex-row gap-2">
            <a
              href="/francis-bernal-resume.pdf"
              download
              className="btn-link text-sm text-center"
              id="cv"
            >
              Download CV
            </a>
            <a className="btn-link text-sm flex-1 text-center">LinkedIn</a>
          </div>
        </div>
      </div>
    </aside>
  );
}
