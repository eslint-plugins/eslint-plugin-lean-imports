/**
 * @fileoverview Rule to enforce an entire library is not imported
 * @author Matt Smith
 * @author Hugo Dozois-Caouette
 * @copyright 2015 Matt Smith. All rights reserved.
 */

export default function(context) {
  // merge rules with default
  const libraries = context.options ? context.options[0] : [];
  return {
    ImportDeclaration: function(node) {
      const index = libraries.indexOf(node.source.value);
      if (index !== -1) {
        context.report(node.source, `Importing the entire ${libraries[index]} library is not permitted, please import the specific functions you need`);
      }
    }
  };
}
