import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "8lp7mj97",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: "true",
  token:
    "skC1W22pMtHKmlDTG5rdyr6jl5tKSrlnxGJeXvjMBD6GepEVTwz5i9ujIwsppr5yy8kfrOecYV671OUuFNxboABwbnrPnkHTFS2xY7y5mz7FGcRHXL5meV5m9wImDuDib2WTyd5kLb7lPRwfaO1vyZdqIpDTD1PqYfkvLwfKhoLzXEUE0TaT",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
