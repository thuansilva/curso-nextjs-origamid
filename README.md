# Template Next.js Avançado

Este é um template para projetos Next.js, pré-configurado com ferramentas essenciais para desenvolvimento, testes e qualidade de código. O objetivo é acelerar o início de novos projetos, garantindo que as melhores práticas já estejam implementadas desde o primeiro dia.

## 🚀 Motivação

Iniciar um projeto do zero exige a configuração repetitiva de ferramentas como TypeScript, ESLint, Tailwind CSS e, principalmente, um ambiente de testes robusto. Este template resolve esse problema, oferecendo uma base sólida e pronta para produção, permitindo que você foque no que realmente importa: construir a sua aplicação.

## ✨ Principais Características

- **Framework Moderno**: Construído sobre o **Next.js**, aproveitando Server-Side Rendering (SSR), Static Site Generation (SSG) e a robustez do ecossistema React.
- **Qualidade de Código**: **TypeScript** para tipagem estática e **ESLint** para padronização de código, garantindo um código mais limpo e com menos bugs.
- **Estilização Eficiente**: **Tailwind CSS** para uma estilização rápida e baseada em utilitários, totalmente configurado e pronto para uso.
- **Ambiente de Testes Completo**: **Vitest** para testes unitários e de integração, com **React Testing Library** para testar componentes React de forma eficaz. A configuração de cobertura de código já está inclusa.
- **Estrutura Organizada**: A estrutura de pastas segue as convenções do Next.js (App Router), facilitando a organização de rotas, componentes e lógica de negócio.

## 🛠️ Tecnologias Utilizadas

### Principais

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

### Estilização

- [Tailwind CSS](https://tailwindcss.com/)

### Testes

- [Vitest](https://vitest.dev/): Um framework de testes unitários extremamente rápido e com uma API compatível com Jest.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): Para testar componentes React da maneira que os usuários os utilizam.
- [JSDOM](https://github.com/jsdom/jsdom): Para simular um ambiente de DOM para testes em Node.js.
- `@vitest/coverage-v8`: Para gerar relatórios de cobertura de testes.

### Qualidade de Código

- [ESLint](https://eslint.org/): Para encontrar e corrigir problemas no código JavaScript/TypeScript.
- [eslint-config-next](https://nextjs.org/docs/basic-features/eslint): Configurações de ESLint específicas para projetos Next.js.

## 🧪 Estrutura de Testes

A configuração de testes foi projetada para ser flexível e poderosa.

- **`vitest.config.ts`**: Arquivo principal de configuração do Vitest. Define o ambiente (`jsdom`), a inclusão de arquivos de teste (`.spec.ts(x)` para unitários e `.test.ts(x)` para integração) e as configurações de cobertura.
- **`vitest.setup.ts`**: Executado antes de cada arquivo de teste. Ideal para configurar `jest-dom` e realizar a limpeza do DOM (`cleanup`) após cada teste.
- **`vitest.global.setup.ts`**: Executado uma única vez antes de toda a suíte de testes. Útil para configurações globais, como preparar um banco de dados de teste.

## 🏁 Como Começar

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO> nome-do-projeto
    cd nome-do-projeto
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento do Next.js.
- `npm run build`: Gera a build de produção da sua aplicação.
- `npm run start`: Inicia um servidor de produção após a build.
- `npm run lint`: Executa o ESLint para analisar o código em busca de problemas.
- `npm run test`: Executa os testes com o Vitest.
- `npm run test:watch`: Executa os testes em modo de observação, rodando novamente a cada alteração.
- `npm run test:coverage`: Executa os testes e gera um relatório de cobertura de código.
