export const SHOP_INFO = {
  name: 'カットハウスムーン',
  englishName: 'CUT HOUSE MOON',
  address: '長崎県佐世保市小野町55-36',
  tel: '0956-47-8861',
  businessHours: '9:00 - 19:00',
  holiday: '第一日曜日・毎週月曜日',
  description: {
    line1: '佐世保にある床屋さんです。',
    line2: '夫婦で元気に営業しております!',
    line3: 'お好みのヘアスタイルに仕上げます!!',
  },
  notice: '※施術中はマスクを外していただきます。ご理解のほど、よろしくお願いいたします。',
} as const;

export const SHOP_DETAILS = [
  { label: '店名', value: SHOP_INFO.name },
  { label: '住所', value: SHOP_INFO.address },
  { label: '電話番号', value: SHOP_INFO.tel },
  { label: '営業時間', value: SHOP_INFO.businessHours },
  { label: '定休日', value: SHOP_INFO.holiday },
] as const;
