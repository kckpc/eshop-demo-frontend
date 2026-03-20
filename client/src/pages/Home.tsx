import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { series, albums, products } from '@/../../shared/eshop-data';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

/**
 * Eshop 首頁
 * 設計風格：AGWMM + HKACM 融合
 * 特點：多層級篩選、動畫切換、虛線邊框卡片
 * 
 * 商品分類：
 * - 實體商品（Physical）：CD版本、歌譜書
 * - 數碼商品（Digital）：PDF歌譜、MP3音檔
 */

type FilterLevel = 'series' | 'album' | 'category';
type ProductCategory = 'all' | 'physical' | 'digital';

export default function Home() {
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 根據選擇篩選專輯
  const filteredAlbums = useMemo(() => {
    if (!selectedSeries) return [];
    return albums.filter(a => a.seriesId === selectedSeries);
  }, [selectedSeries]);

  // 根據選擇篩選商品
  const filteredProducts = useMemo(() => {
    let result = products;

    // 按系列篩選
    if (selectedSeries) {
      result = result.filter(p => p.seriesId === selectedSeries);
    }

    // 按專輯篩選
    if (selectedAlbum) {
      result = result.filter(p => p.albumId === selectedAlbum);
    }

    // 按商品分類篩選
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // 按搜尋查詢篩選 - 支持多維度搜尋
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      
      // 計算相關性分數
      const scoreProduct = (p: typeof products[0]) => {
        const productAlbum = albums.find(a => a.id === p.albumId);
        let score = 0;
        
        // 完全匹配專輯名稱 - 最高優先級 (+1000)
        if (productAlbum && productAlbum.name.toLowerCase() === query) score += 1000;
        // 專輯名稱包含搜尋詞 - 次高優先級 (+500)
        else if (productAlbum && productAlbum.name.toLowerCase().includes(query)) score += 500;
        
        // 完全匹配商品名稱 (+100)
        if (p.name.toLowerCase() === query) score += 100;
        // 商品名稱包含搜尋詞 (+50)
        else if (p.name.toLowerCase().includes(query)) score += 50;
        
        // 商品描述包含搜尋詞 (+20)
        if (p.description.toLowerCase().includes(query)) score += 20;
        
        // 商品類型匹配 (+10)
        const typeMatches = (
          (p.type.includes('mp3') && query.includes('mp3')) ||
          (p.type.includes('pdf') && query.includes('pdf')) ||
          (p.type.includes('mmo') && (query.includes('mmo') || query.includes('伴奏'))) ||
          (p.type.includes('cd') && query.includes('cd')) ||
          (p.type.includes('usb') && query.includes('usb')) ||
          (p.type.includes('merchandise') && query.includes('周邊'))
        );
        if (typeMatches) score += 500;
        
        return score;
      };
      
      result = result
        .map(p => ({
          product: p,
          score: scoreProduct(p)
        }))
        .filter(item => item.score > 0)
        .sort((a, b) => {
          // 二級排序: 先按相關性分數, 再按商品類型順序
          if (a.score !== b.score) {
            return b.score - a.score; // 高分排前
          }
          // 相關性分數相同時, 按商品類型順序排序
          const typeOrder: Record<string, number> = {
            'cd': 1,
            'usb': 1,
            'score-book': 1,
            'merchandise': 1,
            'pdf': 2,
            'mmo': 3,
            'mp3': 3
          };
          const aType = typeOrder[a.product.type] || 99;
          const bType = typeOrder[b.product.type] || 99;
          return aType - bType;
        })
        .map(item => item.product);
    }

    // 全局排序: 按商品類型順序排列 (實體 → PDF → MMO)
    const typeOrder: Record<string, number> = {
      'cd': 1,
      'usb': 1,
      'score-book': 1,
      'merchandise': 1,
      'pdf': 2,
      'mmo': 3,
      'mp3': 3
    };
    
    result = result.sort((a, b) => {
      const aType = typeOrder[a.type] || 99;
      const bType = typeOrder[b.type] || 99;
      return aType - bType;
    });

    return result;
  }, [selectedSeries, selectedAlbum, selectedCategory, searchQuery]);

  // 重置篩選
  const handleReset = () => {
    setSelectedSeries(null);
    setSelectedAlbum(null);
    setSelectedCategory('all');
    setSearchQuery('');
  };

  // 獲取商品類型標籤
  const getProductTypeLabel = (type: string) => {
    switch (type) {
      case 'physical-album-cd':
        return 'CD版本';
      case 'physical-album-usb':
        return 'USB下載卡';
      case 'physical-album-card':
        return '下載卡';
      case 'physical-score-book':
        return '歌譜書';
      case 'physical-collection-usb':
        return '合集USB';
      case 'physical-collection-pdf':
        return '合集歌譜書';
      case 'physical-merchandise':
        return '周邊產品';
      case 'digital-pdf':
        return 'PDF歌譜';
      case 'digital-mp3':
        return 'MP3音檔';
      case 'digital-mmo':
        return '伴奏音樂';
      default:
        return type;
    }
  };

  // 獲取商品類型顏色
  const getProductTypeColor = (type: string) => {
    switch (type) {
      case 'physical-album-cd':
      case 'physical-album-usb':
      case 'physical-album-card':
        return 'bg-blue-500';
      case 'physical-score-book':
        return 'bg-indigo-500';
      case 'physical-collection-usb':
      case 'physical-collection-pdf':
        return 'bg-purple-500';
      case 'physical-merchandise':
        return 'bg-rose-500';
      case 'digital-pdf':
        return 'bg-green-500';
      case 'digital-mp3':
        return 'bg-amber-500';
      case 'digital-mmo':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* 頂部導航 */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-700 to-purple-600 shadow-lg">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-white">ESHOP</div>
            <div className="text-sm text-purple-100">音樂商店</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex text-sm text-purple-100 gap-6">
              <button className="hover:text-white transition">所有</button>
              <button className="hover:text-white transition">系列</button>
              <button className="hover:text-white transition">專輯</button>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition">
              🛒 購物車
            </button>
          </div>
        </div>
      </nav>

      {/* 主內容區 */}
      <div className="container py-8">
        {/* 搜尋區 */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜尋歌名、商品類型、專輯...（如：MP3、PDF、伴奏、祢是誰）"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-700 text-white placeholder-gray-400 rounded-lg border border-slate-600 focus:border-green-500 focus:outline-none transition"
            />
          </div>
        </div>

        {/* 篩選區 */}
        <div className="space-y-6 mb-8">
          {/* 系列篩選 */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">系列</h3>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => {
                  setSelectedSeries(null);
                  setSelectedAlbum(null);
                }}
                variant={selectedSeries === null ? 'default' : 'outline'}
                className={`${
                  selectedSeries === null
                    ? 'bg-green-500 hover:bg-green-600 text-white border-green-500'
                    : 'border-green-500 text-green-400 hover:bg-green-500/10'
                }`}
              >
                顯示全部
              </Button>
              {series.map(s => (
                <Button
                  key={s.id}
                  onClick={() => {
                    setSelectedSeries(s.id);
                    setSelectedAlbum(null);
                  }}
                  variant={selectedSeries === s.id ? 'default' : 'outline'}
                  className={`${
                    selectedSeries === s.id
                      ? 'bg-green-500 hover:bg-green-600 text-white border-green-500'
                      : 'border-green-500 text-green-400 hover:bg-green-500/10'
                  }`}
                >
                  {s.name}
                </Button>
              ))}
            </div>
          </div>

          {/* 專輯篩選 */}
          {selectedSeries && filteredAlbums.length > 0 && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">專輯</h3>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => setSelectedAlbum(null)}
                  variant={selectedAlbum === null ? 'default' : 'outline'}
                  className={`${
                    selectedAlbum === null
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white border-cyan-500'
                      : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  全部專輯
                </Button>
                {filteredAlbums.map(a => (
                  <Button
                    key={a.id}
                    onClick={() => setSelectedAlbum(a.id)}
                    variant={selectedAlbum === a.id ? 'default' : 'outline'}
                    className={`${
                      selectedAlbum === a.id
                        ? 'bg-cyan-500 hover:bg-cyan-600 text-white border-cyan-500'
                        : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    {a.name}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}

          {/* 商品分類篩選 */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">商品分類</h3>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setSelectedCategory('all')}
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                className={`${
                  selectedCategory === 'all'
                    ? 'bg-purple-500 hover:bg-purple-600 text-white border-purple-500'
                    : 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                }`}
              >
                全部
              </Button>
              <Button
                onClick={() => setSelectedCategory('physical')}
                variant={selectedCategory === 'physical' ? 'default' : 'outline'}
                className={`${
                  selectedCategory === 'physical'
                    ? 'bg-purple-500 hover:bg-purple-600 text-white border-purple-500'
                    : 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                }`}
              >
                實體商品
              </Button>
              <Button
                onClick={() => setSelectedCategory('digital')}
                variant={selectedCategory === 'digital' ? 'default' : 'outline'}
                className={`${
                  selectedCategory === 'digital'
                    ? 'bg-purple-500 hover:bg-purple-600 text-white border-purple-500'
                    : 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                }`}
              >
                數碼商品
              </Button>
            </div>
          </div>

          {/* 重置按鈕 */}
          {(selectedSeries || selectedAlbum || selectedCategory !== 'all' || searchQuery) && (
            <Button onClick={handleReset} variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10">
              清除篩選
            </Button>
          )}
        </div>

        {/* 商品計數 */}
        <div className="mb-6 text-gray-300 text-sm">
          顯示 {filteredProducts.length} 件商品
        </div>

        {/* 商品網格 */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={`products-${selectedSeries}-${selectedAlbum}-${selectedCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="relative border-2 border-dashed border-green-500 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 bg-slate-800 hover:bg-slate-700">
                    {/* 商品圖片 */}
                    <div className="relative h-48 overflow-hidden bg-slate-700">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute top-3 right-3 ${getProductTypeColor(product.type)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                        {getProductTypeLabel(product.type)}
                      </div>
                    </div>

                    {/* 商品信息 */}
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-sm line-clamp-2 mb-2 group-hover:text-green-400 transition">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 text-xs mb-3 line-clamp-2">{product.description}</p>

                      {/* 價格和按鈕 */}
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-green-400">${product.price}</div>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold transition">
                          加入購物車
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 text-lg">沒有找到符合條件的商品</div>
              <button
                onClick={handleReset}
                className="mt-4 text-green-400 hover:text-green-300 underline text-sm"
              >
                清除篩選條件
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
