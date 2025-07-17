import nextra from 'nextra'
 
const withNextra = nextra({

});
 
export default withNextra({
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      'next-mdx-import-source-file': './src/mdx-components.tsx'
    }
  }
})

// import nextra from 'nextra'

// const withNextra = nextra({
//   /* Nextra-specific options here */
// });
 
// const { experimental: exp, ...config } = withNextra({
//   /* Next-specific config options here */
//   turbopack: {
//     // resolveExtensions: [ ... ]
//   }
// });

// // Move `experimental.turbo` to `config.turbopack` while preserving other configuration
// const { turbo: turbopack, ...experimental } = exp;
// const nextConfig = { 
//   ...config, 
//   experimental, 
//   turbopack: {
//     ...turbopack,
//     ...config.turbopack,
//   } 
// };

// export default nextConfig;

// // /// NEXTRA IMPLEMENTATION
// // import nextra from 'nextra'
 
// // // Set up Nextra with its configuration
// // const withNextra = nextra({
// //   // ... Add Nextra-specific options here
// // })
 
// // // Export the final Next.js config with Nextra included
// // export default withNextra({
// //   // ... Add regular Next.js options here
// //   turbopack: {

// //   }
// // })



// // /// MARKDOC IMPLEMENTATION
// // // import type { NextConfig } from "next";

// // // const nextConfig: NextConfig = {
// // //   /* config options here */
// // // };

// // // // const withMarkdoc = require('@markdoc/next.js');
// // // // const nextConfig: NextConfig = withMarkdoc(/* options */)({
// // // //   pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
// // // // });

// // // export default nextConfig;
