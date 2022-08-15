# Ebytr
O Etrybr é um aplicativo de lista de tarefas onde é possivel realizar as ações do CRUD

<img src="./front.png"/>

## Desensolvimento:
### Tecnologias utilizadas no back-end:
Typescript, express, chai, mocha, mongoose

### Tecnologias utilizadas no front-end:
React
# Como executar localmente:

```
git clone git@github.com:MarcosDurval/Ebytr.git
```
### Inicializando o APP

```
cd Ebytr
```
```
docker-compose up --build -d
```
### Rode os testes do backend:

```
docker exec -it backend npm run test
```

### Parando a execução
```
docker-compose down --remove-orphans
```
