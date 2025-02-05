import { productInputSchema } from '@/lib/validator'
import { z } from 'zod'

export type IProductInput = z.infer<typeof productInputSchema>

export type Data = {
  products: IProductInput[]
  headerMenus: {
    name: string
    href: string
  }[]
  carousels: {
    image: string
    url: string
    title: string
    buttonCaption: string
    isPublished: boolean
  }[]
}
