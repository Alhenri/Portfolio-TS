import { ReactElement } from 'react'

export interface ContentProps {
  title: string
  content: ReactElement<any, any> | null
}