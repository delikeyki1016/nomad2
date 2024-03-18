/** @type {import('next').NextConfig} */

// const API_KEY = process.env.API_KEY;
const API_KEY= "10923b261ba94d897ac6b81148314a3f"

const nextConfig = {
    reactStrictMode: true,
    async redirects() {
		return [
			{
				source: "/contact/:path*",
				destination: "/form/:path*",
				permanent: false
			},
            // {
            //     source: "/movies/:title/:poster/:id",
            //     destination: "/movies/:title/",
            //     permanent: false
            // }
		]
	},
    
    // api key를 숨길 수 있다.
    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            },
            {
                source: "/api/movies/:id",
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
            },
        ]
    }
};
export default nextConfig;