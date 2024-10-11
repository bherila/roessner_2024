/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    export: {
        ignore: ['*.pdf'],
    },
    images: {
        loader: "custom",
        imageSizes: [40,180,400,1080,2048],
        deviceSizes: [640,1920,2048],
    },
    transpilePackages: ["next-image-export-optimizer"],
    env: {
        nextImageExportOptimizer_imageFolderPath: "public/images",
        nextImageExportOptimizer_exportFolderPath: "out",
        nextImageExportOptimizer_quality: "75",
        nextImageExportOptimizer_storePicturesInWEBP: "true",
        nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
        nextImageExportOptimizer_generateAndUseBlurImages: "true",
        nextImageExportOptimizer_remoteImageCacheTTL: "0",
    },
};

export default nextConfig;
