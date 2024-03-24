interface DUMMYDATA {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  relatedTopics: string[];
}

interface ABOUTDATA {
  id: number;
  imagePath: string;
  title: string;
  description: string;
}

interface RESPONSIBILITIES {
  id: number;
  description: string;
}
export const DUMMY_DATA: DUMMYDATA[] = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dmegiw31y/image/upload/v1710423619/a2sv/rt441m4pmc5ohdjnkmin.svg",
    title: "The Importance of In-Person Interaction",
    subTitle: "Enhancing Collaborative Efforts",
    description:
      "In today's digital age, where virtual communication dominates, the significance of in-person interaction cannot be overstated. Face-to-face meetings foster deeper connections and understanding among team members. They provide opportunities for spontaneous brainstorming sessions and encourage active engagement. By prioritizing in-person interactions, organizations can cultivate a vibrant and dynamic work culture.",
    relatedTopics: ["teamwork", "communication", "workplace culture"],
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dmegiw31y/image/upload/v1710423619/a2sv/nvhvmophpfsu29bbllsf.svg",
    title: "Advancements in Information Technology",
    subTitle: "Driving Innovation Across Industries",
    description:
      "Information technology continues to revolutionize the way businesses operate and communicate. From cloud computing to artificial intelligence, these advancements offer unprecedented opportunities for growth and efficiency. By leveraging IT solutions, companies can streamline processes, improve decision-making, and enhance customer experiences. Embracing innovation in IT is essential for staying competitive in today's fast-paced market.",
    relatedTopics: [
      "innovation",
      "digital transformation",
      "business efficiency",
    ],
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dmegiw31y/image/upload/v1710423620/a2sv/p7xg0fxporgk5vzauua4.svg",
    title: "Unlocking the Power of Data Analytics",
    subTitle: "Harnessing Insights for Success",
    description:
      "Data analytics empowers organizations to extract actionable insights from vast amounts of data. By leveraging advanced analytics tools and techniques, businesses can make informed decisions and drive strategic initiatives. From predictive modeling to sentiment analysis, data analytics offers invaluable opportunities for optimization and growth. Embracing data-driven approaches is crucial for staying competitive in today's data-driven world.",
    relatedTopics: [
      "data analysis",
      "business intelligence",
      "predictive modeling",
    ],
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dmegiw31y/image/upload/v1710423620/a2sv/p7xg0fxporgk5vzauua4.svg",
    title: "The Role of Cybersecurity in a Digital World",
    subTitle: "Protecting Against Evolving Threats",
    description:
      "As technology advances, so do the threats posed by cybercriminals. Cybersecurity plays a vital role in safeguarding sensitive information and mitigating risks. From encryption to intrusion detection systems, cybersecurity measures help defend against evolving threats and ensure data integrity. Implementing robust cybersecurity protocols is essential for maintaining trust and credibility in today's interconnected digital landscape.",
    relatedTopics: [
      "cybersecurity measures",
      "data protection",
      "risk management",
    ],
  },
];

export const getJob = (id: number) => {
  return DUMMY_DATA.find((data) => data.id === id);
};

export const ABOUT_DATA: ABOUTDATA[] = [
  {
    id: 1,
    imagePath: "/assets/postedon.svg",
    title: "Posted On",
    description: "Jul 1, 2023",
  },
  {
    id: 2,
    imagePath: "/assets/deadline.svg",
    title: "Deadline",
    description: "Jul 31, 2011",
  },
  {
    id: 3,
    imagePath: "/assets/location.svg",
    title: "Location",
    description: "Addis Ababa",
  },
  {
    id: 4,
    imagePath: "/assets/startdate.svg",
    title: "Start Date",
    description: "Aug 02, 2023",
  },
  {
    id: 5,
    imagePath: "/assets/enddate.svg",
    title: "End Date",
    description: "Sep 02, 2023",
  },
];

export const RESPONSIBILITIES_DATA: RESPONSIBILITIES[] = [
  {
    id: 1,
    description:
      "Community engagement to ensure that is supported and actively represented online",
  },
  {
    id: 2,
    description: "Focus on social media content development and publication",
  },
  {
    id: 3,
    description: "Marketing and strategy support",
  },
  {
    id: 4,
    description:
      "Stay on top of trends on social media platforms, and suggestcontent ideas to the team",
  },
  {
    id: 5,
    description: "Engage with online communities",
  },
];
