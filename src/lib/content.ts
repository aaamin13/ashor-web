export type Lang = "en" | "bn";
export const LANGS: Lang[] = ["en", "bn"];
export const isLang = (l: string): l is Lang => l === "en" || l === "bn";

export type T = Record<Lang, string>;

export const SOCIAL = { facebook: "https://www.facebook.com/ashoratx/" };

export const ui = {
  nav: {
    home: { en: "Home", bn: "হোম" },
    seasons: { en: "Seasons", bn: "সিজন" },
    artists: { en: "Artists", bn: "শিল্পী" },
    videos: { en: "Videos", bn: "ভিডিও" },
    about: { en: "About", bn: "আমাদের কথা" },
  },
  tagline: {
    en: "Bangla music, live, in Austin.",
    bn: "অস্টিনে বাংলা গানের আসর।",
  },
  mission: {
    en: "Ashor is an Austin, Texas based music platform promoting Bangla music of every genre through live performances and theme-based shows, featuring mostly — but not only — Austin's own musicians.",
    bn: "আসর অস্টিন, টেক্সাসভিত্তিক একটি সংগীত প্ল্যাটফর্ম। আমরা লাইভ পরিবেশনা ও থিমভিত্তিক অনুষ্ঠানের মাধ্যমে সব ধারার বাংলা গানকে তুলে ধরি — প্রধানত অস্টিনের শিল্পীদের নিয়ে।",
  },
  whatWeDo: { en: "What we do", bn: "আমরা যা করি" },
  pillars: [
    {
      t: { en: "Bangla music of every genre", bn: "সব ধারার বাংলা গান" },
      d: {
        en: "Folk, Rabindrasangeet, Nazrulgeeti, adhunik, band and more — all in one evening.",
        bn: "লোকগান, রবীন্দ্রসংগীত, নজরুলগীতি, আধুনিক, ব্যান্ড — এক সন্ধ্যায় সবকিছু।",
      },
    },
    {
      t: { en: "Live performances", bn: "লাইভ পরিবেশনা" },
      d: {
        en: "Two hours of live music with a script, sometimes a sing-through storyline, and visuals for every song.",
        bn: "দুই ঘণ্টার লাইভ গান — স্ক্রিপ্ট, কখনো গল্পের মতো সাজানো, প্রতিটি গানের সাথে ভিজ্যুয়াল।",
      },
    },
    {
      t: { en: "Theme-based seasons", bn: "থিমভিত্তিক সিজন" },
      d: {
        en: "Every show is a “season” with its own theme, built around Austin's musicians.",
        bn: "প্রতিটি অনুষ্ঠান একেকটি “সিজন” — নিজস্ব থিম, অস্টিনের শিল্পীদের নিয়ে সাজানো।",
      },
    },
  ],
  viewSeason: { en: "View season", bn: "সিজন দেখুন" },
  allSeasons: { en: "All seasons", bn: "সব সিজন" },
  upcoming: { en: "Upcoming", bn: "আসছে" },
  past: { en: "Past season", bn: "অতীত সিজন" },
  seasonsIntro: {
    en: "Each Ashor show is a season — a distinct theme, a two-hour journey through Bangla songs.",
    bn: "আসরের প্রতিটি অনুষ্ঠান একেকটি সিজন — আলাদা থিম, দুই ঘণ্টার বাংলা গানের যাত্রা।",
  },
  gallery: { en: "Videos & photos", bn: "ভিডিও ও ছবি" },
  articles: { en: "Articles", bn: "লেখা" },
  feedback: { en: "Audience feedback", bn: "দর্শকের মতামত" },
  comingSoon: { en: "Coming soon.", bn: "শীঘ্রই আসছে।" },
  artistsTitle: { en: "Ashor Endorsed Artists", bn: "আসর-অনুমোদিত শিল্পী" },
  artistsIntro: {
    en: "The musicians who bring Ashor to life.",
    bn: "যাঁদের গানে আসর প্রাণ পায়।",
  },
  participated: { en: "Seasons", bn: "অংশগ্রহণ" },
  videosTitle: { en: "Official Videos", bn: "অফিসিয়াল ভিডিও" },
  videosIntro: {
    en: "Ashor-approved videos will be linked here.",
    bn: "আসর-অনুমোদিত ভিডিওর লিংক এখানে থাকবে।",
  },
  aboutTitle: { en: "About Us", bn: "আমাদের কথা" },
  organizers: { en: "Organizers", bn: "আয়োজক" },
  contact: { en: "Contact", bn: "যোগাযোগ" },
  contactText: {
    en: "Message us on Facebook for questions, collaborations and updates.",
    bn: "প্রশ্ন, সহযোগিতা ও খবরের জন্য ফেসবুকে আমাদের মেসেজ করুন।",
  },
  messageUs: { en: "Message Ashor on Facebook", bn: "ফেসবুকে আসরকে মেসেজ করুন" },
  follow: { en: "Follow Ashor on Facebook", bn: "ফেসবুকে আসর" },
  rights: { en: "Ashor, Austin TX", bn: "আসর, অস্টিন টেক্সাস" },
  switchTo: { en: "বাংলা", bn: "English" },
};

