import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiIcon from '../../assets/img/home/api.png';
import homeIcon from '../../assets/img/home/home.png';
import logoutIcon from '../../assets/img/home/logout.png';
import { people } from '../../variables/people';
import statusImage from '../../assets/img/home/Status.jpg';
import performance from '../../assets/img/home/Performance.jpg';
import seguranca from '../../assets/img/home/Seguranca.jpg';
import { links } from '../../variables/links';
import { stats } from '../../variables/stats';
import { SocialIcon } from 'react-social-icons'
import Footer from '../../assets/img/home/footer.png';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/me`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    navigate('/login');
                }
            } catch (error) {
                console.error('Erro ao conectar ao servidor:', error);
                navigate('/login');
            }
        };

        checkAuth();
    }, [navigate]);

    const homeStyle = {
        backgroundColor: '#f0f0f0',
        height: '100%',
        width: '100%',
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(people.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visiblePeople = people.slice(startIndex, endIndex);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div style={homeStyle}>
            <div className="pt-10">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:py-5">
                    <h2 className="text-base/7 font-semibold text-[#0c53a2]">Monitoramento</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        Veja em tempo real quem está online.
                    </p>
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Monitoramento de Status
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Veja todos os usuário que estão online no momento.
                                    </p>
                                </div>
                                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                        <img
                                            className="size-full object-cover object-top"
                                            src={statusImage}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                        </div>
                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Melhoria</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Acompanhe a performance dos seus usuários e do uso do sistema.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                    <img
                                        className="w-full max-lg:max-w-xs"
                                        src={performance}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                        </div>
                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Segurança</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Propondo sempre a melhor segurança para os usuários cadastrados.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                    <img
                                        className="h-[min(152px,40cqw)] object-cover"
                                        src={seguranca}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Funcionamento API
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Teste a API e veja como é o funcionamento do fluxo de dados.
                                    </p>
                                    <a href="#">
                                        <span className="mt-2 text-sm/6 font-medium text-[#0c53a2] hover:underline">Testar API</span>
                                    </a>
                                </div>
                                <div className="relative min-h-[30rem] w-full grow">
                                    <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                        <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                            <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                    Login.js
                                                </div>
                                                <div className="border-r border-gray-600/10 px-4 py-2">Auth.js</div>
                                            </div>
                                        </div>
                                        <div className="px-6 pb-14 pt-6">{/* Your code example */}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#0c53a2] rounded-t-[50px]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <p className="mt-2 pt-10 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
                            Eai, quem está on?
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-[#0c53a2] py-10">
                <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <ul
                        role="list"
                        className="divide-y divide-gray-100 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-500"
                    >
                        {visiblePeople.map((person) => (
                            <li key={person.email} className="flex justify-between gap-x-6 py-5">
                                <div className="flex min-w-0 gap-x-4">
                                    <img
                                        alt=""
                                        src={person.imageUrl}
                                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                    />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold text-gray-900">{person.name}</p>
                                        <p className="mt-1 truncate text-xs text-gray-500">{person.email}</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        <p className="text-xs text-gray-500 mr-5">Online</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Controles de Paginação */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <p className="text-sm text-gray-600">
                            Page {currentPage} of {totalPages}
                        </p>
                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>

                <div class="fixed z-50 inset-x-0 bottom-0 h-16 mb-4">
                    <div
                        class="flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg w-[20rem] mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90"
                    >
                        <button
                            class="text-red-500 hover:text-red-600 mx-2 transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 rounded-full"
                        >
                            <img src={apiIcon} alt="Dashboard Icon" class="h-6 w-6" />

                        </button>
                        <button
                            class="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:rotate-12 focus:outline-none focus:ring-2 rounded-full"
                        >
                            <img src={homeIcon} alt="Home Icon" class="h-6 w-6" />
                        </button>

                        <a
                            href='/logout' class="text-gray-600 hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out focus:outline-none hover:scale-110 focus:ring-2 rounded-full"
                        >
                            <img src={logoutIcon} alt="Dashboard Icon" class="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className=" overflow-hidden py-5 sm:pt-10 sm:pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-5xl font-semibold tracking-tight text-[#0c53a2] sm:text-7xl">Desenvolvimento</h2>
                        <p className="mt-8 text-pretty text-black font-medium text-black sm:text-xl/8">
                            Como foi a trilha e o time que realizou o projeto? Veja os responsáveis e em números como foi o desenvolvimento.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-[#0c53a2] sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a key={link.name} href={link.href}>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse gap-1">
                                    <dt className="text-base/7 text-black">{stat.name}</dt>
                                    <dd className="text-4xl font-semibold tracking-tight text-[#0c53a2]">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <footer class="bg-white rounded-t-[50px] pt-5 pb-20">
                <div class="container mx-auto text-center">
                    <div class="flex justify-center items-center mb-6">
                        <img src={Footer} alt="Motion Logo" class="h-12 w-auto mr-2" />
                    </div>

                    <div class="flex justify-center space-x-6 mb-6">
                        <a href="#">
                            <SocialIcon url="https://www.instagram.com/interfocus.tecnologia?igsh=YmR2Mnd2ejE5ZHpq" network="instagram" bgColor="#0c53a2" />
                        </a>
                        <a href="#">
                            <SocialIcon url="https://br.linkedin.com/company/interfocus-tecnologia" network="facebook" bgColor="#0c53a2" />
                        </a>
                        <a href="#">
                            <SocialIcon url="https://br.linkedin.com/company/interfocus-tecnologia" bgColor="#0c53a2" />
                        </a>
                    </div>

                    <p className="text-sm">
                        © {new Date().getFullYear()} <span className="font-semibold">Unimar</span> &{" "}
                        <span className="font-semibold">Interfocus</span>. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div >
    );
};

export default HomePage;