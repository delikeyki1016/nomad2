import { useRouter } from "next/router"
import Seo from "../../components/Seo"

export default function Detail({params}){
    const router = useRouter()
    console.log(router)
    const [title, poster, id] = params || [] // url을 home에서 클릭으로 이동하지 않고, url을 따로 쳐서 들어오면 에러가 나는 부분 방지 
    return <>
        <Seo title={title} />
        <div className="container">
        <div><img src={`https://image.tmdb.org/t/p/w500/${poster}`} /></div>
        <h4>{title || "Loading..."}</h4>
        <style jsx>{`
            .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
            }
            img {
            width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            h4 {
            font-size: 18px;
            }
        `}</style>
    </div>
    </>
}

export function getServerSideProps({params:{params}}) {
    console.log(params)
    return {
        props: {
            params,
        }
    }
}