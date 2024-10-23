// Enum for change status
export enum ChangeStatus {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
  NO_CHANGE = "NO_CHANGE",
}

// Type for count metrics
export interface CountMetrics {
  totalCount: number;
  totalCountLastNDays: number;
  totalCountLastNDaysBeforeThat: number;
  changeFromLastNDaysBeforeThat: ChangeStatus;
  changeNumber: number;
}

// Type for individual stat category
export interface StatCategory {
  totalTasks: number;
  percentageComposition: number;
}

// Type for stats categories
export interface Stats {
  GENERAL: StatCategory;
  EVENT: StatCategory;
  INVENTORY: StatCategory;
  BRAND: StatCategory;
}

// Type for the main data structure
export interface TaskStats {
  totalTasks: CountMetrics;
  openTasks: CountMetrics;
  completedTasks: CountMetrics;
  slaBreachedTasks: CountMetrics;
  stats: Stats;
}

// Type for the complete response
export interface TaskStatsResponse {
  message: string;
  data: TaskStats;
}
