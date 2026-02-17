export interface Device {
  id: string;
  name: string;
  description?: string;
  flavor: string;
  type?: string;
  peripheral?: boolean;
  quotas?: {
    cores?: number;
  };
}

export interface DeviceConfig {
  firmware?: string;
  ram?: number;
  uploadedFile?: File | null;
}
