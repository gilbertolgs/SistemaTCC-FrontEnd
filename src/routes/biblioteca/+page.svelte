<script lang="ts">

    import Card from '$components/Card.svelte';
    import { pageName } from '../stores';
    
    let projetos = [
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
        },
        {
            nome: "Inteligência Artificial na Educação: O Futuro da Aprendizagem",
            descricao: "Este projeto de TCC explora o impacto da inteligência artificial na educação, analisando sua aplicação em salas de aula e plataformas online. Investigamos como a IA personaliza a aprendizagem, automatiza processos educacionais e abordamos questões éticas associadas à sua adoção. O objetivo é entender como a IA está transformando a educação e moldando o futuro do ensino e da aprendizagem.",
            estado: 0,
            id: 4
        }
  ];
</script>
<svelte:head>
	<title>{pageName} - Projetos Publicados</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center flex-col">
    <h1>
        Biblioteca de Trabalhos de Conclusão de Curso
    </h1>
    <div class="cardHolderComponent">
          {#each projetos as projeto}
          <Card
          item={projeto}
          tipo="projeto"
          />
          {/each}
    </div>
</div>