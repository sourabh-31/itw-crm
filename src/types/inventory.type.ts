// Type for Decks associated with an event
export type Deck = {
  id: number;
  url: string;
  name: string;
  size: number;
  version: number;
  firstUploadedOn: string;
  uploadedBy: string;
  uploadedOn: string;
  uploaderUserId: number;
};

// Type for Brand Statistics within an event
export type BrandStatistics = {
  assigned: number;
  cold: number;
  hot: number;
  inactive: number;
  warm: number;
  won: number;
};

// Type for individual Event within the Events array
export type Event = {
  actionRequired: boolean;
  brandStatistics: BrandStatistics;
  closeByDate: string;
  deckUploaded: boolean;
  decks: Deck[];
  description: string;
  eiId: number;
  endDate: string;
  id: number;
  inventoryId: number;
  location: string;
  name: string;
  notes: string;
  propertyCount: number;
  salesTarget: string;
  startDate: string;
  type: string;
};

// Type for Inventory Item (including event count and events array)
export type InventoryOrAssignedItem = {
  id: number;
  name: string;
  image: string;
  eventCount: number;
  events: Event[];
};

export type InventoryOrAssignedData = {
  inventories: InventoryOrAssignedItem[];
};

export type InventoryOrAssignedResponse = {
  data: InventoryOrAssignedData;
  pageNo: number;
  totalNoOfEntries: number;
  totalPages: number;
};
