interface createTask {
  titulo:string
  task:string,
  author:string
}

interface ItaskId extends createTask {
  id:string,
  status:string,
  date:Date
}
