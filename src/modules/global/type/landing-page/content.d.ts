// href / url Refer to url location
// src refer to source image

export interface IHeroBanner {
  title: string;
  text: string;
  src: string;
  href: string;
}

export interface IKomite {
  name: string;
  position: string;
  src: string;
}

export interface IKomisioner extends IKomite {
  url?: '#';
}

export interface IPengolaanDana {
  title: string;
  content: string[];
  contentExt?: string;
  src: string;
}

export interface IFilosofi {
  title: string;
  text: string;
  src: string;
}

export interface ISpesifikasi {
  title: string;
  id: string;
  src: string;
}

export interface IFilterContent {
  search: string;
  jenis: string;
  minRange: number;
  maxRange: number;
  developer: string;
}

export interface IDetailPengembang {
  id: string;
  name: string;
  src: string;
  contact: string;
}

export interface IListContent {
  id: string;
  name: string;
  address?: string;
  src: string;
  city: string;
  province: string;
  kt: number;
  minLt: number;
  maxLt: number;
  minLb: number;
  maxLb: number;
  minHarga: number;
  maxHarga: number;
  jenis: string;
  status: string;
  whistlist: boolean;
  developer: Partial<IDetailPengembang>;
}

export interface IDetailSpesifikasi {
  type: string;
  luasTanah: number;
  luasBangunan: number;
  kamarTidur: number;
  kamarMandi: number;
  ruangDapur: number;
  ruangTamu: number;
  carport: number;
  garasi: number;
  atap: string;
  dinding: string;
  lantai: string;
  pondasi: string;
  description: string;
}

export interface ILokasi {
  address: string;
  lat: string;
  long: string;
  lat: string;
}

export interface IDetailRumah {
  id: string;
  name: string;
  address: string;
  city: string;
  available: number;
  maxRange: number;
  minRange: number;
  developer: IDetailPengembang;
  types: string[];
  detail: IDetailSpesifikasi;
}

export interface IPeraturan {
  text: string;
  title: string;
}

export interface IParentFAQ {
  id: string;
  title: string;
  href: string;
}

export interface IListFAQ extends IParentFAQ {
  listFAQ: {
    title: string;
    text: string;
  };
}

export interface IKategoriFAQ {
  id: string;
}
export interface ICatHelpInformation {
  id: string;
  title: string;
  src: string;
  href: string;
}

export type Tags = 'Pers' | 'Kegiatan' | 'Artikel' | 'Media';

export interface IThumbnail {
  id: string;
  title: string;
  text: string;
  src: string;
  tags: string[];
  href: string;
  date: string;
  userAdmin: string;
  description: string;
  facebook: string;
  twitter: string;
  whatsapp: string;
  telegram: string;
  imgRelated: string;
  titleRelated: string;
  infoRelated: string;
}

export interface IBerita {
  title: string;
  text: string;
  src: string;
}

export interface IProduct {
  id: string;
  type: string;
  desc: string;
  docs: string[];
  benefit: string[];
  terms: string[];
  steps: string[];
}

export interface IPengajuanPembayaran {
  title: string;
  text: string;
}

export interface ILisStepReturnSaving {
  id: string;
  title: string;
  text: string;
}
