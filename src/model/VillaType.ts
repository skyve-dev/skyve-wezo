interface CapacityDetail {
    count?: number;
    description?: string; // For ranges like "10-20 people" or notes
}

interface VillaCapacity {
    daytime?: CapacityDetail | number;
    sleeper?: CapacityDetail | number;
    visitors?: CapacityDetail | number; // For overall visitor count if specified differently, e.g. villa-39
    notes?: string; // General notes about capacity, e.g., "increaseable", "possibly more if the tenant provides extra sleeping supplies"
}

interface PoolDimension {
    lengthM?: number;
    widthM?: number;
    areaSqM?: number;
    description: string; // Original text like "4x8m", "8 by 4 meters"
}

interface PoolDepth {
    description: string; // Original text like "120 cm", "Gradual up to 180 cm"
    minCm?: number;
    maxCm?: number;
    fixedCm?: number;
    isGradual?: boolean;
    notes?: string; // e.g. "Children's section 70 cm"
}

interface PoolInfo {
    size?: PoolDimension;
    depth?: PoolDepth;
    heaterAvailable?: boolean;
    coolerAvailable?: boolean;
    type?: string; // e.g., "adult pool + kiddie pool", "kiddie pool only", "public", "private"
    notes?: string[];
}

interface PriceItem {
    amount: number;
    currency: string;
    notes?: string;
    perDuration?: string; // e.g., "for two nights"
}

interface VillaRates {
    weekend?: PriceItem;
    weekdays?: PriceItem;
    halfDay?: PriceItem; // "Text Day", "Sleepless", "Without sleeping"
    partyAndWedding?: PriceItem;
    // For villa-24 style pricing
    roomWithPrivatePoolWeekend?: PriceItem;
    roomWithoutPrivatePoolWeekend?: PriceItem;
    roomWithPrivatePoolWeekdays?: PriceItem;
    roomWithoutPrivatePoolWeekdays?: PriceItem;
    withoutSleepingRoomWithPrivatePool?: PriceItem;
    withoutSleepingRoomWithoutPool?: PriceItem;
    holidays?: PriceItem; // for villa-42
    overnightStay?: PriceItem; // for villa-51 (مبيت)
    [key: string]: PriceItem | undefined;
}

interface CheckInOutDetail {
    timeRange: string; // e.g., "from 3 pm to 12 pm", "3pm to 12pm second day"
    notes?: string;
}

interface CheckInPolicy {
    fullDay?: CheckInOutDetail | string;
    halfDay?: CheckInOutDetail | string;
    checkInTime?: string; // Specific if mentioned separately
    checkOutTime?: string; // Specific if mentioned separately
    notes?: string[];
}

interface InsuranceInfo {
    amount?: number;
    currency?: string;
    timing?: string; // e.g., "upon entry", "delivered upon entry and received upon exit"
    required: boolean;
    notes?: string;
}

interface KitchenInfo {
    description?: string; // e.g., "Indoor kitchen + outdoor kitchen"
    utensils: string[];
}

interface RoomDetails {
    count: number | string; // string for "X + maid's room"
    notes?: string;
}

interface SeatingArea {
    name?: string; // "Board", "Council", "Hall"
    capacity: number;
    count?: number; // e.g., if "3 halls"
    notes?: string;
}

interface WifiInfo {
    available: boolean;
    notes?: string; // e.g., "in certain areas"
}

export interface VillaType {
    id: string;
    title?: string;
    contactPhone?: string;
    capacity: VillaCapacity;
    allowedVisitorTypes?: string[];
    pools?: PoolInfo[];
    seatingAreas?: SeatingArea[];
    bedrooms: RoomDetails;
    bathrooms: RoomDetails; // Derived from "number of pigeons"
    familyArrangement?: string; // For "Family number" details
    kitchen?: KitchenInfo;
    otherFacilities?: string[];
    location?: string;
    wifi?: WifiInfo;
    rates: VillaRates;
    insurance?: InsuranceInfo;
    checkInPolicy?: CheckInPolicy;
    additionalServices?: string[]; // e.g., "Film projector (Datashu) for a fee of 100 AED"
    generalNotes?: string[];
    licensing?: string;
    bookingConditions?: string[];
    resortDetails?: {
        overallCapacity?: CapacityDetail | number;
        numberOfUnits?: number;
        unitDescription?: string;
        amenitiesPerUnit?: string[];
    };
    privacy?: string; // e.g. "Privacy rate is 70%"
}