export interface Activity {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ActivityResponse {
  activities: Activity[];
  totalCount: number;
}

export interface MyActivitiesOfMonth {
  date: string;
  reservations: {
    completed: number;
    confirmed: number;
    pending: number;
  };
}

export interface MyActivityList {
  cursorId: number;
  totalCount: number;
  activities: Activity[];
}
