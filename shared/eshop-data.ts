// Eshop Demo Data Structure

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  type: 'physical' | 'pdf' | 'mmo';
  image: string;
  category: string;
}

export interface Album {
  id: string;
  name: string;
  description: string;
  seriesId: string;
  image: string;
  products: Product[];
}

export interface Series {
  id: string;
  name: string;
  description: string;
  image: string;
  albums: Album[];
}

// Demo Data
export const DEMO_SERIES: Series[] = [
  {
    id: 'series-1',
    name: '時空漫遊',
    description: '科幻冒險主題系列，探索時間與空間的奧秘',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
    albums: [
      {
        id: 'album-1-1',
        name: '《星際旅人的日記》',
        description: '跨越星系的冒險故事',
        seriesId: 'series-1',
        image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&q=80',
        products: [
          {
            id: 'prod-1-1-1',
            name: '精裝版本（含簽名卡）',
            description: '限量精裝版，包含作者簽名卡與特殊書籤',
            price: 299,
            type: 'physical',
            image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&q=80',
            category: '實體商品',
          },
          {
            id: 'prod-1-1-2',
            name: '豪華禮盒套裝',
            description: '包含精裝書、周邊海報、貼紙與限量明信片',
            price: 399,
            type: 'physical',
            image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80',
            category: '實體商品',
          },
          {
            id: 'prod-1-1-3',
            name: '標準版本',
            description: '平裝版，經濟實惠的選擇',
            price: 199,
            type: 'physical',
            image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&q=80',
            category: '實體商品',
          },
          {
            id: 'prod-1-1-4',
            name: '完整電子書（高清版）',
            description: '高清 PDF 格式，支持所有設備閱讀',
            price: 99,
            type: 'pdf',
            image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&q=80',
            category: 'PDF 商品',
          },
          {
            id: 'prod-1-1-5',
            name: '插圖合集',
            description: '全書精選插圖高清版本',
            price: 49,
            type: 'pdf',
            image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&q=80',
            category: 'PDF 商品',
          },
          {
            id: 'prod-1-1-6',
            name: '虛擬世界通行證（30 天）',
            description: '進入星際旅人虛擬世界，探索隱藏場景',
            price: 79,
            type: 'mmo',
            image: 'https://images.unsplash.com/photo-1538481143235-5d630a5a7be0?w=400&q=80',
            category: 'MMO 商品',
          },
        ],
      },
      {
        id: 'album-1-2',
        name: '《未來城市的秘密》',
        description: '高科技城市中的謎團與冒險',
        seriesId: 'series-1',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
        products: [
          {
            id: 'prod-1-2-1',
            name: '精裝版本',
            description: '精裝版，含特殊封面設計',
            price: 279,
            type: 'physical',
            image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&q=80',
            category: '實體商品',
          },
          {
            id: 'prod-1-2-2',
            name: '電子書版本',
            description: '高清 PDF，即時下載',
            price: 89,
            type: 'pdf',
            image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&q=80',
            category: 'PDF 商品',
          },
          {
            id: 'prod-1-2-3',
            name: '角色皮膚包',
            description: '遊戲內專屬角色皮膚與特效',
            price: 59,
            type: 'mmo',
            image: 'https://images.unsplash.com/photo-1538481143235-5d630a5a7be0?w=400&q=80',
            category: 'MMO 商品',
          },
        ],
      },
    ],
  },
  {
    id: 'series-2',
    name: '靈魂樂章',
    description: '音樂藝術主題系列，感受靈魂的共鳴',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
    albums: [
      {
        id: 'album-2-1',
        name: '《心弦共鳴》',
        description: '音樂與情感的完美結合',
        seriesId: 'series-2',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
        products: [
          {
            id: 'prod-2-1-1',
            name: '黑膠唱片版',
            description: '高保真黑膠唱片，音質卓越',
            price: 349,
            type: 'physical',
            image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&q=80',
            category: '實體商品',
          },
          {
            id: 'prod-2-1-2',
            name: '樂譜集',
            description: '完整樂譜 PDF，適合音樂愛好者',
            price: 79,
            type: 'pdf',
            image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&q=80',
            category: 'PDF 商品',
          },
        ],
      },
    ],
  },
  {
    id: 'series-3',
    name: '光影詩篇',
    description: '攝影與視覺藝術主題系列，光影的詩意表達',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
    albums: [
      {
        id: 'album-3-1',
        name: '《晨曦印象》',
        description: '清晨光影的藝術攝影集',
        seriesId: 'series-3',
        image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80',
        products: [
          {
            id: 'prod-3-1-1',
            name: '精裝攝影集',
            description: '高質量印刷，100 頁精選攝影作品',
            price: 399,
            type: 'physical',
            image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&q=80',
            category: '實體商品',
          },
          {
            id: 'prod-3-1-2',
            name: '高清圖片集 PDF',
            description: '4K 高清圖片，適合設計師使用',
            price: 129,
            type: 'pdf',
            image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&q=80',
            category: 'PDF 商品',
          },
        ],
      },
    ],
  },
];
