import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import imgUrl from '../../src/assets/code-mockup.png';
import Footer from "../components/Footer";


export function Subscribe() {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation();

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-center mt-8 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />

                    <h1 className="mt-8 text-[2rem] leading-tigth text-center mb-8">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>

                    <div className="p-8 bg-gray-700 border border-gray-500 rounded max-w-[350px] mx-auto lg:max-w-[600px]">
                        <strong className="text-2xl mb-6 block">
                            Increva-se gratuitamente!
                        </strong>

                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                            <input
                                className="bg-gray-900 rounded px-5 h-14"
                                type="text"
                                placeholder="Seu nome completo"
                                onChange={evento => setName(evento.target.value)}
                            />
                            <input
                                className="bg-gray-900 rounded px-5 h-14"
                                type="email"
                                placeholder="Digite o seu email"
                                onChange={evento => setEmail(evento.target.value)}
                            />

                            <button
                                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                                type="submit"
                                disabled={loading}
                            >
                                Garantir minha vaga
                            </button>
                        </form>
                    </div>

                    <p className="mt-4 text-gray-200 leading-relaxed ml-2 mr-2 text-center">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.

                    </p>
                </div>


            </div>

            <img src={imgUrl} className="mt-10" alt="" />
            <Footer />
        </div>
    )
}