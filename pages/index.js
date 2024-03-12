import Link from "next/link";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function Home({results}) {
    const router = useRouter();
    const onClick = (id, poster, title) => {
        // router.push({
        //     pathname: `/movies/${id}`,
        //     query: {
        //         id,
        //         title: title,
        //         poster: poster
        //     }
        // }, `/movies/${id}`) // 해당정보는 as 정보 : 정보를 숨겨줌 
        router.push(`/movies/${title}/${poster}/${id}`)
    }
    return (
        <>
        <Seo title="Home" />
        <div className="container">            
            {results?.map((movie) => (
                <div className="movie" key={movie.id} onClick={()=>onClick(movie.id, movie.poster_path, movie.original_title)}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        <style jsx>{`
            .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
            }
            .movie {
                cursor:pointer;
            }
            .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie:hover img {
            transform: scale(1.05) translateY(-10px);
            }
            .movie h4 {
            font-size: 18px;
            text-align: center;
            }
        `}</style>
        </div>
    </>
    );
}

// server side에서 작동하기 때문에 정보를 모두html에 담아 프론트에 넘겨준다. 
export async function getServerSideProps() {
    const { results } = await (await fetch("http://localhost:3000/api/movies")).json();
    return {
        props: {
            results, 
            // 여기서의 props라는 키의 값인 results가 _app.js의 pageProps로 전달됨 
        }
    }
}