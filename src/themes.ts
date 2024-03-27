const themes = [
  {
    "category": "ecommerce",
    "templates": [
      "clothes",
      "e-shop",
      "shipping"
    ]
  },
  {
    "category": "fashion",
    "templates": [
      "beauty-woman",
      "eoteric",
      "nature-leave",
      "sale-men"
    ]
  },
  {
    "category": "newsletter",
    "templates": [
      "colourful",
      "minimal"
    ]
  },
  {
    "category": "offer",
    "templates": []
  },
  {
    "category": "professional",
    "templates": []
  },
  {
    "category": "real-estate",
    "templates": [
      "residence"
    ]
  },
  {
    "category": "services",
    "templates": [
      "custom-design"
    ]
  },
  {
    "category": "sports",
    "templates": [
      "template-sport"
    ]
  },
  {
    "category": "travel",
    "templates": [
      "travel-agency"
    ]
  },
  {
    "category": "webinar",
    "templates": [
      "live-webinar"
    ]
  },
  {
    "category": "welcome",
    "templates": [
      "corporate",
      "design"
    ]
  }
];

const basePath = 'https://ngb-templates.s3.amazonaws.com'

type Theme = {
  category: string;
  template: string;
  url: string;
}

export function allThemes(): Theme[] {
  return themes.flatMap(({category, templates}) => {
    return templates.map(template => {
      return {
        category,
        template,
        url: `${basePath}/${category}-${template}.jpg`
      }
    });
  });
}
