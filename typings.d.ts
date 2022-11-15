interface SanityBody {
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  _rev: string;
}

interface Image {
  type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

interface Picture extends SanityBody {
  _type: 'picture';
  title: string;
  image: Image;
}

interface PriceCard extends SanityBody {
  _type: 'priceCard'
  title: string;
  image: Image;
  prices: {
    name: string;
    price: string;
  }[]
}