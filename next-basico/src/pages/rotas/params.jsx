import { useRouter } from 'next/router'

export default function params() {
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome
    
    console.log(router)

    return (
        <div>
            <h1>Rotas params:</h1>
            <h2> ID: {id} e Nome: {nome}</h2>
        </div>
    )
}
//Rotas 60. Rotas #03