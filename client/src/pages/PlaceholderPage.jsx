// Stand-in for pages whose content task is not built yet. Shows the title only.
import { Container } from '../components/ui'
export default function PlaceholderPage({ title }) {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold">{title}</h1>
    </Container>
  )
}
