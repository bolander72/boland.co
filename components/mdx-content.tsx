import * as runtime from 'react/jsx-runtime'
import CustomLink from './mdx/CustomLink'

interface MdxProps {
  code: string
  components?: Record<string, React.ComponentType>
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

export function MDXContent({ code, components }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={{ ...components, a: CustomLink }} />
}
