export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  readTime: string;
  kicker: string;
}

export interface SupplyChainNode {
  id: string;
  name: string;
  region: 'Bắc Bộ' | 'Miền Trung' | 'Nam Bộ';
  coordinates: { x: number; y: number }; // percentage on map
  majorCorporations: string[];
  totalFdi: string; // e.g. "$18.2 tỷ USD"
  keyIndustries: string[];
  workforce: string;
  strategicAdvantage: string;
}

export interface SemiconductorTier {
  id: string;
  stepNumber: string;
  name: string;
  vietnameseTitle: string;
  globalMarketValue: string;
  profitMargin: string;
  vietnamPresence: string;
  keyPlayersInVietnam: string[];
  statusInVietnam: 'Mạnh mẽ' | 'Đang bứt phá' | 'Thách thức cao' | 'Tiềm năng';
  description: string;
  keyChallenge: string;
}

export interface EconomicForecastScenario {
  id: string;
  name: string;
  tagline: string;
  gdpGrowthRate: string;
  gdpPerCapita2035: string;
  highTechExportRatio: string;
  localSupplyChainRatio: string;
  primaryCondition: string;
  riskFactor: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  englishTerm?: string;
  definition: string;
  economicContext: string;
}

export interface Footnote {
  id: number;
  source: string;
  title: string;
  year: string;
  url?: string;
}
