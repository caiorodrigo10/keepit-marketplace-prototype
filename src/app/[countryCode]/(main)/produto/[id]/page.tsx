import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductDetailsHeader from '@/modules/products/components/product-details-torganic/ProductDetailsHeader'
import ProductDetailsTop from '@/modules/products/components/product-details-torganic/ProductDetailsTop'
import { RelatedProducts } from '@/modules/products/components/related-products-torganic'
import FeatureBar from '@/modules/home/components/feature-bar'
import AOSInit from '@/modules/home/components/aos-init'
import { getProductById, getAllProductIds } from '@/lib/mock-data/all-products-details'
import '@/style/home-three/layout/_product-details.scss'

type Props = {
  params: Promise<{ countryCode: string; id: string }>
}

// Gera páginas estáticas para todos os produtos em build time
export async function generateStaticParams() {
  const productIds = getAllProductIds()

  return productIds.map((id) => ({
    id: id,
  }))
}

// Gera metadata dinâmica para cada produto
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: 'Produto não encontrado - Keepit Brasil',
      description: 'Produto não encontrado',
    }
  }

  return {
    title: `${product.title} - Keepit Brasil`,
    description: `${product.description.paragraphs[0]}`,
    openGraph: {
      title: `${product.title} - Keepit Brasil`,
      description: `${product.description.paragraphs[0]}`,
      images: product.images[0] ? [product.images[0]] : [],
    },
  }
}

export default async function ProductPage(props: Props) {
  const params = await props.params
  const product = getProductById(params.id)

  // Se produto não existe, retorna 404
  if (!product) {
    notFound()
  }

  return (
    <AOSInit>
      <ProductDetailsHeader productTitle={product.title} />
      <ProductDetailsTop product={product} />
      <RelatedProducts />
      <FeatureBar />
    </AOSInit>
  )
}
