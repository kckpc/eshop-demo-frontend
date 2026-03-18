/**
 * Eshop 示範數據
 * 基於 HKACM 音樂商店結構
 * 系列 → 專輯 → 商品（實體/PDF/MMO）
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  type: 'physical' | 'pdf' | 'mmo'; // 實體 | PDF歌譜 | 數碼音檔
  category: string; // 商品分類
  image: string;
  albumId: string;
  seriesId: string;
}

export interface Album {
  id: string;
  name: string;
  description: string;
  image: string;
  seriesId: string;
  year: number;
  songs: string[]; // 歌曲名稱列表
}

export interface Series {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string; // 系列主色
}

// 系列數據
export const series: Series[] = [
  {
    id: 'worship-praise',
    name: '敬拜讚美系列',
    description: '齊唱敬拜讚美系列，獻上最誠摯的敬拜',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 'spiritual-music',
    name: '靈修音樂系列',
    description: '祢愛環繞，心靈歸家的靈修音樂',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'childrens-songs',
    name: '兒歌系列',
    description: '祈禱仔唱詩歌，兒童敬拜讚美',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
    color: 'from-yellow-400 to-orange-500',
  },
];

// 專輯數據
export const albums: Album[] = [
  // 敬拜讚美系列
  {
    id: 'album-1-1',
    name: '齊唱敬拜讚美16：THE WAY',
    description: '跨越星系的冒險故事，獻上最誠摯的敬拜',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
    seriesId: 'worship-praise',
    year: 2024,
    songs: ['THE WAY', '祢是誰', '主，祢知道', '只因愛', '是為了我罪'],
  },
  {
    id: 'album-1-2',
    name: '《站立得穩》',
    description: '在信心中站立得穩，經歷主的大能',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    seriesId: 'worship-praise',
    year: 2023,
    songs: ['站立得穩', '和平之君', '耶穌恩光', '祢成就救恩'],
  },

  // 靈修音樂系列
  {
    id: 'album-2-1',
    name: '《祢愛環繞》ACM靈修音樂專輯2',
    description: '祢愛環繞，靈修音樂帶來心靈的安慰',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    seriesId: 'spiritual-music',
    year: 2025,
    songs: ['祢愛環繞', '祢是誰', '主，祢知道', '只因愛', '是為了我罪', '儘管我尚未看見', '和平之君', '耶穌恩光', '祢成就救恩', '耶穌禱文'],
  },
  {
    id: 'album-2-2',
    name: '《心靈歸家》',
    description: '在主的懷抱中找到歸家的感覺',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=500&fit=croph=500https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=500&fit=cropfit=crop',
    seriesId: 'spiritual-music',
    year: 2024,
    songs: ['心靈歸家', '回家', '主的愛', '永恆的家'],
  },

  // 兒歌系列
  {
    id: 'album-3-1',
    name: '祈禱仔唱詩歌7',
    description: '兒童敬拜讚美，從小認識主的愛',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
    seriesId: 'childrens-songs',
    year: 2024,
    songs: ['耶穌愛我', '小小羊', '讚美主', '感謝主'],
  },
];

// 商品數據
export const products: Product[] = [
  // 敬拜讚美系列 - 齊唱敬拜讚美16：THE WAY
  {
    id: 'prod-1-1-1',
    name: '齊唱敬拜讚美16：THE WAY 概念專輯（收藏版）',
    description: '精裝版本，包含完整歌譜和簽名卡',
    price: 250,
    type: 'physical',
    category: '實體專輯',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-1-2',
    name: '齊唱敬拜讚美16：THE WAY 專輯歌譜',
    description: 'PDF 格式，包含所有歌曲的完整歌譜',
    price: 80,
    type: 'pdf',
    category: 'PDF 歌譜',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-1-3',
    name: 'THE WAY 刺繡 T-shirt',
    description: '限量周邊，高品質刺繡設計',
    price: 225,
    type: 'physical',
    category: '周邊商品',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-1-4',
    name: 'THE WAY 刺繡寬鬆衛衣',
    description: '舒適寬鬆版型，冬季必備',
    price: 300,
    type: 'physical',
    category: '周邊商品',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500https://images.unsplash.com/photo-1556821552-107d12c0ff7f?w=500&h=500&fit=croph=500https://images.unsplash.com/photo-1556821552-107d12c0ff7f?w=500&h=500&fit=cropfit=crop',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },

  // 敬拜讚美系列 - 《站立得穩》
  {
    id: 'prod-1-2-1',
    name: '《站立得穩》專輯',
    description: '完整專輯，收錄所有歌曲',
    price: 100,
    type: 'physical',
    category: '實體專輯',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    albumId: 'album-1-2',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-2-2',
    name: '站立得穩 – 歌譜 PDF',
    description: '單譜 PDF，高清列印版本',
    price: 20,
    type: 'pdf',
    category: 'PDF 歌譜',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    albumId: 'album-1-2',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-2-3',
    name: '站立得穩 – 音樂下載',
    description: '數碼版音樂檔案，即時下載',
    price: 50,
    type: 'mmo',
    category: '數碼音檔',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
    albumId: 'album-1-2',
    seriesId: 'worship-praise',
  },

  // 靈修音樂系列 - 《祢愛環繞》
  {
    id: 'prod-2-1-1',
    name: 'ACM靈修專輯2：《祢愛環繞》',
    description: '靈修音樂專輯，帶來心靈的安慰',
    price: 150,
    type: 'physical',
    category: '實體專輯',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    albumId: 'album-2-1',
    seriesId: 'spiritual-music',
  },
  {
    id: 'prod-2-1-2',
    name: '祢愛環繞 – 詩班譜 PDF',
    description: '詩班合唱版本，適合團體敬拜',
    price: 30,
    type: 'pdf',
    category: 'PDF 歌譜',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    albumId: 'album-2-1',
    seriesId: 'spiritual-music',
  },
  {
    id: 'prod-2-1-3',
    name: '祢愛環繞 – 伴奏譜 PDF',
    description: '伴奏版本，適合獨唱或小組',
    price: 25,
    type: 'pdf',
    category: 'PDF 歌譜',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    albumId: 'album-2-1',
    seriesId: 'spiritual-music',
  },
  {
    id: 'prod-2-1-4',
    name: '《祢愛環繞》木製十字架連座',
    description: '精美周邊，靈修擺飾',
    price: 100,
    type: 'physical',
    category: '周邊商品',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=croph=500https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=cropfit=crop',
    albumId: 'album-2-1',
    seriesId: 'spiritual-music',
  },
  {
    id: 'prod-2-1-5',
    name: '祢愛環繞 – 數碼專輯',
    description: '完整音樂下載，即時享受',
    price: 80,
    type: 'mmo',
    category: '數碼音檔',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
    albumId: 'album-2-1',
    seriesId: 'spiritual-music',
  },

  // 靈修音樂系列 - 《心靈歸家》
  {
    id: 'prod-2-2-1',
    name: 'ACM靈修音樂《心靈歸家》專輯',
    description: '溫暖靈修音樂，找到心靈的家',
    price: 100,
    type: 'physical',
    category: '實體專輯',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    albumId: 'album-2-2',
    seriesId: 'spiritual-music',
  },
  {
    id: 'prod-2-2-2',
    name: '心靈歸家 – 歌譜 PDF',
    description: '完整歌譜集合',
    price: 20,
    type: 'pdf',
    category: 'PDF 歌譜',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    albumId: 'album-2-2',
    seriesId: 'spiritual-music',
  },

  // 兒歌系列 - 祈禱仔唱詩歌7
  {
    id: 'prod-3-1-1',
    name: '祈禱仔唱詩歌7 歌書及下載碼套裝',
    description: '實體歌書 + 數碼音樂下載碼',
    price: 280,
    type: 'physical',
    category: '實體專輯',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
    albumId: 'album-3-1',
    seriesId: 'childrens-songs',
  },
  {
    id: 'prod-3-1-2',
    name: '祈禱仔唱詩歌7 – 歌譜 PDF',
    description: '兒童歌譜，易於學習',
    price: 15,
    type: 'pdf',
    category: 'PDF 歌譜',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    albumId: 'album-3-1',
    seriesId: 'childrens-songs',
  },
  {
    id: 'prod-3-1-3',
    name: '祈禱仔唱詩歌7 – 音樂下載',
    description: '兒童敬拜音樂，快樂學習',
    price: 40,
    type: 'mmo',
    category: '數碼音檔',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
    albumId: 'album-3-1',
    seriesId: 'childrens-songs',
  },
];

// 輔助函數
export function getSeriesById(id: string): Series | undefined {
  return series.find(s => s.id === id);
}

export function getAlbumsBySeriesId(seriesId: string): Album[] {
  return albums.filter(a => a.seriesId === seriesId);
}

export function getProductsByAlbumId(albumId: string): Product[] {
  return products.filter(p => p.albumId === albumId);
}

export function getProductsByType(type: 'physical' | 'pdf' | 'mmo'): Product[] {
  return products.filter(p => p.type === type);
}

export function getProductsBySeriesId(seriesId: string): Product[] {
  return products.filter(p => p.seriesId === seriesId);
}
