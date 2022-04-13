export interface bookSlice {
  status: "idle" | "loading" | "failed";
  error: string;
  books: {
    id: number;
    title: string;
  };
}

export interface bookApiInterface {
  status: "idle" | "loading" | "failed" | "fulfilled";
  endpointName: string;
  requestID: string;
  originalArgs: string;
  startedTimeStamp: number;

  kind: string;
  totalItems: number;
  items: [
    {
      kind: string;
      id: string;
      etag: string;
      selfLink: string;
      volumeInfo: {
        title: string;
        subtitle: string;
        authors: string[];
        publisher: string;
        publishedDate: string;
        description: string;
        imageLinks: {
          smallThumbnail: string;
          thumbnail: string;
          language: string;
          previewLing: string;
          infoLink: string;
          canonicalVolumeLink: string;
        };
      };
      industryIdentifiers: [
        {
          type: string;
          identifier: string;
        }
      ];
      readingModes: {
        text: boolean;
        image: boolean;
      };
      pageCount: number;
      printType: string;
      categories: string[];
      averageRating: number;
      maturityRating: string;
      allowAnnonLogging: boolean;
      contentVersion: string;
      penalizationSummary: {
        containsEpubBubbles: boolean;
        containsImageBubbles: boolean;
      };
      sales: {};
      assessInfo: {};
      searchInfo: {
        textSnippet: string;
      };
    }
  ];

  fulfilledTimeStamp: number;
}

export interface items {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
      language: string;
      previewLing: string;
      infoLink: string;
      canonicalVolumeLink: string;
      sales: {};
      assessInfo: {};
      searchInfo: {
        textSnippet: string;
      };
    };
  };
  industryIdentifiers: [
    {
      type: string;
      identifier: string;
    }
  ];
  readingModes: {
    text: boolean;
    image: boolean;
  };
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  maturityRating: string;
  allowAnnonLogging: boolean;
  contentVersion: string;
  penalizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
}

export interface favoriteBooksState {
  favoriteBooks: [
    {
      favoriteBooks: string;
      favoriteBookId: string;
    }
  ];
}
const initialFavBookState: favoriteBooksState = {
  favoriteBooks: [
    {
      favoriteBooks: "",
      favoriteBookId: "",
    },
  ],
};

export interface favoriteBookApi {
  accessInfo: {
    accessViewStatus: string;
    country: string;
    embeddable: boolean;
  };
  epub: {
    acsTokenLink: string;
    isAvailable: boolean;
  };
  pdf: { isAvailable: boolean };
  publicDomain: false;
  quoteSharingAllowed: false;
  textToSpeechPermission: string;
  viewability: string;
  webReaderLink: string;
  etag: string;
  id: string;
  kind: string;
  layerInfo: {
    layers: [string];
  };
  saleInfo: {
    buyLink: string;
    country: string;
    isEbook: boolean;
    listPrice: { amount: number; currencyCode: string };
    offers: [
      {
        finskyOfferType: number;
        giftable: boolean;
      }
    ];
    retailPrice: { amount: number; currencyCode: string };
    saleability: string;
  };
  listPrice: {
    amountInMicros: number;
    currencyCode: string;
  };
  offers: [{}];
  retailPrice: {
    amount: number;
    currencyCode: string;
  };
  saleability: string;
  selfLink: string;

  volumeInfo: {
    allowAnonLogging: boolean;
    authors: [string];
    averageRating: number;
    canonicalVolumeLink: string;
    categories: [string];
    contentVersion: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
    };
    industryIdentifiers: [{}, {}];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    previewLink: string;
    printType: string;
    printedPageCount: number;
    publishedDate: string;
    publisher: string;
    ratingsCount: number;
    readingModes: { text: boolean; image: boolean };
    title: string;
  };
}
