/**
 * Eshop 示範數據 - 基於 HKACM 音樂商店真實結構
 * 
 * 商品結構：
 * 系列 → 專輯 → 商品
 *   ├── 實體商品（Physical）
 *   │   ├── CD/下載卡版本（整張專輯）
 *   │   └── 歌譜書/套裝（整張專輯的印刷歌譜集）
 *   └── 數碼商品（Digital）
 *       ├── PDF 歌譜（單首歌曲）
 *       └── MP3 音檔（單首歌曲）
 */

export interface Song {
  id: string;
  name: string;
  composer?: string;
  lyricist?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  type: 'physical-cd' | 'physical-score' | 'digital-pdf' | 'digital-mp3';
  category: 'physical' | 'digital'; // 用於篩選
  image: string;
  songId?: string; // 數碼商品才有
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
  songs: Song[];
}

export interface Series {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
}

// 系列數據
export const series: Series[] = [
  {
    id: 'series-aroma',
    name: '香氣 Let His Aroma Fill the Air',
    description: '2025年新發佈，獻上最誠摯的敬拜',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 'series-spiritual',
    name: 'ACM靈修音樂專輯',
    description: '祢愛環繞，心靈歸家的靈修音樂',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'series-worship',
    name: '敬拜讚美系列',
    description: '齊唱敬拜讚美，獻上最誠摯的敬拜',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    color: 'from-yellow-400 to-orange-500',
  },
];

// 專輯數據
export const albums: Album[] = [
  // 香氣系列
  {
    id: 'album-aroma-1',
    name: '香氣 Let His Aroma Fill the Air',
    description: '2025年新發佈，獻上最誠摯的敬拜',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    seriesId: 'series-aroma',
    year: 2025,
    songs: [
      {
        id: 'song-aroma-1',
        name: '香氣 Let His Aroma Fill the Air',
        composer: '何威廉',
        lyricist: '李穎茵',
      },
    ],
  },

  // ACM靈修音樂專輯
  {
    id: 'album-spiritual-2',
    name: '祢愛環繞 ACM靈修音樂專輯 2',
    description: '祢愛環繞，靈修音樂帶來心靈的安慰',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    seriesId: 'series-spiritual',
    year: 2025,
    songs: [
      {
        id: 'song-spiritual-1',
        name: '祢是誰',
        composer: '陳澔峰',
        lyricist: '盧永亨',
      },
      {
        id: 'song-spiritual-2',
        name: '主，祢知道',
        composer: 'Ode Wong',
        lyricist: 'Glory Cheung @ SEMM',
      },
      {
        id: 'song-spiritual-3',
        name: '只因愛',
        composer: '古丹青',
        lyricist: '凌東成',
      },
      {
        id: 'song-spiritual-4',
        name: '是為了我罪',
        composer: '鄭楚萍',
        lyricist: '陳芳榮',
      },
      {
        id: 'song-spiritual-5',
        name: '儘管我尚未看見',
        composer: 'Alistair Yiu',
        lyricist: 'Sunset Worship',
      },
      {
        id: 'song-spiritual-6',
        name: '和平之君',
        composer: '李偉倫',
        lyricist: '黃維棣',
      },
      {
        id: 'song-spiritual-7',
        name: '耶穌恩光',
        composer: '何威廉',
        lyricist: '侯碧珮',
      },
      {
        id: 'song-spiritual-8',
        name: '祢成就救恩',
        composer: 'Larry Hung',
        lyricist: '朱浩廉',
      },
      {
        id: 'song-spiritual-9',
        name: '耶穌禱文',
        composer: '朱浩廉',
        lyricist: '耶穌禱文',
      },
    ],
  },

  // 敬拜讚美系列
  {
    id: 'album-worship-16',
    name: '齊唱敬拜讚美16：THE WAY',
    description: '2024年敬拜讚美新專輯，獻上最誠摯的敬拜',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    seriesId: 'series-worship',
    year: 2024,
    songs: [
      {
        id: 'song-worship-1',
        name: 'THE WAY',
        composer: '何威廉',
        lyricist: '李穎茵',
      },
      {
        id: 'song-worship-2',
        name: '祢是誰',
        composer: '陳澔峰',
        lyricist: '盧永亨',
      },
      {
        id: 'song-worship-3',
        name: '主，祢知道',
        composer: 'Ode Wong',
        lyricist: 'Glory Cheung @ SEMM',
      },
      {
        id: 'song-worship-4',
        name: '只因愛',
        composer: '古丹青',
        lyricist: '凌東成',
      },
    ],
  },
];

