# Three.js 0.185.1 (MIT)

Copiado de https://www.npmjs.com/package/three — apenas os dois arquivos de
build necessarios. `three.module.min.js` importa `./three.core.min.js`, por
isso os dois precisam ficar lado a lado.

Carregado com `import()` dinamico, so quando o hero esta visivel e o
dispositivo nao pede movimento reduzido. Nao entra no caminho critico: quem
abre o site e nunca ve o hero animado nao baixa nada disso.

Para atualizar: `npm pack three` e copiar os dois arquivos de `package/build/`.
