export interface Apod {
  copyright?: string
  date: string
  explanation: string
  hdurl?: string
  media_type: 'image' | 'video'
  service_version: string
  title: string
  url: string
}

export interface Neo {
  links: NeoLinks
  element_count: number
  near_earth_objects: {[key: string]: NearEarthObject[]}
}

export interface CmeEvent {
  activityID: string
  catalog: string
  startTime: string
  instruments: Instrument[]
  sourceLocation: string
  activeRegionNum: number | null
  note: string
  submissionTime: string
  versionId: number
  link: string
  cmeAnalyses: CmeAnalysis[]
  linkedEvents: LinkedEvent[] | null
  sentNotifications: SentNotification[] | null
}

export interface Instrument {
  displayName: string
}

export interface CmeAnalysis {
  isMostAccurate: boolean
  time21_5: string
  latitude: number | null
  longitude: number | null
  halfAngle: number | null
  speed: number | null
  type: 'C' | 'S' | 'O' | string
  featureCode: 'LE' | 'SH' | string
  imageType: string
  measurementTechnique: string
  note: string
  levelOfData: number
  tilt: number | null
  minorHalfWidth: number | null
  speedMeasuredAtHeight: number | null
  submissionTime: string
  link: string
  enlilList: EnlilRun[]
}

export interface EnlilRun {
  modelCompletionTime: string
  au: number
  estimatedShockArrivalTime: string | null
  estimatedDuration: number | null
  rmin_re: number | null
  kp_18: number | null
  kp_90: number | null
  kp_135: number | null
  kp_180: number | null
  isEarthGB: boolean
  isEarthMinorImpact: boolean
  link: string
  impactList: EnlilImpact[] | null
  cmeIDs: string[]
}

export interface EnlilImpact {
  isGlancingBlow: boolean
  isMinorImpact: boolean
  location: string
  arrivalTime: string
}

export interface LinkedEvent {
  activityID: string
}

export interface SentNotification {
  messageID: string
  messageIssueTime: string
  messageURL: string
}

export interface NeoLinks {
  next: string
  previous: string
  self: string
}

export interface NearEarthObject {
  links: NearEarthObjectLinks
  id: string
  neo_reference_id: string
  name: string
  nasa_jpl_url: string
  absolute_magnitude_h: number
  estimated_diameter: EstimatedDiameter
  is_potentially_hazardous_asteroid: boolean
  close_approach_data: CloseApproachDatum[]
  is_sentry_object: boolean
}

export interface CloseApproachDatum {
  close_approach_date: Date
  close_approach_date_full: string
  epoch_date_close_approach: number
  relative_velocity: RelativeVelocity
  miss_distance: MissDistance
  orbiting_body: OrbitingBody
}

export interface MissDistance {
  astronomical: string
  lunar: string
  kilometers: string
  miles: string
}

export enum OrbitingBody {
  Earth = 'Earth',
}

export interface RelativeVelocity {
  kilometers_per_second: string
  kilometers_per_hour: string
  miles_per_hour: string
}

export interface EstimatedDiameter {
  kilometers: Feet
  meters: Feet
  miles: Feet
  feet: Feet
}

export interface Feet {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

export interface NearEarthObjectLinks {
  self: string
}
