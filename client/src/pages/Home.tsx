/**
 * Home Page - Eshop Series Overview
 * 
 * Design Philosophy: Minimalist Futurism
 * - Dark background (#0f0f0f) with neon accents (purple, cyan, green)
 * - Clear visual hierarchy with card-based layout
 * - Smooth hover effects and transitions
 * - Responsive grid for series display
 */

import { Link } from 'wouter';
import { ChevronRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DEMO_SERIES } from '@/../../shared/eshop-data';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-primary border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary-foreground">
              ESHOP
            </h1>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
                所有
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
                系列
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
                專輯
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="搜尋..."
              className="hidden sm:block px-4 py-2 bg-input border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-card to-background py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              探索無限可能
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              從系列到專輯，從實體商品到數字內容，發現您喜愛的每一件作品。
            </p>
            <div className="flex gap-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                開始探索
              </Button>
              <Button variant="outline">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Series Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-2">所有系列</h3>
            <p className="text-muted-foreground">
              精心策劃的系列合集，每個系列都有獨特的故事與魅力
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEMO_SERIES.map((series) => (
              <Link key={series.id} href={`/series/${series.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4 bg-card border border-border hover:border-accent transition-all duration-300">
                    {/* Image Container */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={series.image}
                        alt={series.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Overlay Badge */}
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {series.albums.length} 專輯
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
                    <h4 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {series.name}
                    </h4>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {series.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-2">精選商品</h3>
            <p className="text-muted-foreground">
              熱門商品推薦，發現最受歡迎的作品
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEMO_SERIES.flatMap((series) =>
              series.albums.flatMap((album) =>
                album.products.slice(0, 1).map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`}>
                    <div className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-4 bg-background border border-border hover:border-accent transition-all duration-300">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Type Badge */}
                        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                          {product.type === 'physical' && '實體'}
                          {product.type === 'pdf' && 'PDF'}
                          {product.type === 'mmo' && 'MMO'}
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <p className="text-xs text-accent mb-1">{product.category}</p>
                        <h5 className="font-semibold mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                          {product.name}
                        </h5>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-accent">
                            ${product.price}
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
                ))
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">關於我們</h4>
              <p className="text-sm text-muted-foreground">
                提供優質的數字與實體內容，滿足您的創意需求。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">快速連結</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">所有系列</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">精選商品</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">聯絡我們</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">支持</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">幫助中心</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">隱私政策</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">條款與條件</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">聯絡方式</h4>
              <p className="text-sm text-muted-foreground">
                Email: support@eshop.com<br />
                電話: +852 1234 5678
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Eshop Demo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
