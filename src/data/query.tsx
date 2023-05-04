export const fieldsArray: string[] = [
  "id",
  "image_id",
  "alt_text",
  "title",
  "alt_titles",
  "artist_title",
  "artist_display",
  "place_of_origin",
  "date_display",
  "dimensions",
  "medium_display",
  "thumbnail",
  "artwork_type_title",
  "artwork_type_id",
  "is_public_domain",
  "color",
  "colorfulness",
  "boost_rank",
  "is_boosted",
  "_score",
];

export async function getJson(
  size: number,
  from,
  seedCards: number,
  searchQuery,
  posts,
  accuracy: number = 0.0003
) {
  const dataJson = await fetch("https://api.artic.edu/api/v1/search", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(getQuery()),
  }).then((response) => response.json());

  return dataJson;

  function getQuery() {
    const sort = !searchQuery?{ "color.population": "desc" } : { _score: "desc" };
    return {
      resources: "artworks",
      // prettier-ignore
      fields: [...fieldsArray],
      q: searchQuery,
      boost: false,
      // page: qPage,
      // limit: qLimit,
      query: {
        function_score: {
          query: {
            bool: {
              must: [
                {
                  term: {
                    is_public_domain: true,
                  },
                },
                {
                  range: {
                    "color.h": {
                      gte: 170,
                      lte: 260,
                    },
                  },
                },
                {
                  range: {
                    "color.s": {
                      gte: 15,
                      lte: 100,
                    },
                  },
                },
                {
                  range: {
                    "color.percentage": {
                      gte: accuracy,
                      lte: 100,
                    },
                  },
                },
                {
                  range: {
                    "color.population": {
                      gte: 1,
                      lte: 10000,
                    },
                  },
                },
                {
                  bool: {
                    should: [
                      {
                        range: {
                          "color.population": {
                            gt: 0,
                          },
                        },
                      },
                      {
                        range: {
                          colorfulness: {
                            gt: 0,
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  bool: {
                    should: [
                      { term: { artwork_type_id: 1 } },
                      { term: { artwork_type_id: 14 } },
                      {
                        bool: {
                          must: [
                            { term: { artwork_type_id: 18 } },
                            { match: { place_of_origin: { "query": "Japan", "boost": 1 } } }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  exists: {
                    field: "image_id",
                  },
                },
              ],
            },
          },
          // boost_mode: "replace",
          // random_score: {
          //   field: "id",
          //   seed: seedCards,
          // },
        },
      },
      size: size,
      from: from,

      // sort: [ { "color.population": "asc/desc" } ],
      // filter only if to query = false
      sort: [sort],
    };
  }
}
