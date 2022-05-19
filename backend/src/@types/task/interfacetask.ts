interface IcreateTask {
  title:string
  task:string,
  author:string
}

interface ItaskId extends IcreateTask {
  id:string,
  status:string,
  date:Date
}
