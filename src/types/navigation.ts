import { SECTION_IDS } from '@/constants/navigation';

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export interface NavItem {
  label: string;
  id: SectionId;
}
