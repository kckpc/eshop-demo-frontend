/**
 * Product Detail Page
 * 
 * Design Philosophy: Minimalist Futurism
 * - Display detailed product information
 * - Product image, description, price, and add to cart
 * - Related products recommendation
 */

import { useRoute, Link } from 'wouter';
import { ChevronRight, ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { DEMO_SERIES } from '@/../../shared/eshop-data';

export default function ProductDetail() {
  const [match, params] = useRoute('/product/:id');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!match) return null;

  // Find the product
  let product = null;
  let album = null;
  let series = null;

  for (const s of DEMO_SERIES) {
    for (const a of s.albums) {
      const foundProduct = a.products.find((p) => p.id === params?.id);
      if (foundProduct) {
        product = foundProduct;
        album = a;
        series = s;
        break;
      }
    }
    if (product) break;
  }

  if (!product || !album || !series) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">商品未找到</h1>
          <Link href="/">
            <Button>返回首頁</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related products from the same album
  const relatedProducts = album.products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href={`/album/${album.id}`}>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-primary-foreground truncate">{product.name}</h1>
          <div className="w-10" />
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto">
            <Link href="/">
              <a className="hover:text-accent transition-colors whitespace-nowrap">所有</a>
            </Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link href={`/series/${series.id}`}>
              <a className="hover:text-accent transition-colors whitespace-nowrap">{series.name}</a>
            </Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link href={`/album/${album.id}`}>
              <a className="hover:text-accent transition-colors whitespace-nowrap">{album.name}</a>
            </Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <span className="text-foreground whitespace-nowrap">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div>
              <div className="relative overflow-hidden rounded-lg bg-card border border-border aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Type Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                  {product.type === 'physical' && '實體商品'}
                  {product.type === 'pdf' && 'PDF 商品'}
                  {product.type === 'mmo' && 'MMO 商品'}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <p className="text-accent text-sm font-semibold mb-2">{product.category}</p>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 p-6 bg-card border border-border rounded-lg">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-accent">${product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${Math.round(product.price * 1.2)}
                  </span>
                </div>
                <p className="text-sm text-secondary">限時優惠中</p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-3">數量</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded border border-border hover:border-accent transition-colors flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded border border-border hover:border-accent transition-colors flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <Button
                  size="lg"
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  加入購物車
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex items-center justify-center gap-2 ${
                    isWishlisted ? 'bg-accent/10 border-accent' : ''
                  }`}
                >
                  <Heart
                    className="w-5 h-5"
                    fill={isWishlisted ? 'currentColor' : 'none'}
                  />
                </Button>
              </div>

              {/* Product Details */}
              <div className="space-y-4 p-6 bg-card border border-border rounded-lg">
                <div>
                  <h3 className="font-semibold mb-2">商品類型</h3>
                  <p className="text-muted-foreground">
                    {product.type === 'physical' && '實體商品 - 包含物理交付'}
                    {product.type === 'pdf' && 'PDF 商品 - 數字下載'}
                    {product.type === 'mmo' && 'MMO 商品 - 虛擬世界內容'}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">專輯</h3>
                  <Link href={`/album/${album.id}`}>
                    <a className="text-accent hover:underline">{album.name}</a>
                  </Link>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">系列</h3>
                  <Link href={`/series/${series.id}`}>
                    <a className="text-accent hover:underline">{series.name}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-card border-t border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">相關商品</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-4 bg-background border border-border hover:border-accent transition-all duration-300">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                        {relatedProduct.type === 'physical' && '實體'}
                        {relatedProduct.type === 'pdf' && 'PDF'}
                        {relatedProduct.type === 'mmo' && 'MMO'}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-xs text-accent mb-1">{relatedProduct.category}</p>
                      <h5 className="font-semibold mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {relatedProduct.name}
                      </h5>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-accent">
                          ${relatedProduct.price}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Eshop Demo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
