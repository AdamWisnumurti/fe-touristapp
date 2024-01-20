export interface ITourist {
  id: string;
  createdat: string;
  tourist_email: string;
  tourist_name: string;
  tourist_location: string;
  tourist_profilepicture: string;
}

export interface ITouristEdit {
  tourist_email: string;
  tourist_name: string;
  tourist_location: string;
}