export type Season = {
  slug: string;
  n: number;
  img: string;
  status: "past" | "upcoming";
  title: T;
  subtitle?: T;
  blurb: T;
};

export const seasons: Season[] = [
  {
    slug: "chhayachhondo",
    n: 1,
    img: "/images/s1.jpg",
    status: "past",
    title: { en: "Chhayachhondo", bn: "ছায়াছন্দ" },
    blurb: {
      en: "Season 1 — our first evening of Bangla songs. (Description to be added.)",
      bn: "সিজন ১ — বাংলা গানের আমাদের প্রথম সন্ধ্যা। (বিবরণ শীঘ্রই যোগ হবে।)",
    },
  },
  {
    slug: "jochhonabilash",
    n: 2,
    img: "/images/s2.png",
    status: "past",
    title: { en: "Jochhonabilash", bn: "জোছনাবিলাস" },
    blurb: {
      en: "Season 2 — a moonlit celebration in song. (Description to be added.)",
      bn: "সিজন ২ — গানে গানে জোছনার উৎসব। (বিবরণ শীঘ্রই যোগ হবে।)",
    },
  },
  {
    slug: "purbo-poshchim",
    n: 3,
    img: "/images/s3.png",
    status: "upcoming",
    title: { en: "Purbo-Poshchim", bn: "পূর্ব-পশ্চিম" },
    subtitle: {
      en: "Time, Music and Bangla",
      bn: "সময়, সংগীত আর বাংলা",
    },
    blurb: {
      en: "Season 3 — East and West, time, music and Bangla. Details and date to be announced.",
      bn: "সিজন ৩ — পূর্ব আর পশ্চিম; সময়, সংগীত আর বাংলা। তারিখ ও বিস্তারিত শীঘ্রই জানানো হবে।",
    },
  },
];

export type Artist = {
  name: T;
  type: T;
  seasons: number[];
  bio: T;
  blurb: T;
};

// Placeholder entries — replace with real artists.
export const artists: Artist[] = [
  {
    name: { en: "Artist Name One", bn: "শিল্পীর নাম এক" },
    type: { en: "Vocalist", bn: "কণ্ঠশিল্পী" },
    seasons: [1, 2],
    bio: { en: "Short bio goes here.", bn: "সংক্ষিপ্ত পরিচিতি এখানে।" },
    blurb: { en: "“A few words from the artist.”", bn: "“শিল্পীর কয়েকটি কথা।”" },
  },
  {
    name: { en: "Artist Name Two", bn: "শিল্পীর নাম দুই" },
    type: { en: "Cellist", bn: "চেলোবাদক" },
    seasons: [1, 3],
    bio: { en: "Short bio goes here.", bn: "সংক্ষিপ্ত পরিচিতি এখানে।" },
    blurb: { en: "“A few words from the artist.”", bn: "“শিল্পীর কয়েকটি কথা।”" },
  },
  {
    name: { en: "Artist Name Three", bn: "শিল্পীর নাম তিন" },
    type: { en: "Flutist", bn: "বংশীবাদক" },
    seasons: [2, 3],
    bio: { en: "Short bio goes here.", bn: "সংক্ষিপ্ত পরিচিতি এখানে।" },
    blurb: { en: "“A few words from the artist.”", bn: "“শিল্পীর কয়েকটি কথা।”" },
  },
];

export const organizers: { name: T; role: T }[] = [
  { name: { en: "Organizer Name", bn: "আয়োজকের নাম" }, role: { en: "Founder", bn: "প্রতিষ্ঠাতা" } },
];

export const officialVideos: { title: T; url: string }[] = [];
