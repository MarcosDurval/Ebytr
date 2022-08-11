# Ebytr
O Etrybr é um aplicativo de lista de tarefas onde é possivel realizar as ações do CRUD

<img src="./front.png"/>

## Desensolvimento:
### Tecnologias utilizadas no back-end:
Typescript, express, chai, mocha, mongoose

### Tecnologias utilizadas no front-end:
React
# Como executar localmente

crie um .env no diretorio backend e siga o .env.example
### Inicializando o APP
no mesmo diretório que está o docker-compose execute:
```
docker-compose up --build -d
```
### Rode os testes do backend:

```
docker exec -it backend npm run test
```

### Parando a execução
no mesmo diretório que está o docker-compose execute:
```
docker-compose down -v --remove-orphans
```
