/**
 * 当使用 https 时需要一个合法可用的证书。在 Vite v2 中，如果没有配置证书，Vite 会自动生成和缓存一个自签名的证书。
 * Package file volume basicSsl
 */
import basicSsl from "@vitejs/plugin-basic-ssl";

export const httpsSsl = () => basicSsl();
