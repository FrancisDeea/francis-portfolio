export default function Footer() {
  return (
    <footer className="section bg-footer border-none font-medium rounded-md h-16 w-[calc(100%-1.5rem)] max-w-[1200px] m-auto ct-flex-row justify-evenly">
      <div className="flex flex-col text-center text-sm">
        <span>
          ❤️ Developer by{" "}
          <a
            href="https://www.linkedin.com/in/francis-bernal-full-stack-developer/"
            target="_blank"
            className="font-bold text-opposite"
          >
            Francis Bernal
          </a>
        </span>
        <span>
          ⚡ Powered with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="nofollow"
            className="font-bold"
          >
            NextJS
          </a>
        </span>
      </div>
    </footer>
  );
}
