/**
 * Package file volume legacyPlugin
 */
import legacyPlugin from "@vitejs/plugin-legacy";

export const legacyConfig = () =>
	legacyPlugin({
		// targets: ['Chrome 80', 'ie >= 11'],
		targets: ["> 1%", "last 2 versions", "not dead"],
		additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
		modernPolyfills: true,
	});
// legacy({
//   targets: ['ie >= 11'],
//   // additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
//   // renderLegacyChunks: true,
//   // polyfills: [
//   //   'es.symbol',
//   //   'es.array.filter',
//   //   'es.promise',
//   //   'es.promise.finally',
//   //   'es/map',
//   //   'es/set',
//   //   'es.array.for-each',
//   //   'es.object.define-properties',
//   //   'es.object.define-property',
//   //   'es.object.get-own-property-descriptor',
//   //   'es.object.get-own-property-descriptors',
//   //   'es.object.keys',
//   //   'es.object.to-string',
//   //   'web.dom-collections.for-each',
//   //   'esnext.global-this',
//   //   'esnext.string.match-all'
//   // ]
// });
