# Ethereum/BSC Wallet Key Recovery Tool

## Visão Geral

Esta ferramenta permite a recuperação de chaves privadas de carteiras Ethereum (ETH) e Binance Smart Chain (BSC) a partir de frases mnemônicas (seed phrases). Desenvolvida para auxiliar na recuperação de acesso a carteiras e para fins educacionais.

## Funcionalidades

- Recuperação de chaves privadas a partir de frases mnemônicas
- Compatibilidade com carteiras Ethereum e BSC
- Verificação de endereços específicos

## Tecnologias Utilizadas

- Node.js
- ethers.js: Biblioteca para interação com a blockchain Ethereum
- TronWeb: Biblioteca para interação com a blockchain TRON
- bs58/base-58: Bibliotecas para codificação/decodificação Base58

## Pré-requisitos

- Node.js (v14 ou superior)
- NPM (Node Package Manager)

## Instalação

1. Clone o repositório e acesse a pasta do projeto
2. Execute `npm install` para instalar as dependências

## Como Utilizar

1. Edite o arquivo `recovery_keys.js` e substitua a frase mnemônica de exemplo pela frase real
2. Opcionalmente, atualize o endereço para verificação na condição if
3. Execute o script com o comando `node recovery_keys.js`
4. O resultado mostrará o endereço da carteira e a chave privada correspondente

## Considerações de Segurança

- Use esta ferramenta apenas em ambientes seguros e isolados
- Nunca compartilhe frases mnemônicas ou chaves privadas
- Recomenda-se o uso em máquinas sem conexão com a internet para máxima segurança

## Aplicações

- Recuperação de acesso a carteiras quando apenas a frase mnemônica está disponível
- Verificação de propriedade de carteiras
- Fins educacionais sobre derivação de chaves em criptomoedas

## Licença

ISC

## Aviso Legal

Esta ferramenta deve ser utilizada apenas para fins legítimos e em conformidade com todas as leis e regulamentos aplicáveis.