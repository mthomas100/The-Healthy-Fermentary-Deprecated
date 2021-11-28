function getSmallCloudinary(url) {
  // Get the part of the URL before the last slash
  const beforeSlash = url.substring(0, url.lastIndexOf('/') + 1);

  // Get the part of the URL after the last slash
  const afterSlash = url.substring(url.lastIndexOf('/') + 1);

  // Add 'small_' to the beginning of afterSlash
  const smallAfterSlash = `small_${afterSlash}`;

  // combine beforeSlah and smallAfterSlash
  const newUrl = `${beforeSlash}${smallAfterSlash}`;

  return newUrl;
}

export default getSmallCloudinary;
