/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
    sassOptions: {


        includePaths: [path.join(process.cwd(), 'app')],

    },
};

export default nextConfig;