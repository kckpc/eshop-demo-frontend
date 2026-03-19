/**
 * Eshop 示範數據 - 基於 HKACM 音樂商店真實結構
 * 
 * 商品結構：
 * 系列 → 專輯 → 商品
 *   ├── 實體商品（Physical）
 *   │   ├── CD/下載卡版本（整張專輯）
 *   │   ├── 歌譜書/套裝（整張專輯的印刷歌譜集）
 *   │   ├── 周邊產品（T-shirt、帽子、襪子等）
 *   │   └── 合集歌書/USB/下載卡
 *   └── 數碼商品（Digital）
 *       ├── PDF 歌譜（單首歌曲）
 *       ├── MP3 音檔（單首歌曲）
 *       └── MMO 音檔（單首歌曲）
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
  type: 
    | 'physical-cd' 
    | 'physical-score' 
    | 'physical-merchandise' 
    | 'physical-collection'
    | 'digital-pdf' 
    | 'digital-mp3' 
    | 'digital-mmo';
  category: 'physical' | 'digital';
  subcategory?: 'cd' | 'score' | 'merchandise' | 'collection' | 'pdf' | 'mp3' | 'mmo';
  image: string;
  songId?: string;
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
}

// 系列數據
export const series: Series[] = [
  {
    id: 'series-spiritual',
    name: 'ACM靈修音樂',
    description: '靈修音樂專輯系列，帶來心靈的平安與安慰',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
  },
  {
    id: 'series-children',
    name: '齊唱兒歌',
    description: '兒童敬拜讚美歌曲，適合全家一起享受',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
  },
  {
    id: 'series-worship',
    name: '齊唱敬拜讚美',
    description: '敬拜讚美詩歌合集，帶領眾人進入敬拜',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
  },
  {
    id: 'series-anniversary',
    name: 'ACM40週年專輯',
    description: '慶祝40週年的特別紀念專輯',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
  },
];

// 專輯數據
export const albums: Album[] = [
  // Series 1: ACM靈修音樂
  {
    id: 'album-spiritual-1',
    name: '祢愛環繞 ACM靈修音樂專輯 2',
    description: '充滿愛與恩典的靈修音樂專輯',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    seriesId: 'series-spiritual',
    year: 2025,
    songs: [
      { id: 'song-s1-1', name: '祢是誰', composer: '陳澔峰', lyricist: '盧永亨' },
      { id: 'song-s1-2', name: '主，祢知道', composer: 'Ode Wong', lyricist: 'Glory Cheung @ SEMM' },
      { id: 'song-s1-3', name: '只因愛', composer: '古丹青', lyricist: '凌東成' },
    ],
  },
  {
    id: 'album-spiritual-2',
    name: '心靈歸家',
    description: '尋找心靈的歸宿與平安',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    seriesId: 'series-spiritual',
    year: 2021,
    songs: [
      { id: 'song-s2-1', name: '無可相比', composer: '何威廉', lyricist: '古昔青' },
      { id: 'song-s2-2', name: '神是我生住處者', composer: '何威廉', lyricist: '蔡如紅' },
      { id: 'song-s2-3', name: '讓主宰引', composer: '陳頌歆', lyricist: '張家駿' },
    ],
  },
  // Series 2: 齊唱兒歌
  {
    id: 'album-children-1',
    name: '齊唱兒歌4小小敬拜者（大衛篇）',
    description: '以大衛的故事為主題的兒童敬拜歌曲',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
    seriesId: 'series-children',
    year: 2015,
    songs: [
      { id: 'song-c1-1', name: '蕎野向和應', composer: '古昔青', lyricist: '張家源' },
      { id: 'song-c1-2', name: '貼近祢心意', composer: '何威廉', lyricist: '蔣慧蘭' },
      { id: 'song-c1-3', name: '小小敬拜者', composer: '李偉倫', lyricist: '黃維棣' },
    ],
  },
  {
    id: 'album-children-2',
    name: '齊唱兒歌5－我是主的小門徒',
    description: '教導兒童成為主的小門徒',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    seriesId: 'series-children',
    year: 2018,
    songs: [
      { id: 'song-c2-1', name: '真了不起', composer: '何威廉', lyricist: '李穎茵' },
      { id: 'song-c2-2', name: '我是主的小門徒', composer: '古丹青', lyricist: '凌東成' },
      { id: 'song-c2-3', name: '跟隨主的腳蹤', composer: '李偉倫', lyricist: '黃維棣' },
    ],
  },
  // Series 3: 齊唱敬拜讚美
  {
    id: 'album-worship-1',
    name: '齊唱敬拜讚美16 The Way',
    description: '敬拜讚美新專輯，帶領眾人進入敬拜',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    seriesId: 'series-worship',
    year: 2024,
    songs: [
      { id: 'song-w1-1', name: '日光之上', composer: 'Victor Kong', lyricist: '三香' },
      { id: 'song-w1-2', name: 'The Way', composer: '何威廉', lyricist: '李穎茵' },
      { id: 'song-w1-3', name: '真理的光', composer: '陳澔峰', lyricist: '盧永亨' },
    ],
  },
  {
    id: 'album-worship-2',
    name: '齊唱敬拜讚美15 傳承使命',
    description: '傳承使命的敬拜讚美詩歌',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
    seriesId: 'series-worship',
    year: 2023,
    songs: [
      { id: 'song-w2-1', name: '傳承使命', composer: '古丹青', lyricist: '凌東成' },
      { id: 'song-w2-2', name: '代代相傳', composer: '何威廉', lyricist: '李穎茵' },
      { id: 'song-w2-3', name: '永恆的呼召', composer: '李偉倫', lyricist: '黃維棣' },
    ],
  },
  // Series 4: ACM40週年專輯
  {
    id: 'album-anniversary-1',
    name: 'Rebirth',
    description: '40週年紀念專輯，重生與新生命',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    seriesId: 'series-anniversary',
    year: 2024,
    songs: [
      { id: 'song-a1-1', name: 'Rebirth', composer: '李偉倫', lyricist: '黃維棣' },
      { id: 'song-a1-2', name: '新的開始', composer: '何威廉', lyricist: '侯碧珮' },
      { id: 'song-a1-3', name: '40年的見證', composer: '古丹青', lyricist: '凌東成' },
    ],
  },
];

// 商品數據
export const products: Product[] = [];

// 為每個專輯生成商品
albums.forEach((album) => {
  // ===== 實體商品 =====
  
  // 1. CD/下載卡版本
  products.push({
    id: `prod-${album.id}-cd`,
    name: `${album.name} - CD版本`,
    description: `精美CD版本，高清音質，附贈歌詞本`,
    price: 150,
    type: 'physical-cd',
    category: 'physical',
    subcategory: 'cd',
    image: album.image,
    albumId: album.id,
    seriesId: album.seriesId,
  });

  // 2. 歌譜書/套裝
  products.push({
    id: `prod-${album.id}-score`,
    name: `${album.name} - 歌譜書`,
    description: `印刷精美的歌譜書，包含完整歌詞和樂譜`,
    price: 120,
    type: 'physical-score',
    category: 'physical',
    subcategory: 'score',
    image: album.image,
    albumId: album.id,
    seriesId: album.seriesId,
  });

  // 3. 周邊產品（每個專輯一件）
  products.push({
    id: `prod-${album.id}-merch`,
    name: `${album.name} - 刺繡T-shirt`,
    description: `高質量刺繡T-shirt，舒適透氣，展示您的信仰`,
    price: 225,
    type: 'physical-merchandise',
    category: 'physical',
    subcategory: 'merchandise',
    image: album.image,
    albumId: album.id,
    seriesId: album.seriesId,
  });

  // 4. 合集歌書/USB/下載卡
  products.push({
    id: `prod-${album.id}-collection`,
    name: `${album.name} - USB下載卡`,
    description: `包含完整專輯的USB下載卡，即插即用`,
    price: 300,
    type: 'physical-collection',
    category: 'physical',
    subcategory: 'collection',
    image: album.image,
    albumId: album.id,
    seriesId: album.seriesId,
  });

  // ===== 數碼商品 =====
  // 為每首歌曲生成 PDF、MP3、MMO
  album.songs.forEach((song) => {
    // PDF 歌譜
    products.push({
      id: `prod-${song.id}-pdf`,
      name: `${song.name} - 歌譜 PDF`,
      description: `PDF 格式歌譜，高清列印版本`,
      price: 20,
      type: 'digital-pdf',
      category: 'digital',
      subcategory: 'pdf',
      image: album.image,
      songId: song.id,
      albumId: album.id,
      seriesId: album.seriesId,
    });

    // MP3 音檔
    products.push({
      id: `prod-${song.id}-mp3`,
      name: `${song.name} - 音樂下載`,
      description: `MP3 格式音樂檔案，即時下載享受`,
      price: 10,
      type: 'digital-mp3',
      category: 'digital',
      subcategory: 'mp3',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
      songId: song.id,
      albumId: album.id,
      seriesId: album.seriesId,
    });

    // MMO 虛擬商品
    products.push({
      id: `prod-${song.id}-mmo`,
      name: `${song.name} - 虛擬音樂卡`,
      description: `虛擬音樂卡，可用於音樂應用程式`,
      price: 15,
      type: 'digital-mmo',
      category: 'digital',
      subcategory: 'mmo',
      image: album.image,
      songId: song.id,
      albumId: album.id,
      seriesId: album.seriesId,
    });
  });
});
