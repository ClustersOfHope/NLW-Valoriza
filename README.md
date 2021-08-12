# Estrutura para projeto NodeJS  

## Comandos necessários

- Para Funcionar
  - yarn add typescript -D
  - yarn add ts-node-dev -D
  - yarn add typeorm reflect-metadata sqlite3
  - yarn typeorm entity-create -n User
  - yarn add uuid
  - yarn add @types/uuid -D
  - yarn add express-async-errors
  
- Para Migração
  - yarn typeorm migration:create -n CreateUsers
  - typeorm migration:run
  - typeorm migration:revert
  - typeorm migration:run

  
