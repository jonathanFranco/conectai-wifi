# Docker Setup para SpeedNet Landing Page

Este documento explica como usar o Docker para construir e executar o projeto SpeedNet Landing Page.

## Requisitos

- Docker
- Docker Compose

## Construindo e Executando com Docker

### Usando Docker Compose (Recomendado)

1. Construa e inicie os contêineres:

\`\`\`bash
docker-compose up -d
\`\`\`

2. Acesse a aplicação em: http://localhost:3000

3. Para parar os contêineres:

\`\`\`bash
docker-compose down
\`\`\`

### Usando Docker diretamente

1. Construa a imagem:

\`\`\`bash
docker build -t speednet-landing .
\`\`\`

2. Execute o contêiner:

\`\`\`bash
docker run -p 3000:3000 speednet-landing
\`\`\`

## Estrutura do Docker

- **Dockerfile**: Configuração multi-stage para otimizar o tamanho da imagem e segurança
  - Stage 1: Instalação de dependências
  - Stage 2: Build da aplicação Next.js
  - Stage 3: Configuração do ambiente de produção

- **docker-compose.yml**: Orquestração de serviços
  - Serviço web: A aplicação Next.js
  - Configuração de portas, reinicialização e verificação de saúde

## Considerações para Produção

Para um ambiente de produção, considere:

1. Adicionar um proxy reverso como Nginx
2. Configurar HTTPS
3. Implementar um sistema de logs centralizado
4. Configurar monitoramento

## Solução de Problemas

Se encontrar problemas ao executar os contêineres:

1. Verifique os logs:

\`\`\`bash
docker-compose logs
\`\`\`

2. Verifique se as portas estão disponíveis:

\`\`\`bash
netstat -tuln | grep 3000
\`\`\`

3. Verifique o status dos contêineres:

\`\`\`bash
docker-compose ps
