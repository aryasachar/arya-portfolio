export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-10 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Arya Sachar</p>
        <div className="flex gap-5">
          <a
            href="https://linkedin.com/in/aryasachar"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-text-primary"
          >
            LinkedIn
          </a>
          <a
            href="mailto:aryasachar@gmail.com"
            className="transition-colors hover:text-text-primary"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
