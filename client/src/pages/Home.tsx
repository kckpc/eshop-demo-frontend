import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { series, albums, products, getProductsByAlbumId, getProductsByType } from '@/../../shared/eshop-data';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

/**
 * Eshop 首頁
 * 設計風格：AGWMM + HKACM 融合
 * 特點：多層級篩選、動畫切換、虛線邊框卡片
 */

type FilterLevel = 'series' | 'album' | 'type';
type ProductType = 'all' | 'pdf' | 'mp3';

export default function Home() {
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<ProductType>('all');
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

    // 按商品類型篩選
    if (selectedType !== 'all') {
      result = result.filter(p => p.type === selectedType);
    }

    // 按搜尋查詢篩選
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [selectedSeries, selectedAlbum, selectedType, searchQuery]);

  // 重置篩選
  const handleReset = () => {
    setSelectedSeries(null);
    setSelectedAlbum(null);
    setSelectedType('all');
    setSearchQuery('');
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
              placeholder="搜尋專輯或歌名..."
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

          {/* 商品類型篩選 */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">商品類型</h3>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setSelectedType('all')}
                variant={selectedType === 'all' ? 'default' : 'outline'}
                className={`${
                  selectedType === 'all'
                    ? 'bg-purple-500 hover:bg-purple-600 text-white border-purple-500'
                    : 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                }`}
              >
                全部
              </Button>
              <Button
                onClick={() => setSelectedType('pdf')}
                variant={selectedType === 'pdf' ? 'default' : 'outline'}
                className={`${
                  selectedType === 'pdf'
                    ? 'bg-purple-500 hover:bg-purple-600 text-white border-purple-500'
                    : 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                }`}
              >
                PDF 歌譜
              </Button>
              <Button
                onClick={() => setSelectedType('mp3')}
                variant={selectedType === 'mp3' ? 'default' : 'outline'}
                className={`${
                  selectedType === 'mp3'
                    ? 'bg-purple-500 hover:bg-purple-600 text-white border-purple-500'
                    : 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                }`}
              >
                MP3 音檔
              </Button>
            </div>
          </div>

          {/* 重置按鈕 */}
          {(selectedSeries || selectedAlbum || selectedType !== 'all' || searchQuery) && (
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
              key={`products-${selectedSeries}-${selectedAlbum}-${selectedType}`}
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
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {product.type === 'pdf' && 'PDF'}
                        {product.type === 'mp3' && 'MP3'}
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
