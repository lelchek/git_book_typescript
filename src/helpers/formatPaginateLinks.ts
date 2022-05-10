export const getNextLink = (links: string) => {
  const linkArray = links.split(",");

  const nextLinkString = linkArray.find((link) => link.includes("next"));

  if (!nextLinkString) {
    return null;
  }

  const nextLinkUrl = nextLinkString.split(";")[0];

  return nextLinkUrl.slice(1, -1);
};
