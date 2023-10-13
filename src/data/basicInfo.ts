interface basicInfo {
  name: string;
  campus: string;
  class: string;
  gender: string;
  job: string;
  mentoring: string;
  introduce: string;
  mbti: string;
  history: string;
  field: string;
  link: string;
  url: string;
  profile: string;
  like: string[];
  [key: string]: string | string[];
}

export default basicInfo;
