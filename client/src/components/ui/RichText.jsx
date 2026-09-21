// Renders content strings with **bold** support. Pass an array to render one
// paragraph per item.
import { renderInline } from './renderInline'

export default function RichText({ text, as: Tag = 'p', className }) {
  if (Array.isArray(text)) {
    return text.map((item, index) => (
      <Tag key={index} className={className}>
        {renderInline(item)}
      </Tag>
    ))
  }
  return <Tag className={className}>{renderInline(text ?? '')}</Tag>
}
