/**
 * Album Detail Page
 * 
 * Design Philosophy: Minimalist Futurism
 * - Display all products in an album
 * - Filter by product type (physical, PDF, MMO)
 * - Product cards with detailed information
 */

import { useRoute, Link } from 'wouter';
import { ChevronRight, ArrowLeft, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { DEMO_SERIES } from '@/../../shared/eshop-data';

type ProductType = 'all' | 'physical' | 'pdf' | 'mmo';

export default function AlbumDetail() {
  const [match, params] = useRoute('/album/:id');
  const [filterType, setFilterType] = useState<ProductType>('all');

  if (!match) return null;

  // Find the album
  let album = null;
  let series = null;

  for (const s of DEMO_SERIES) {
    const foundAlbum = s.albums.find((a) => a.id === params?.id);
    if (foundAlbum) {
      album = foundAlbum;
      series = s;
      break;
    }
  }

  if (!album || !series) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">專輯未找到</h1>
          <Link href="/">
            <Button>返回首頁</Button>
          </Link>
        </div>
      </div>
    );
  }

  const filteredProducts =
    filterType === 'all'
      ? album.products
      : album.products.filter((p) => p.type === filterType);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href={`/series/${series.id}`}>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-primary-foreground truncate">{album.name}</h1>
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
            <span className="text-foreground whitespace-nowrap">{album.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <img
                src={album.image}
                alt={album.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{album.name}</h2>
              <p className="text-lg text-muted-foreground mb-8">{album.description}</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold">
                  {album.products.length} 件商品
                </div>
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                  系列: {series.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-muted-foreground flex-shrink-0">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-semibold">篩選:</span>
            </div>
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                filterType === 'all'
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-foreground hover:border-accent'
              }`}
            >
              全部
            </button>
            <button
              onClick={() => setFilterType('physical')}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                filterType === 'physical'
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-foreground hover:border-accent'
              }`}
            >
              實體商品
            </button>
            <button
              onClick={() => setFilterType('pdf')}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                filterType === 'pdf'
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-foreground hover:border-accent'
              }`}
            >
              PDF 商品
            </button>
            <button
              onClick={() => setFilterType('mmo')}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                filterType === 'mmo'
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-foreground hover:border-accent'
              }`}
            >
              MMO 商品
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">此分類暫無商品</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <div className="group cursor-pointer h-full">
                    <div className="relative overflow-hidden rounded-lg mb-4 bg-card border border-border hover:border-accent transition-all duration-300 h-48">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Type Badge */}
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {product.type === 'physical' && '實體'}
                        {product.type === 'pdf' && 'PDF'}
                        {product.type === 'mmo' && 'MMO'}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex items-center gap-2 text-white">
                          <span>查看詳情</span>
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-xs text-accent mb-1">{product.category}</p>
                      <h5 className="font-semibold mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {product.name}
                      </h5>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-accent">
                          ${product.price}
                        </span>
                        <Button
                          size="sm"
                          className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          加入購物車
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Eshop Demo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