// 商品數據
export const products: Product[] = [
  // ============ 香氣系列 - 實體商品 ============
  {
    id: 'prod-aroma-cd',
    name: '香氣 Let His Aroma Fill the Air - CD版本',
    description: '精美CD版本，高清音質，附贈歌詞本',
    price: 150,
    type: 'physical-cd',
    category: 'physical',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    albumId: 'album-aroma-1',
    seriesId: 'series-aroma',
  },
  {
    id: 'prod-aroma-score',
    name: '香氣 Let His Aroma Fill the Air - 歌譜書',
    description: '印刷精美的歌譜書，包含完整歌詞和樂譜',
    price: 80,
    type: 'physical-score',
    category: 'physical',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    albumId: 'album-aroma-1',
    seriesId: 'series-aroma',
  },

  // ============ 香氣系列 - 數碼商品 ============
  {
    id: 'prod-aroma-pdf',
    name: '香氣 Let His Aroma Fill the Air - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    songId: 'song-aroma-1',
    albumId: 'album-aroma-1',
    seriesId: 'series-aroma',
  },
  {
    id: 'prod-aroma-mp3',
    name: '香氣 Let His Aroma Fill the Air - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-aroma-1',
    albumId: 'album-aroma-1',
    seriesId: 'series-aroma',
  },

  // ============ 靈修音樂專輯 2 - 實體商品 ============
  {
    id: 'prod-spiritual-cd',
    name: '祢愛環繞 ACM靈修音樂專輯 2 - CD版本',
    description: '精美CD版本，高清音質，附贈歌詞本',
    price: 150,
    type: 'physical-cd',
    category: 'physical',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },
  {
    id: 'prod-spiritual-score',
    name: '祢愛環繞 ACM靈修音樂專輯 2 - 歌譜書',
    description: '印刷精美的歌譜書，包含完整歌詞和樂譜',
    price: 120,
    type: 'physical-score',
    category: 'physical',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },

  // ============ 靈修音樂專輯 2 - 數碼商品 ============
  // 祢是誰
  {
    id: 'prod-spiritual-1-pdf',
    name: '祢是誰 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-spiritual-1',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },
  {
    id: 'prod-spiritual-1-mp3',
    name: '祢是誰 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-spiritual-1',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },

  // 主，祢知道
  {
    id: 'prod-spiritual-2-pdf',
    name: '主，祢知道 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-spiritual-2',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },
  {
    id: 'prod-spiritual-2-mp3',
    name: '主，祢知道 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-spiritual-2',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },

  // 只因愛
  {
    id: 'prod-spiritual-3-pdf',
    name: '只因愛 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-spiritual-3',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },
  {
    id: 'prod-spiritual-3-mp3',
    name: '只因愛 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-spiritual-3',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },

  // 是為了我罪
  {
    id: 'prod-spiritual-4-pdf',
    name: '是為了我罪 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-spiritual-4',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },
  {
    id: 'prod-spiritual-4-mp3',
    name: '是為了我罪 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-spiritual-4',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },

  // 儘管我尚未看見
  {
    id: 'prod-spiritual-5-pdf',
    name: '儘管我尚未看見 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-spiritual-5',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },
  {
    id: 'prod-spiritual-5-mp3',
    name: '儘管我尚未看見 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-spiritual-5',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },

  // 和平之君
  {
    id: 'prod-spiritual-6-pdf',
    name: '和平之君 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-spiritual-6',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },
  {
    id: 'prod-spiritual-6-mp3',
    name: '和平之君 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-spiritual-6',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },

  // 耶穌恩光
  {
    id: 'prod-spiritual-7-pdf',
    name: '耶穌恩光 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-spiritual-7',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },
  {
    id: 'prod-spiritual-7-mp3',
    name: '耶穌恩光 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-spiritual-7',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },

  // 祢成就救恩
  {
    id: 'prod-spiritual-8-pdf',
    name: '祢成就救恩 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-spiritual-8',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },
  {
    id: 'prod-spiritual-8-mp3',
    name: '祢成就救恩 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-spiritual-8',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },

  // 耶穌禱文
  {
    id: 'prod-spiritual-9-pdf',
    name: '耶穌禱文 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-spiritual-9',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },
  {
    id: 'prod-spiritual-9-mp3',
    name: '耶穌禱文 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-spiritual-9',
    albumId: 'album-spiritual-2',
    seriesId: 'series-spiritual',
  },

  // ============ 敬拜讚美16 - 實體商品 ============
  {
    id: 'prod-worship-cd',
    name: '齊唱敬拜讚美16：THE WAY - CD版本',
    description: '精美CD版本，高清音質，附贈歌詞本',
    price: 150,
    type: 'physical-cd',
    category: 'physical',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    albumId: 'album-worship-16',
    seriesId: 'series-worship',
  },
  {
    id: 'prod-worship-score',
    name: '齊唱敬拜讚美16：THE WAY - 歌譜書',
    description: '印刷精美的歌譜書，包含完整歌詞和樂譜',
    price: 100,
    type: 'physical-score',
    category: 'physical',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    albumId: 'album-worship-16',
    seriesId: 'series-worship',
  },

  // ============ 敬拜讚美16 - 數碼商品 ============
  // THE WAY
  {
    id: 'prod-worship-1-pdf',
    name: 'THE WAY - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-worship-1',
    albumId: 'album-worship-16',
    seriesId: 'series-worship',
  },
  {
    id: 'prod-worship-1-mp3',
    name: 'THE WAY - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-worship-1',
    albumId: 'album-worship-16',
    seriesId: 'series-worship',
  },

  // 祢是誰
  {
    id: 'prod-worship-2-pdf',
    name: '祢是誰 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-worship-2',
    albumId: 'album-worship-16',
    seriesId: 'series-worship',
  },
  {
    id: 'prod-worship-2-mp3',
    name: '祢是誰 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-worship-2',
    albumId: 'album-worship-16',
    seriesId: 'series-worship',
  },

  // 主，祢知道
  {
    id: 'prod-worship-3-pdf',
    name: '主，祢知道 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-worship-3',
    albumId: 'album-worship-16',
    seriesId: 'series-worship',
  },
  {
    id: 'prod-worship-3-mp3',
    name: '主，祢知道 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-worship-3',
    albumId: 'album-worship-16',
    seriesId: 'series-worship',
  },

  // 只因愛
  {
    id: 'prod-worship-4-pdf',
    name: '只因愛 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'digital-pdf',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-worship-4',
    albumId: 'album-worship-16',
    seriesId: 'series-worship',
  },
  {
    id: 'prod-worship-4-mp3',
    name: '只因愛 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'digital-mp3',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-worship-4',
    albumId: 'album-worship-16',
    seriesId: 'series-worship',
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

export function getProductsByCategory(category: 'physical' | 'digital'): Product[] {
  return products.filter(p => p.category === category);
}

export function getProductsBySeriesId(seriesId: string): Product[] {
  return products.filter(p => p.seriesId === seriesId);
}

export function getProductsBySongId(songId: string): Product[] {
  return products.filter(p => p.songId === songId);
}

export function getSongsByAlbumId(albumId: string): Song[] {
  const album = albums.find(a => a.id === albumId);
  return album ? album.songs : [];
}
