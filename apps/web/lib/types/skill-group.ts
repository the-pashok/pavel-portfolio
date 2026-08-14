/** A technology tile. `logo` is a simple-icons slug; omit it to render a monogram. */
export interface SkillItem {
  label: string;
  logo?: string;
}

export interface SkillGroup {
  id: 'frontend' | 'backend' | 'testing' | 'tools';
  label: string;
  items: SkillItem[];
}
