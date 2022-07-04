import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "q280j9d7",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "skVw0Fe7KI8GM7hpJsDahP6pW3SABvCrhUf5xMClaHNPHoI4UyUbw2YRC6drtKySWRH02ehKjMn2OElKnUon4YGQmrPqTpKsHcniusmBCVjwYxQLKKxrQhacpg7BN0Q2WWH4oFdXfcF2S7UCYr7geBIJRyWO8fJjfHvi0iK9HhDk6RbSczm4",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);