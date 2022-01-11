/**
 * Is the screen of the given width mobile?
 * @param width the width of the screen
 * @return {boolean}
 */
export const mobileWidth = (width) => {
  return width < 600;
};

/**
 * Returns hash location without the #.
 * @param hash the hash location
 * @return {string}
 */
export const getSectionFromHash = (hash) => {
  if (hash.length > 0) {
    return hash.substr(1);
  } else {
    return '';
  }
};
