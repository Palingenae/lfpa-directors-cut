import { CollectionConfig } from "payload/types";
import path from "path";

const Medias: CollectionConfig = {
    slug: 'media',
    admin: {
        useAsTitle: "filename",
        group: "Contenu"
    },
    access: {
        read: ()  => true
    },
    upload: {
      adminThumbnail: 'thumbnail',
      staticDir: path.resolve(__dirname, '../../media'),
      mimeTypes: [
          'image/png',
          'image/jpeg',
          'image/webp',
          'image/gif'
      ]
    },
    fields: [
        {
            name: "alt",
            label: "Description de l'image",
            localized: true,
            type: "text",
            required: true
        }
    ]
}

export default Medias;