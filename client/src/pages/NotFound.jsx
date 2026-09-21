import { Container } from '../components/ui'
import { Link } from 'react-router-dom'
import { notFound } from '../content/ui'

export default function NotFound() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold">{notFound.title}</h1>
      <p className="mt-4">{notFound.text}</p>
      <Link to="/" className="mt-6 inline-block underline">
        {notFound.homeLabel}
      </Link>
    </Container>
  )
}
