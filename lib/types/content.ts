import { ExperienceEntry } from '@/lib/types/experience-entry';
import { ProjectFilter } from '@/lib/types/project-filter';
import { SkillGroup } from '@/lib/types/skill-group';
import { SectionId } from '@/lib/types/section-id';
import { Principle } from '@/lib/types/principle';
import { Project } from '@/lib/types/project';
import { Metric } from '@/lib/types/metric';
import { Fact } from '@/lib/types/fact';

export interface Content {
  nav: Record<SectionId, string>;
  hero: {
    role: string;
    firstName: string;
    lastName: string;
    location: string;
    pitch: string;
    ctaResume: string;
    ctaContact: string;
  };
  metrics: Array<Metric>;
  about: {
    label: string;
    statement: string;
    paragraphs: string[];
    facts: Array<Fact>;
  };
  how: {
    label: string;
    lead: string;
    principles: Array<Principle>;
  };
  stack: {
    label: string;
    lead: string;
    groups: Array<SkillGroup>;
  };
  experience: {
    label: string;
    lead: string;
    entries: Array<ExperienceEntry>;
  };
  projects: {
    label: string;
    lead: string;
    filters: Record<ProjectFilter, string>;
    items: Array<Project>;
  };
  education: {
    label: string;
    degreeKey: string;
    degree: string;
    school: string;
    languagesKey: string;
    languages: Array<string>;
    hobbiesKey: string;
    hobbies: string;
  };
  contact: {
    label: string;
    headline: string;
    sub: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    resume: string;
  };
  footer: {
    built: string;
    stack: string;
  };
}
