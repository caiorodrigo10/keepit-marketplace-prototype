import { Metadata } from 'next'
import ProductDetailsHeader from '@/modules/products/components/product-details-torganic/ProductDetailsHeader'
import ProductDetailsTop from '@/modules/products/components/product-details-torganic/ProductDetailsTop'
import { RelatedProducts } from '@/modules/products/components/related-products-torganic'
import FeatureBar from '@/modules/home/components/feature-bar'
import AOSInit from '@/modules/home/components/aos-init'
import { productDetailsMock } from '@/lib/mock-data/product-details-mock'
import '@/style/home-three/layout/_product-details.scss'

export const metadata: Metadata = {
  title: 'Produto Orgânico - Keepit Brasil',
  description:
    'Confira nossos produtos orgânicos frescos e saudáveis. Entrega rápida e qualidade garantida.',
}

export default function ProductDetailsPage() {
  return (
    <AOSInit>
      <ProductDetailsHeader productTitle={productDetailsMock.title} />
      <ProductDetailsTop product={productDetailsMock} />
      <RelatedProducts />
      <FeatureBar />
    </AOSInit>
  )
}
