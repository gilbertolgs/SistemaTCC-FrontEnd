import User from '$model/User';
import { readable, writable, type Writable } from 'svelte/store';

export const pageName = "SGTCC";
export const apiRoute = "https://localhost:7009/api/";

export const connectionError = writable(200);

export const storeConvites = writable([]);

let user = new User(0, 0, "", "", "", "", 0, "");

export const storeLogin: Writable<User | null> = writable(user);

export const projetos = [
    {
        nome: "Transformação Digital na Saúde: Um Estudo de Impacto",
        descricao: "Este projeto visa investigar o impacto das tecnologias emergentes no setor de saúde. Serão explorados os avanços na telemedicina, o uso de inteligência artificial para diagnóstico médico e a integração de dispositivos médicos conectados. O objetivo é avaliar como essas tecnologias estão transformando a prestação de serviços de saúde e melhorando os resultados dos pacientes.",
        estado: 0,
        id: 1
    },
    {
        nome: "Redes Sociais e Política: Uma Análise das Eleições",
        descricao: "Este projeto tem como objetivo analisar a influência das redes sociais na tomada de decisões políticas. Serão investigados os padrões de comportamento dos usuários nas redes sociais durante as eleições, a disseminação de informações políticas e o impacto disso nas escolhas dos eleitores. O estudo também examinará as medidas de regulamentação e a privacidade dos dados dos usuários.",
        estado: 2,
        id: 2
    },
    {
        nome: "Sustentabilidade na Manufatura: Diretrizes para um Futuro Sustentável",
        descricao: "Esse Projeto se concentra na sustentabilidade ambiental nas indústrias de manufatura. Será realizado um estudo abrangente das práticas de produção sustentável, incluindo a adoção de energias renováveis, a redução de resíduos e a eficiência energética. O objetivo final é desenvolver um conjunto de diretrizes para ajudar as empresas a adotar práticas mais sustentáveis e reduzir seu impacto ambiental.",
        estado: 1,
        id: 3
    }
];

export const logins = [
    {
        id: 1,
        nome: 'Administrador',
        email: 'admin@aedb.br',
        senha: '123',
        curso: null,
        papel: 'Administrador'
    },
    {
        id: 2,
        nome: 'Gilberto Luis',
        email: 'gilberto.luis@aedb.br',
        senha: '123',
        curso: 'Sistema de Informação',
        papel: 'Aluno'
    },
    {
        id: 3,
        nome: 'João Evangelista',
        email: 'joao.evangelista@aedb.br',
        senha: '123',
        curso: 'Sistema de Informação',
        papel: 'Aluno'
    },
    {
        id: 4,
        nome: 'João Marcos',
        email: 'joao.marcos@aedb.br',
        senha: '123',
        curso: 'Sistema de Informação',
        papel: 'Aluno'
    }
]