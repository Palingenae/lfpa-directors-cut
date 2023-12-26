import { CollectionConfig } from "payload/types";

const Movies: CollectionConfig = {
    slug: "movies",
    admin: {
        useAsTitle: "title",
    },
    access: {
        read: ({ req }) => {
            if (req.user) return true;
            return {
                _status: {
                    equals: "published",
                },
            };
        },
    },
    versions: {
        drafts: true,
    },
    fields: [
        {
            label: "Titre du film",
            name: "title",
            type: "text"
        },
        {
            label: "Réalisateur",
            name: "director",
            type: "text"
        },
        {
            label: "Genre",
            name: "genre",
            type: "select",
            hasMany: true,
            admin: {
                isClearable: true,
                isSortable: true
            },
            options: [
                {
                    label: "Romance",
                    value: "romance"
                },
                {
                    label: "Drame",
                    value: "drama"
                },
                {
                    label: "Documentaire",
                    value: "documentary"
                },
                {
                    label: "Noir",
                    value: "noir"
                },
                {
                    label: "Fantastique",
                    value: "fantastique"
                },
                {
                    label: "Horreur",
                    value: "horror"
                },
                {
                    label: "Comédie musicale",
                    value: "musicalS"
                }
            ]
        },
        {
            label: "Catégorie LFPA",
            name: "lfpaCategory",
            type: "select",
            options: [
                {
                    label: "Rougir",
                    value: "blush"
                },
                {
                    label: "Espérer",
                    value: "hope"
                },
                {
                    label: "Rire",
                    value: "hope"
                },
                {
                    label: "S'émouvoir",
                    value: "weep"
                },
            ]
        },
        {
            label: "Bande-annonce",
            name: "trailer",
            type: "text"
        },
        {
            label: "Synopsis",
            name: "synopsis",
            type: "richText"
        },
        {
            label: "Image de couverture",
            name: "coverImage",
            type: "upload",
            relationTo: "media",
            access: {
              read: () => true,
            },
            admin: {
              position: "sidebar",
            },
        },
        {
            label: "Acteur·rices phares",
            name: "keyActors",
            type: "array",
            maxRows: 3,
            admin: {
                position: "sidebar"
            },
            fields: [
                {
                    label: "nom",
                    name: "Nom",
                    type: "text"
                }
            ]
        },
    ]
}

export default Movies;