export const SECTION_IDS = {
  HERO: 'hero',
  ANNOUNCEMENT: 'announcement',
  ABOUT: 'about',
  MENU: 'menu',
  ACCESS: 'access',
} as const;

export const NAV_ITEMS = [
  { label: 'Top', id: SECTION_IDS.HERO },
  { label: 'Announcement', id: SECTION_IDS.ANNOUNCEMENT },
  { label: 'About', id: SECTION_IDS.ABOUT },
  { label: 'Menu', id: SECTION_IDS.MENU },
  { label: 'Access', id: SECTION_IDS.ACCESS },
] as const;
