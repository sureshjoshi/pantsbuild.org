export default function (context, options) {
  return {
    name: "tailwindcss-plugin",
    configurePostCss(postcssOptions) {
      // TODO: Delegate css to tailwind?
      postcssOptions.plugins.push(require("@tailwindcss/postcss"));
      return postcssOptions;
    },
  };
}
