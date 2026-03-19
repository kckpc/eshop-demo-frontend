/**
 * Eshop 示範數據 - 基於 HKACM 音樂商店結構
 * 每首歌曲都有 PDF 歌譜和 MP3 音檔兩種商品格式
 * 系列 → 專輯 → 歌曲 → 商品（PDF/MP3）
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
  type: 'pdf' | 'mp3'; // PDF歌譜 | MP3音檔
  image: string;
  songId: string;
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
    id: 'worship-praise',
    name: '敬拜讚美系列',
    description: '齊唱敬拜讚美系列，獻上最誠摯的敬拜',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
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
    description: '2024年敬拜讚美新專輯，獻上最誠摯的敬拜',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    seriesId: 'worship-praise',
    year: 2024,
    songs: [
      {
        id: 'song-1-1-1',
        name: 'THE WAY',
        composer: '何威廉',
        lyricist: '李穎茵',
      },
      {
        id: 'song-1-1-2',
        name: '祢是誰',
        composer: '陳澔峰',
        lyricist: '盧永亨',
      },
      {
        id: 'song-1-1-3',
        name: '主，祢知道',
        composer: 'Ode Wong',
        lyricist: 'Glory Cheung',
      },
      {
        id: 'song-1-1-4',
        name: '只因愛',
        composer: '古丹青',
        lyricist: '凌東成',
      },
      {
        id: 'song-1-1-5',
        name: '是為了我罪',
        composer: '鄭楚萍',
        lyricist: '陳芳榮',
      },
    ],
  },
  {
    id: 'album-1-2',
    name: '《站立得穩》',
    description: '在信心中站立得穩，經歷主的大能',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    seriesId: 'worship-praise',
    year: 2023,
    songs: [
      {
        id: 'song-1-2-1',
        name: '站立得穩',
        composer: '李偉倫',
        lyricist: '黃維棣',
      },
      {
        id: 'song-1-2-2',
        name: '和平之君',
        composer: '何威廉',
        lyricist: '侯碧珮',
      },
      {
        id: 'song-1-2-3',
        name: '耶穌恩光',
        composer: '何威廉',
        lyricist: '侯碧珮',
      },
      {
        id: 'song-1-2-4',
        name: '祢成就救恩',
        composer: 'Larry Hung',
        lyricist: '朱浩廉',
      },
    ],
  },

  // 靈修音樂系列
  {
    id: 'album-2-1',
    name: '《祢愛環繞》ACM靈修音樂專輯2',
    description: '祢愛環繞，靈修音樂帶來心靈的安慰',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    seriesId: 'spiritual-music',
    year: 2025,
    songs: [
      {
        id: 'song-2-1-1',
        name: '祢愛環繞',
        composer: '陳澔峰',
        lyricist: '盧永亨',
      },
      {
        id: 'song-2-1-2',
        name: '祢是誰',
        composer: '陳澔峰',
        lyricist: '盧永亨',
      },
      {
        id: 'song-2-1-3',
        name: '主，祢知道',
        composer: 'Ode Wong',
        lyricist: 'Glory Cheung',
      },
      {
        id: 'song-2-1-4',
        name: '只因愛',
        composer: '古丹青',
        lyricist: '凌東成',
      },
      {
        id: 'song-2-1-5',
        name: '是為了我罪',
        composer: '鄭楚萍',
        lyricist: '陳芳榮',
      },
      {
        id: 'song-2-1-6',
        name: '儘管我尚未看見',
        composer: 'Alistair Yiu',
        lyricist: 'Sunset Worship',
      },
      {
        id: 'song-2-1-7',
        name: '和平之君',
        composer: '李偉倫',
        lyricist: '黃維棣',
      },
      {
        id: 'song-2-1-8',
        name: '耶穌恩光',
        composer: '何威廉',
        lyricist: '侯碧珮',
      },
      {
        id: 'song-2-1-9',
        name: '祢成就救恩',
        composer: 'Larry Hung',
        lyricist: '朱浩廉',
      },
      {
        id: 'song-2-1-10',
        name: '耶穌禱文',
        composer: '朱浩廉',
        lyricist: '耶穌禱文',
      },
    ],
  },
  {
    id: 'album-2-2',
    name: '《心靈歸家》',
    description: '在主的懷抱中找到歸家的感覺',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    seriesId: 'spiritual-music',
    year: 2024,
    songs: [
      {
        id: 'song-2-2-1',
        name: '心靈歸家',
        composer: '何威廉',
        lyricist: '李穎茵',
      },
      {
        id: 'song-2-2-2',
        name: '回家',
        composer: '陳澔峰',
        lyricist: '盧永亨',
      },
      {
        id: 'song-2-2-3',
        name: '主的愛',
        composer: 'Ode Wong',
        lyricist: 'Glory Cheung',
      },
      {
        id: 'song-2-2-4',
        name: '永恆的家',
        composer: '古丹青',
        lyricist: '凌東成',
      },
    ],
  },

  // 兒歌系列
  {
    id: 'album-3-1',
    name: '祈禱仔唱詩歌7',
    description: '兒童敬拜讚美，從小認識主的愛',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
    seriesId: 'childrens-songs',
    year: 2024,
    songs: [
      {
        id: 'song-3-1-1',
        name: '耶穌愛我',
        composer: '何威廉',
        lyricist: '李穎茵',
      },
      {
        id: 'song-3-1-2',
        name: '小小羊',
        composer: '陳澔峰',
        lyricist: '盧永亨',
      },
      {
        id: 'song-3-1-3',
        name: '讚美主',
        composer: 'Ode Wong',
        lyricist: 'Glory Cheung',
      },
      {
        id: 'song-3-1-4',
        name: '感謝主',
        composer: '古丹青',
        lyricist: '凌東成',
      },
    ],
  },
];

// 商品數據 - 每首歌曲都有 PDF 和 MP3 兩種格式
export const products: Product[] = [
  // 敬拜讚美系列 - 齊唱敬拜讚美16：THE WAY
  // THE WAY
  {
    id: 'prod-1-1-1-pdf',
    name: 'THE WAY - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-1-1-1',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-1-1-mp3',
    name: 'THE WAY - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-1-1-1',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },

  // 祢是誰
  {
    id: 'prod-1-1-2-pdf',
    name: '祢是誰 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-1-1-2',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-1-2-mp3',
    name: '祢是誰 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-1-1-2',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },

  // 主，祢知道
  {
    id: 'prod-1-1-3-pdf',
    name: '主，祢知道 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-1-1-3',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-1-3-mp3',
    name: '主，祢知道 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-1-1-3',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },

  // 只因愛
  {
    id: 'prod-1-1-4-pdf',
    name: '只因愛 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-1-1-4',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-1-4-mp3',
    name: '只因愛 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-1-1-4',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },

  // 是為了我罪
  {
    id: 'prod-1-1-5-pdf',
    name: '是為了我罪 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-1-1-5',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-1-5-mp3',
    name: '是為了我罪 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-1-1-5',
    albumId: 'album-1-1',
    seriesId: 'worship-praise',
  },

  // 敬拜讚美系列 - 《站立得穩》
  // 站立得穩
  {
    id: 'prod-1-2-1-pdf',
    name: '站立得穩 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-1-2-1',
    albumId: 'album-1-2',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-2-1-mp3',
    name: '站立得穩 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-1-2-1',
    albumId: 'album-1-2',
    seriesId: 'worship-praise',
  },

  // 和平之君
  {
    id: 'prod-1-2-2-pdf',
    name: '和平之君 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-1-2-2',
    albumId: 'album-1-2',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-2-2-mp3',
    name: '和平之君 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-1-2-2',
    albumId: 'album-1-2',
    seriesId: 'worship-praise',
  },

  // 耶穌恩光
  {
    id: 'prod-1-2-3-pdf',
    name: '耶穌恩光 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-1-2-3',
    albumId: 'album-1-2',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-2-3-mp3',
    name: '耶穌恩光 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-1-2-3',
    albumId: 'album-1-2',
    seriesId: 'worship-praise',
  },

  // 祢成就救恩
  {
    id: 'prod-1-2-4-pdf',
    name: '祢成就救恩 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-1-2-4',
    albumId: 'album-1-2',
    seriesId: 'worship-praise',
  },
  {
    id: 'prod-1-2-4-mp3',
    name: '祢成就救恩 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-1-2-4',
    albumId: 'album-1-2',
    seriesId: 'worship-praise',
  },

  // 靈修音樂系列 - 《祢愛環繞》ACM靈修音樂專輯2
  // 祢愛環繞
  {
    id: 'prod-2-1-1-pdf',
    name: '祢愛環繞 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-2-1-1',
    albumId: 'album-2-1',
    seriesId: 'spiritual-music',
  },
  {
    id: 'prod-2-1-1-mp3',
    name: '祢愛環繞 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-2-1-1',
    albumId: 'album-2-1',
    seriesId: 'spiritual-music',
  },

  // 儘管我尚未看見
  {
    id: 'prod-2-1-6-pdf',
    name: '儘管我尚未看見 - 歌譜 PDF',
    description: 'PDF 格式歌譜，高清列印版本',
    price: 20,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-2-1-6',
    albumId: 'album-2-1',
    seriesId: 'spiritual-music',
  },
  {
    id: 'prod-2-1-6-mp3',
    name: '儘管我尚未看見 - 音樂下載',
    description: 'MP3 格式音樂檔案，即時下載享受',
    price: 10,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-2-1-6',
    albumId: 'album-2-1',
    seriesId: 'spiritual-music',
  },

  // 兒歌系列 - 祈禱仔唱詩歌7
  // 耶穌愛我
  {
    id: 'prod-3-1-1-pdf',
    name: '耶穌愛我 - 歌譜 PDF',
    description: 'PDF 格式歌譜，兒童版本',
    price: 15,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-3-1-1',
    albumId: 'album-3-1',
    seriesId: 'childrens-songs',
  },
  {
    id: 'prod-3-1-1-mp3',
    name: '耶穌愛我 - 音樂下載',
    description: 'MP3 格式音樂檔案，兒童版本',
    price: 8,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-3-1-1',
    albumId: 'album-3-1',
    seriesId: 'childrens-songs',
  },

  // 小小羊
  {
    id: 'prod-3-1-2-pdf',
    name: '小小羊 - 歌譜 PDF',
    description: 'PDF 格式歌譜，兒童版本',
    price: 15,
    type: 'pdf',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    songId: 'song-3-1-2',
    albumId: 'album-3-1',
    seriesId: 'childrens-songs',
  },
  {
    id: 'prod-3-1-2-mp3',
    name: '小小羊 - 音樂下載',
    description: 'MP3 格式音樂檔案，兒童版本',
    price: 8,
    type: 'mp3',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    songId: 'song-3-1-2',
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

export function getProductsByType(type: 'pdf' | 'mp3'): Product[] {
  return products.filter(p => p.type === type);
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
