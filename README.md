# Ebytr
O Etrybr é uma lista de tarefas onde é possivel realizar as ações do CRUD


## Desensolvimento:
### Tecnologias utilizadas no back-end:
Typescript, express, chai, mocha, mongoose

### Tecnologias utilizadas no front-end:
React
# Como executar localmente

### Inicializando o APP
execute:
```
docker-compose up --build -d
```
### Rode os testes do backend:
```
docker exec -it backend npm run test
```

### Parando a execução
execute:
```
docker-compose down --remove-orphans
```