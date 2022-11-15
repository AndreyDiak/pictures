export default {
  name: "priceCard",
  title: "PriceCard",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the priceCard",
      type: "string",
    },
    {
      name: "image",
      title: "priceBackground",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "prices",
      title: "Prices",
      type: "array",
      of: [
        {
          name: "price",
          title: "Price",
          type: "document",
          fields: [
            {
              name: "size",
              title: "Size",
              description: "Size of picture",
              type: "string",
            },
            {
              name: "price",
              title: "Price",
              description: "Price of picture",
              type: "string",
            }
          ]
        }
      ]
    },
  ]
};
