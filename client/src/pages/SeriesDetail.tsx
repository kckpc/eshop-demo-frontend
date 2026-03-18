/**
 * Series Detail Page
 * 
 * Design Philosophy: Minimalist Futurism
 * - Display all albums in a series
 * - Clear navigation breadcrumb
 * - Album cards with hover effects
 */

import { useRoute, Link } from 'wouter';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DEMO_SERIES } from '@/../../shared/eshop-data';

export default function SeriesDetail() {
  const [match, params] = useRoute('/series/:id');

  if (!match) return null;

  const series = DEMO_SERIES.find((s) => s.id === params?.id);

  if (!series) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">系列未找到</h1>
          <Link href="/">
            <Button>返回首頁</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-primary-foreground">{series.name}</h1>
          <div className="w-10" />
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-accent transition-colors">所有</a>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{series.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{series.name}</h2>
            <p className="text-lg text-muted-foreground mb-8">{series.description}</p>
            <div className="flex items-center gap-4">
              <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold">
                {series.albums.length} 個專輯
              </div>
              <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                {series.albums.reduce((sum, album) => sum + album.products.length, 0)} 件商品
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h3 className="text-2xl font-bold mb-8">系列專輯</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {series.albums.map((album) => (
              <Link key={album.id} href={`/album/${album.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4 bg-card border border-border hover:border-accent transition-all duration-300">
                    {/* Image Container */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={album.image}
                        alt={album.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Overlay Badge */}
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {album.products.length} 件商品
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-white">
                        <span>查看商品</span>
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {album.name}
                    </h4>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {album.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Eshop Demo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
