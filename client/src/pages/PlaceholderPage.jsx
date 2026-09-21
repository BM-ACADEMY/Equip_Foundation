// Stand-in for pages whose content task is not built yet. Shows the title only.
export default function PlaceholderPage({ title }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold">{title}</h1>
    </section>
  )
}
