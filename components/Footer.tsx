export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Anoop Kumar. Built with 🤍</p>
        <p className="font-mono">Mumbai, India</p>
      </div>
    </footer>
  );
}
