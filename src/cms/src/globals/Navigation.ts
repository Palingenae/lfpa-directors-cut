import { GlobalConfig } from "payload/types";

const Navigation: GlobalConfig = {
    slug: "navigation",
    access: {
      read: () => true,
    },
    admin: {
      description: "Barre de navigation",
    },
    fields: [
      {
        name: "Routes",
        required: true,
        type: "array",
        maxRows: 5,
        fields: [
          {
            label: "name",
            name: "Name",
            type: "text",
            required: true,
          },
          {
            label: "url",
            name: "URL",
            type: "text",
            required: true,
          },
        ],
      },
    ],
};
  
export default Navigation;