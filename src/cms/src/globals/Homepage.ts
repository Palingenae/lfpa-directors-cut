import { GlobalConfig } from "payload/types";

const Homepage: GlobalConfig = {
    slug: 'homepage',
    access: {
        read: () => true,
      },
      admin: {
        description: "Barre de navigation",
      },
      fields: []
}

export default Homepage;