export interface IUser {
  user_id: number;
  user_first_name: string;
  user_last_name: string;
  user_email: string;
  user_gender: string;
  user_ip_address: string;
  user_statistic_total_clicks: string;
  user_statistic_total_page_views: string;
}

export interface IStatstic {
  user_statistic_date: string;
  user_statistic_page_views: number | null;
  user_statistic_clicks: number | null;
  user_statistic_id?: number;
}

export interface IRange {
  startDate: string;
  endDate: string;
}

export type LinkType = {
  title: string;
  url: string;
  name?: string;
};

export type TableFieldType = {
  title: string;
  value: string;
};
export type CardType = { imgSrc: string; title: string; text: string };
